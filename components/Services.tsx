"use client";

import { motion } from "framer-motion";
import { Code2, Cpu, Rocket } from "lucide-react";

const services = [
    {
        title: "SaaS & Product Development",
        description: "I build full-stack SaaS products from scratch — dashboards, APIs, authentication, payments and deployment.",
        icon: <Code2 className="w-8 h-8 text-indigo-500" />,
        footer: "Starting from ₹15k"
    },
    {
        title: "AI Tools & Workflow Automation",
        description: "I integrate OpenAI and build automation systems that save time, reduce manual work and increase productivity.",
        icon: <Cpu className="w-8 h-8 text-emerald-500" />,
        footer: "Starting from ₹12k"
    },
    {
        title: "Startup Websites & MVP Launch",
        description: "Modern, high-converting websites to launch your idea fast and validate your product in the real world.",
        icon: <Rocket className="w-8 h-8 text-sky-500" />,
        footer: "Starting from ₹6k"
    },
];

const Services = () => {
    return (
        <section id="services" className="py-20 md:py-32 bg-slate-950/50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12 md:mb-20">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 px-4">How I Can Help You Build & Launch</h2>
                    <p className="text-slate-400 max-w-2xl mx-auto text-base sm:text-lg md:text-xl px-4">From idea to production — I build fast, scalable and revenue-ready products.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{
                                translateY: -10,
                                boxShadow: "0 20px 40px -20px rgba(0,0,0,0.5)"
                            }}
                            className="p-8 md:p-10 glass rounded-[2rem] md:rounded-[2.5rem] relative overflow-hidden group border-white/5 hover:border-white/20 transition-all duration-500 flex flex-col h-full"
                        >
                            <div className="mb-6 md:mb-8 p-3 md:p-4 bg-white/5 w-fit rounded-xl md:rounded-2xl group-hover:scale-110 transition-transform duration-500">
                                {service.icon}
                            </div>
                            <h3 className="text-xl md:text-2xl font-bold mb-4">{service.title}</h3>
                            <p className="text-sm md:text-base text-slate-400 leading-relaxed mb-8 flex-grow">{service.description}</p>

                            <div className="mt-auto">
                                <div className="text-indigo-400 font-bold text-xs md:text-sm tracking-wide bg-indigo-500/10 w-fit px-4 py-1.5 rounded-full border border-indigo-500/20">
                                    {service.footer}
                                </div>
                            </div>

                            {/* Decorative glow */}
                            <div className="absolute -right-10 -bottom-10 w-32 h-32 md:w-40 md:h-40 bg-indigo-500/5 rounded-full blur-3xl group-hover:bg-indigo-500/10 transition-colors pointer-events-none" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
