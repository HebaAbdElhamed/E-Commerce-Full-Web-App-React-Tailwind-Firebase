import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function ScrollReveal({
    children,
    threshold = 0.1,
    rootMargin = "0px",
    variants,
    className = "",
}) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: false, margin: rootMargin, amount: threshold });

    const defaultVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={variants || defaultVariants}
            className={className}
        >
            {children}
        </motion.div>
    );
}