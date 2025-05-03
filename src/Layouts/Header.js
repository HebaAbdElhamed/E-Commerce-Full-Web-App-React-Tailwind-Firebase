import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { IoMdCart } from "react-icons/io";
import { CartContext } from "./CartContext";

export default function Header() {
    const { cart } = useContext(CartContext);
    const totalQuantity = Object.values(cart).reduce((sum, q) => sum + q, 0);
    return (
        <nav className="flex flex-col">
            <div className="flex items-center justify-between mx-5 mt-12 ">
                <NavLink to='/'><img src="/images/hanger.png" alt="hanger" className="w-12 hover:animate-spin " /></NavLink>
                <ul className="relative flex items-center space-x-8 text-xl font-inria right-[40%]">
                    <li className="hover:scale-110"><NavLink to='/' className={({ isActive }) => (isActive ? "text-main text-shadow-md font-extrabold" : "")}>Home</NavLink></li>
                    <li className="hover:scale-110"><NavLink to='shop' className={({ isActive }) => (isActive ? "text-main font-extrabold" : "")}>Shop</NavLink></li>
                    <li className="hover:scale-110"><a href='/#offers' className="scroll-smooth">Offers</a></li>
                    <li className="hover:scale-110"><a href='/#contact' className="scroll-smooth">Contact</a></li>
                </ul>
                <NavLink to='cart' className={({ isActive }) => ` fixed right-4 bg-white rounded-full p-3 z-10 hover:scale-110 ${isActive ? "text-main font-extrabold " : ""}` }>
                    <IoMdCart className="relative text-2xl" />
                    {totalQuantity > 0 && (
                        <span className="absolute flex items-center justify-center w-5 h-5 text-xs text-white bg-red-500 rounded-full bottom-9 right-7 ">
                            {totalQuantity}
                        </span>
                    )}
                </NavLink>
            </div>
            <h1 className="my-12 text-center font-greatvibes text-9xl text-shadow-custom animate-vibrate">Clothing</h1>
        </nav>
    );
}