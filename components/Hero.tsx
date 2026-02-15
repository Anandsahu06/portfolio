"use client";

import { motion } from "framer-motion";
import TypewriterText from "./TypewriterText";
import GlowingButton from "./GlowingButton";

const Hero = () => {
    return (
        <section className="relative h-screen flex flex-col items-center justify-center pt-20 overflow-hidden">
            <div className="container mx-auto px-6 relative z-10 text-center pointer-events-none">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <div className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black mb-6 sm:mb-8 tracking-tight leading-[1.1] min-h-[5em] sm:min-h-[4em] md:min-h-[3em] flex flex-col justify-center">
                        <h1 className="mb-2 sm:mb-4">I build <span className="text-indigo-500">SaaS tools</span>,</h1>
                        <div className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl">
                            <TypewriterText
                                texts={[
                                    "that automate work & generate revenue.",
                                    "that turn ideas into real products.",
                                    "for startups, creators & modern businesses."
                                ]}
                                typingSpeed={80}
                                deletingSpeed={40}
                                pauseTime={1500}
                            />
                        </div>
                    </div>
                    <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-slate-400 mb-8 sm:mb-10 leading-relaxed px-4">
                        I design and build modern SaaS, AI tools and automation systems for startups and creators.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center pointer-events-auto mt-8 sm:mt-12 px-6 sm:px-0">
                        <GlowingButton
                            text="View Projects"
                            className="w-full sm:w-auto px-8 py-4 text-lg shadow-[0_0_20px_rgba(139,92,246,0.4)]"
                            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                        />
                        <GlowingButton
                            text="Contact Me"
                            variant="secondary"
                            className="w-full sm:w-auto px-8 py-4 text-lg"
                            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                        />
                    </div>
                </motion.div>
            </div>

            {/* Down Arrow - Hidden on small mobile to avoid overlap */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 text-slate-500 cursor-pointer pointer-events-auto z-20 hidden xs:block"
                onClick={() => document.getElementById('tech')?.scrollIntoView({ behavior: 'smooth' })}
            >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
                </svg>
            </motion.div>
        </section>
    );
};

export default Hero;
