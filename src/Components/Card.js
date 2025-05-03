import { FaCirclePlus , FaCircleMinus } from "react-icons/fa6";
export default function Card({ product, quantity, updateQuantity }) {
    return (
        <div className="grid grid-cols-[1.5fr,1.25fr,1fr,1fr] m-10 shadow-custom gap-8 hover:scale-105  hover:text-main ">
            <img src={`/images/${product.image}`} alt="" className="object-cover " />
            <div className="flex flex-col justify-center space-y-4">
                <h2 className="text-2xl">{product.title}</h2>
                <p className="text-lg">{product.description}</p>
                <h6 className="text-lg">{product.price} $</h6>
            </div>
            <div></div>
            {quantity === 0 ? (
                <div className="flex items-end justify-end m-8">
                    <button onClick={()=> updateQuantity(1)} className="py-3 text-white bg-main px-14 hover:bg-white hover:border-main hover:border-2 hover:text-main">Add to cart</button>
                </div>
            ) : (
                <div className="flex items-end justify-end m-8 text-3xl">
                    <div className="flex justify-center ">
                        <button onClick={()=> updateQuantity(quantity+1)} className=" text-main"><FaCirclePlus /></button>
                        <p className="px-6">{quantity}</p>
                        <button onClick={()=> updateQuantity(quantity-1)} className="text-gray-400 "><FaCircleMinus /></button>
                    </div>
                </div>
            )}
        </div>
    );
}