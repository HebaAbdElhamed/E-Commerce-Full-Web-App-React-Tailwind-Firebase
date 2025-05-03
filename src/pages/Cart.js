import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CartCard from "../Components/CartCard";
import PaymentForm from "../Layouts/PaymentForm";
import ShippingPart from "../Layouts/ShippingPart";
import Success from "../Layouts/Success";
import { CartContext } from "../Layouts/CartContext";
import ScrollReveal from "../Animations/ScrollReveal";
import { db } from "../Components/firebase";
import { collection, addDoc } from "firebase/firestore";

export default function Cart() {
  const [paymentData, setPaymentData] = useState(null);
  const [shippingData, setShippingData] = useState(null);
  const [orderId, setOrderId] = useState(null);
  const navigate = useNavigate();
  const { cart, updateQuantity, productList, setCart } = useContext(CartContext);

  const totalQuantity = Object.values(cart).reduce((a, q) => a + q, 0);
  const totalPrice = Object.entries(cart).reduce((acc, [id, q]) => {
    const p = productList.find(x => x.id === parseInt(id));
    return p ? acc + p.price * q : acc;
  }, 0);

  const [isSubmit, setIsSubmit] = useState(false);
  const [isSubmitShipping, setIsSubmitShipping] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmit(true);
  };

  const handleSubmitShipping = (e) => {
    e.preventDefault();
    setIsSubmitShipping(true);
    localStorage.removeItem("cart");
  };

  useEffect(() => {
    if (isSubmitShipping) {
      
      (async () => {
        try {
          // إضافة الأوردر واسترجاع docRef
          const docRef = await addDoc(collection(db, "orders"), {
            items: Object.entries(cart).map(([id, quantity]) => {
              const p = productList.find(x => x.id === parseInt(id));
              return { id, title: p.title, price: p.price, quantity };
            }),
            totalQuantity,
            totalPrice,
            payment: paymentData,
            shipping: shippingData,
            createdAt: new Date()
          });
          // حفظ رقم الأوردر في state
          setOrderId(docRef.id);
          console.log("Order saved with ID:", docRef.id);
        } catch (err) {
          console.error("Error saving order:", err);
        }
      })();

      const timer = setTimeout(() => {
        setCart({});
        navigate("/");
      }, 9000);
      return () => clearTimeout(timer);
    }
  }, [isSubmitShipping]);

  return (
    <div className="font-inria">
      <h3 className="mb-10 text-3xl text-center text-white bg-main">Checkout</h3>

      {Object.keys(cart).length === 0 ? (
        <ScrollReveal>
          <p className="text-3xl text-center text-gray-500 my-52">
            Your Cart is Empty!
          </p>
        </ScrollReveal>
      ) : (
        Object.entries(cart).map(([id, q]) => {
          const p = productList.find(x => x.id === parseInt(id));
          return (
            <ScrollReveal key={id}>
              <CartCard
                product={p}
                quantity={q}
                updateQuantity={qty => updateQuantity(p.id, qty)}
              />
            </ScrollReveal>
          );
        })
      )}

      {Object.keys(cart).length > 0 && (
        <>
          <ScrollReveal>
            <PaymentForm
              totalQuantity={totalQuantity}
              totalPrice={totalPrice}
              onSubmit={handleSubmit}
              onData={setPaymentData}
            />
          </ScrollReveal>
          {isSubmit && !isSubmitShipping && (
            <ScrollReveal>
              <ShippingPart
                onData={(data) => setShippingData(data)}
                onSubmit={handleSubmitShipping}
              />
            </ScrollReveal>
          )}
          {isSubmitShipping && (
            <ScrollReveal>
              <Success order={orderId} />
            </ScrollReveal>
          )}
        </>
      )}
    </div>
  );
}
