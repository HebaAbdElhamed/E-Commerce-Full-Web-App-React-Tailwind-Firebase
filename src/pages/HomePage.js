import HomeImageGrid from "../Components/HomeImageGrid";
import OffersHome from "../Components/OffersHome";
import { NavLink  } from "react-router-dom";
import ScrollReveal from "../Animations/ScrollReveal";
export default function HomePage() {
    return (
        <div >
        <ScrollReveal>
        <img  src="/images/main.png" alt="" className="w-full" />
        </ScrollReveal>
        <ScrollReveal ><NavLink to="shop" ><HomeImageGrid/></NavLink></ScrollReveal>
        <ScrollReveal><OffersHome /></ScrollReveal>
        </div>
    );
}