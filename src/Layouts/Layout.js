import Header from "./Header";
import Footer from "./Footer";
import { React , Outlet } from "react-router-dom";
import {motion} from "framer-motion";
import { pageVariants } from "../Animations/Animations";


export default function Layout(){
    return(
        <motion.div initial="hidden" animate="visible" variants={pageVariants} className="flex flex-col selection:bg-main selection:text-white scroll-smooth">
            <Header/>
            <Outlet/>
            <Footer/>
        </motion.div>
    );
}