"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
    {
        title: "AI Precision Agriculture Analytics",
        description: "AI-powered agriculture analysis platform that processes satellite imagery to monitor crop health, vegetation index and detect potential risks for farmers. Built for real-world precision agriculture use cases.",
        image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=800",
        tags: ["Python", "TensorFlow", "Google Earth Engine", "FastAPI"],
        link: "https://v0-agri-vision.vercel.app/",
        github: "https://github.com/Anandsahu06/precision-agriculture-ai-final",
    },
    {
        title: "Solo Grind Fitness Tracker",
        description: "Personal fitness and productivity tracking web app built to monitor workouts, habits and progress during a solo self-improvement journey.",
        image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=800",
        tags: ["Next.js", "Firebase", "Dashboard", "Analytics"],
        link: "https://sologrindfitness.vercel.app/",
        github: "https://github.com/Anandsahu06/Solo-Grind-Fitness",
    },
];

const Projects = () => {
    return (
        <section id="projects" className="py-20 md:py-24">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-6">
                    <div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Selected Work</h2>
                        <p className="text-slate-400 max-w-md text-base sm:text-lg">Exploring the intersection of design and engineering through these featured projects.</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10 }}
                            className="group relative bg-slate-900/40 rounded-2xl md:rounded-[2rem] overflow-hidden border border-white/5 hover:border-indigo-500/30 transition-all flex flex-col"
                        >
                            <div className="aspect-video overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                            </div>

                            <div className="p-6 md:p-8 flex flex-col flex-grow">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="text-[9px] md:text-[10px] uppercase tracking-widest font-bold px-2 py-1 bg-white/5 rounded text-slate-400 group-hover:text-indigo-400 transition-colors">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <h3 className="text-xl md:text-2xl font-bold mb-3 group-hover:text-indigo-400 transition-colors">{project.title}</h3>
                                <p className="text-slate-400 text-sm md:text-base mb-6 line-clamp-2">{project.description}</p>

                                <div className="mt-auto flex flex-col sm:flex-row gap-3 md:gap-4 lg:items-center">
                                    <a
                                        href={project.link || "#"}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center gap-2 text-xs md:text-sm font-bold bg-white text-slate-950 px-4 py-2.5 rounded-lg hover:bg-indigo-500 hover:text-white transition-all pointer-events-auto w-full sm:w-auto"
                                    >
                                        Live Demo <ExternalLink size={14} />
                                    </a>
                                    <a
                                        href={project.github || "#"}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center gap-2 text-xs md:text-sm font-bold bg-white/5 text-white px-4 py-2.5 rounded-lg hover:bg-white/10 transition-all border border-white/10 pointer-events-auto w-full sm:w-auto"
                                    >
                                        Source Code <Github size={14} />
                                    </a>
                                </div>
                            </div>

                            {/* Glow overlay */}
                            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
