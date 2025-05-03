import MiniCard from "../Components/MiniCard";
import SubCard from "../Components/SubCard";
export default function CartCard({ product, quantity, updateQuantity }) {
    return (
            <div className="grid grid-cols-[2fr,1fr]">
                <MiniCard product={product} />
                <SubCard product={product} quantity={quantity} updateQuantity={updateQuantity}/>
            </div>
    );
}