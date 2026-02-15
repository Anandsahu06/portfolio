"use client";

import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, MessageSquare, Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

const Contact = () => {
    const formRef = useRef<HTMLFormElement>(null);
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formRef.current) return;

        setLoading(true);
        setStatus("idle");

        try {
            const formData = new FormData(formRef.current);
            const response = await fetch("https://formsubmit.co/ajax/anandff736@gmail.com", {
                method: "POST",
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setStatus("success");
                formRef.current.reset();
            } else {
                throw new Error("Failed to send");
            }
        } catch (error) {
            console.error("FormSubmit Error:", error);
            setStatus("error");
        } finally {
            setLoading(false);
            // Reset status after 5 seconds
            setTimeout(() => setStatus("idle"), 5000);
        }
    };

    return (
        <section id="contact" className="py-20 md:py-32 relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] md:w-[60%] md:h-[60%] bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-5xl mx-auto glass rounded-[2rem] md:rounded-[3rem] p-6 sm:p-10 md:p-16 border-white/5 shadow-2xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16">
                        <div>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-black mb-6 md:mb-8 leading-tight">
                                Have an idea? Let’s <br />
                                <span className="text-indigo-500">turn it into a real product.</span>
                            </h2>
                            <p className="text-slate-400 text-base sm:text-lg mb-8 md:mb-12 leading-relaxed">
                                Tell me about your idea and I’ll help you design, build and launch it fast.
                                <br className="hidden sm:block" />
                                <span className="text-slate-200 font-medium mt-2 block">Available for freelance projects and collaborations.</span>
                            </p>

                            <div className="space-y-4 md:space-y-6">
                                <a
                                    href="https://mail.google.com/mail/?view=cm&fs=1&to=anandff736@gmail.com"
                                    target="_blank"
                                    className="flex items-center gap-4 group cursor-pointer p-4 bg-white/[0.02] rounded-2xl hover:bg-white/[0.05] transition-colors"
                                >
                                    <div className="w-10 h-10 md:w-12 md:h-12 bg-white/5 rounded-xl flex items-center justify-center group-hover:bg-indigo-500 transition-colors shrink-0">
                                        <Mail size={18} className="md:w-[20px]" />
                                    </div>
                                    <div className="overflow-hidden">
                                        <p className="text-[10px] md:text-sm text-slate-500 font-bold uppercase tracking-widest">Email me</p>
                                        <p className="text-white font-medium text-sm md:text-base truncate">anandff736@gmail.com</p>
                                    </div>
                                </a>

                                <a
                                    href="https://www.linkedin.com/in/anandkandsahu/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-4 group cursor-pointer p-4 bg-white/[0.02] rounded-2xl hover:bg-white/[0.05] transition-colors"
                                >
                                    <div className="w-10 h-10 md:w-12 md:h-12 bg-white/5 rounded-xl flex items-center justify-center group-hover:bg-emerald-500 transition-colors shrink-0">
                                        <MessageSquare size={18} className="md:w-[20px]" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] md:text-sm text-slate-500 font-bold uppercase tracking-widest">Chat with me</p>
                                        <p className="text-white font-medium text-sm md:text-base">LinkedIn</p>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div className="relative mt-8 lg:mt-0">
                            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4 md:space-y-6 text-left">
                                {/* FormSubmit Configuration */}
                                <input type="hidden" name="_subject" value="New Project Inquiry 🚀" />
                                <input type="hidden" name="_captcha" value="false" />
                                <input type="hidden" name="_template" value="table" />

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 text-left">
                                    <div className="space-y-2">
                                        <label className="text-xs md:text-sm font-bold text-slate-400 ml-1">Name</label>
                                        <input
                                            required
                                            name="name"
                                            type="text"
                                            placeholder="John Doe"
                                            className="w-full bg-white/5 border border-white/10 rounded-xl md:rounded-2xl px-4 py-3 md:px-6 md:py-4 focus:outline-none focus:border-indigo-500 transition-colors text-sm md:text-base"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs md:text-sm font-bold text-slate-400 ml-1">Email</label>
                                        <input
                                            required
                                            name="email"
                                            type="email"
                                            placeholder="john@example.com"
                                            className="w-full bg-white/5 border border-white/10 rounded-xl md:rounded-2xl px-4 py-3 md:px-6 md:py-4 focus:outline-none focus:border-indigo-500 transition-colors text-sm md:text-base"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs md:text-sm font-bold text-slate-400 ml-1">Message</label>
                                    <textarea
                                        required
                                        name="message"
                                        rows={4}
                                        placeholder="Tell me about your project details..."
                                        className="w-full bg-white/5 border border-white/10 rounded-xl md:rounded-2xl px-4 py-3 md:px-6 md:py-4 focus:outline-none focus:border-indigo-500 transition-colors resize-none text-sm md:text-base"
                                    />
                                </div>

                                <button
                                    disabled={loading}
                                    type="submit"
                                    className="w-full py-4 md:py-5 rounded-xl md:rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-base md:text-lg flex items-center justify-center gap-2 md:gap-3 transition-all shadow-[0_0_30px_rgba(79,70,229,0.3)] disabled:opacity-50 disabled:cursor-not-allowed group pointer-events-auto"
                                >
                                    {loading ? (
                                        <>Sending... <Loader2 className="animate-spin" size={18} /></>
                                    ) : (
                                        <>Send Project Details <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform md:w-[20px]" /></>
                                    )}
                                </button>
                            </form>

                            {/* Status Messages */}
                            <AnimatePresence>
                                {status === "success" && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0 }}
                                        className="absolute -bottom-16 md:-bottom-20 left-0 right-0 p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-xl flex items-center gap-3 text-emerald-400 z-50"
                                    >
                                        <CheckCircle2 size={18} className="shrink-0" />
                                        <span className="text-xs md:text-sm">Thanks! Your project details have been sent. I’ll reply soon.</span>
                                    </motion.div>
                                )}
                                {status === "error" && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0 }}
                                        className="absolute -bottom-16 md:-bottom-20 left-0 right-0 p-4 bg-red-500/10 border border-red-500/20 rounded-xl flex items-center gap-3 text-red-400 z-50"
                                    >
                                        <AlertCircle size={18} className="shrink-0" />
                                        <span className="text-xs md:text-sm">Something went wrong. Please try again.</span>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
