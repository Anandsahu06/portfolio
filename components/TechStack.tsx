"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    SiNextdotjs, SiReact, SiTailwindcss,
    SiFastapi, SiFirebase, SiPostgresql, SiMongodb,
    SiOpenai, SiPython, SiTensorflow, SiGoogleearth,
    SiVercel, SiDocker, SiRender
} from "react-icons/si";

interface TechItem {
    name: string;
    icon: React.ReactNode;
    color: string;
}

interface Category {
    title: string;
    items: TechItem[];
}

const categories: Category[] = [
    {
        title: "Frontend",
        items: [
            { name: "Next.js", icon: <SiNextdotjs />, color: "text-white" },
            { name: "React", icon: <SiReact />, color: "text-[#61DAFB]" },
            { name: "TailwindCSS", icon: <SiTailwindcss />, color: "text-[#06B6D4]" },
        ],
    },
    {
        title: "Backend & Database",
        items: [
            { name: "FastAPI", icon: <SiFastapi />, color: "text-[#05998B]" },
            { name: "Firebase", icon: <SiFirebase />, color: "text-[#FFCA28]" },
            { name: "PostgreSQL", icon: <SiPostgresql />, color: "text-[#4169E1]" },
            { name: "MongoDB", icon: <SiMongodb />, color: "text-[#47A248]" },
        ],
    },
    {
        title: "AI & Data",
        items: [
            { name: "OpenAI API", icon: <SiOpenai />, color: "text-[#412991]" },
            { name: "Python", icon: <SiPython />, color: "text-[#3776AB]" },
            { name: "TensorFlow", icon: <SiTensorflow />, color: "text-[#FF6F00]" },
            { name: "Google Earth Engine", icon: <SiGoogleearth />, color: "text-[#4285F4]" },
        ],
    },
    {
        title: "DevOps & Deployment",
        items: [
            { name: "Vercel", icon: <SiVercel />, color: "text-white" },
            { name: "Docker", icon: <SiDocker />, color: "text-[#2496ED]" },
            { name: "Render", icon: <SiRender />, color: "text-white" },
        ],
    },
];

const TechCard = ({ name, icon, color, index }: TechItem & { index: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut"
            }}
            viewport={{ once: true }}
            whileHover={{
                y: -5,
                scale: 1.05,
                boxShadow: "0 0 25px rgba(79, 70, 229, 0.2)"
            }}
            className="group relative flex items-center gap-3 sm:gap-4 p-3 sm:p-4 glass rounded-xl sm:rounded-2xl border border-white/5 hover:border-indigo-500/30 transition-all duration-300 backdrop-blur-xl bg-white/[0.03]"
        >
            <div className={`text-xl sm:text-2xl ${color} group-hover:scale-110 transition-transform duration-300 shrink-0`}>
                {icon}
            </div>
            <span className="text-xs sm:text-sm font-semibold text-slate-200 group-hover:text-white transition-colors truncate">
                {name}
            </span>

            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 rounded-xl sm:rounded-2xl transition-opacity -z-10" />
        </motion.div>
    );
};

const TechStack = () => {
    return (
        <section id="tech" className="py-20 md:py-32 relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-indigo-500/[0.02] blur-[150px] pointer-events-none rounded-full" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center mb-12 md:mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl sm:text-4xl md:text-5xl font-black mb-6 tracking-tight leading-tight px-4"
                    >
                        Tech Stack I Use To Build <br className="hidden sm:block" />
                        <span className="text-indigo-500">SaaS & AI Products</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-slate-400 text-base sm:text-lg md:text-xl max-w-2xl mx-auto px-4"
                    >
                        The tools I use to design, build and deploy production-ready products.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:gap-16 gap-10 max-w-6xl mx-auto">
                    {categories.map((category, catIndex) => (
                        <div key={category.title} className="space-y-6">
                            <motion.h3
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: catIndex * 0.1 }}
                                className="text-lg sm:text-xl font-bold text-indigo-400/90 ml-1 flex items-center gap-2"
                            >
                                <div className="w-6 sm:w-8 h-[2px] bg-indigo-500/50 rounded-full" />
                                {category.title}
                            </motion.h3>

                            <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 sm:gap-4">
                                {category.items.map((item, itemIndex) => (
                                    <TechCard
                                        key={item.name}
                                        {...item}
                                        index={(catIndex * 2) + itemIndex}
                                    />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechStack;
