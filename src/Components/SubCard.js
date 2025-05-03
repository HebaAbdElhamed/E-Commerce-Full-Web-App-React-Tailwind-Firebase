import { FaCirclePlus, FaCircleMinus } from "react-icons/fa6";
export default function SubCard({quantity, updateQuantity,product}) {
    return (
        <div className="flex flex-col items-center justify-center my-3 ml-5 mr-10 space-y-4 shadow-custom">
            <div className="flex justify-center text-2xl">
                <button onClick={()=> updateQuantity(quantity+1)} className=" text-main"><FaCirclePlus /></button>
                <p className="px-6">{quantity}</p>
                <button onClick={()=> updateQuantity(quantity-1)} className="text-gray-400 "><FaCircleMinus /></button>
            </div>
            <h6 className="text-lg">Total : {quantity * product.price} $</h6>
        </div>
    );
}