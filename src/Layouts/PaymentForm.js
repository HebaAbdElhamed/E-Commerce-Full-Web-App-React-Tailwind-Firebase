import { useState , useEffect} from "react";
import PaymentInput from "../Components/PaymentInput";
export default function PaymentForm({totalQuantity , totalPrice, onSubmit,onData }) {
    const [method, setMethod] = useState(null);
    useEffect(() => {
        if (method) {
          onData({ method, totalQuantity, totalPrice });
        }
      }, [method]);
      
    return (
        <form onSubmit={onSubmit} className="shadow-custom m-8  grid grid-cols-[0.5fr,0.5fr,2fr,1fr]">
                <div className="flex flex-col items-center justify-center text-xl">
                    <p>Items</p>
                    <p>Total</p>
                </div>
                <div className="flex flex-col justify-center text-gray-400 ">
                    <p>{totalQuantity}</p>
                    <p>{totalPrice} $</p>
                </div>
                <div className="flex items-center justify-center space-x-6">
                    <PaymentInput id="visa" image="visa.webp"    onSelect={setMethod} selected={method}/>
                    <PaymentInput id="master" image="master.png" onSelect={setMethod} selected={method}/>
                    <PaymentInput id="cash" image="cash.png" onSelect={setMethod} selected={method}/>
                </div>
                <div className="flex flex-col items-end justify-between space-y-3">
                    <button className="py-3 text-white px-14 bg-main hover:shadow-2xl hover:scale-110" type="submit">Checkout</button>
                    <button onClick={() => setMethod(null)} type="reset" className="px-16 py-3 text-white bg-gray-400 hover:shadow-2xl hover:scale-110">Cancel</button>
                </div>
            </form>
    );
}