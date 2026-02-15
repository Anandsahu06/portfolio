"use client";

import Hero from "@/components/Hero";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Background3D from "@/components/Background3D";
import { motion } from "framer-motion";

export default function Home() {
    return (
        <main className="relative bg-slate-950 overflow-hidden">
            <Background3D />

            <div className="relative z-10">
                <Hero />
                <TechStack />
                <Projects />
                <Services />
                <Contact />
            </div>

            <footer className="py-10 text-center text-slate-500 border-t border-white/5">
                <p>© {new Date().getFullYear()} Premium Portfolio. Built with passion.</p>
            </footer>
        </main>
    );
}
