// src/components/ui/motion/Reveal.jsx
import React from "react";
import { motion, useReducedMotion } from "framer-motion";

export function Reveal({
    children,
    className,
    as: Comp = "div",
    y = 10,
    duration = 0.5,
    delay = 0,
    once = true,
    amount = 0.25,
}) {
    const reduce = useReducedMotion();

    const MotionComp = motion[Comp] || motion.div;

    return (
        <MotionComp
            className={className}
            initial={reduce ? false : { opacity: 0, y }}
            whileInView={reduce ? {} : { opacity: 1, y: 0 }}
            viewport={{ once, amount }}
            transition={{
                duration: reduce ? 0 : duration,
                delay: reduce ? 0 : delay,
                ease: [0.22, 1, 0.36, 1],
            }}
            style={{ willChange: reduce ? "auto" : "transform, opacity" }}
        >
            {children}
        </MotionComp>
    );
}
