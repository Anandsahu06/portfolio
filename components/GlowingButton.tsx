"use client";

import React from "react";
import { motion } from "framer-motion";

interface GlowingButtonProps {
    text: string;
    onClick?: () => void;
    className?: string;
    variant?: "primary" | "secondary";
}

const GlowingButton: React.FC<GlowingButtonProps> = ({ text, onClick, className = "", variant = "primary" }) => {
    const isPrimary = variant === "primary";

    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onClick}
            className={`
        relative rounded-full font-bold transition-all duration-300 ease-in-out cursor-pointer flex items-center justify-center
        ${isPrimary
                    ? "bg-gradient-to-r from-indigo-500 via-purple-500 to-violet-500 text-white shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:shadow-[0_0_35px_rgba(139,92,246,0.6)]"
                    : "bg-white/5 border border-white/10 text-white backdrop-blur-md hover:bg-white/10 shadow-lg"
                }
        ${className}
      `}
        >
            <span className="relative z-10">{text}</span>
            {isPrimary && (
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-violet-500 blur-md opacity-20 group-hover:opacity-40 transition-opacity -z-10" />
            )}
        </motion.button>
    );
};

export default GlowingButton;
