"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const LoadingAnimation = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Prevent scrolling during loading
        document.body.style.overflow = "hidden";

        const timer = setTimeout(() => {
            setLoading(false);
            document.body.style.overflow = "auto";
        }, 2000);
        return () => {
            clearTimeout(timer);
            document.body.style.overflow = "auto";
        };
    }, []);

    if (!loading) return null;

    return (
        <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 0.5, delay: 1.5 }}
            className="fixed inset-0 z-[100] bg-slate-950 flex flex-col items-center justify-center cursor-wait"
        >
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="relative"
            >
                <div className="w-24 h-24 border-4 border-white/10 rounded-full border-t-indigo-500 animate-spin" />
                <div className="absolute inset-0 flex items-center justify-center font-bold text-xs tracking-widest text-white">
                    LOADING
                </div>
            </motion.div>
            <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-8 text-slate-500 font-medium tracking-tight"
            >
                Preparing something amazing...
            </motion.p>
        </motion.div>
    );
};

export default LoadingAnimation;
