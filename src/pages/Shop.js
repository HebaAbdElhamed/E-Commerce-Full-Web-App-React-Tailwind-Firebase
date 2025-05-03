import React, { useContext } from "react";
import { CartContext } from "../Layouts/CartContext";
import Card from "../Components/Card";
import ScrollReveal from "../Animations/ScrollReveal";

export default function Shop() {
    const { cart, updateQuantity, productList } = useContext(CartContext);

    return (
        <div className="font-inria">
            <h3 className="text-3xl text-center text-white bg-main">Shop</h3>
            {productList.map((product) => (
                <ScrollReveal key={product.id}>
                    <Card  key={product.id} product={product} quantity={cart[product.id] || 0} updateQuantity={(quantity) => updateQuantity(product.id, quantity)} />
                </ScrollReveal>
            ))}
        </div>
    );
}