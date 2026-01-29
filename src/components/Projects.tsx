"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Box, Sparkles, MapPin, Brain } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: "Multimodal Clinical AI",
            description: "A multimodal AI pipeline merging Speech Recognition and NLP for clinical documentation. Features real-time transcription, AI-powered documentation generation, and a modular architecture.",
            tech: ["Python", "LLMs", "Speech-to-Text", "Jupyter", "NLP"],
            icon: Brain,
            link: "https://github.com/Pallavi-Pandey/DSAI_Lab_Project"
        },
        {
            title: "E-Commerce Web Application",
            description: "Built a dynamic web application using Flask, with Jinja templating, Bootstrap, and HTML. Developed RESTful APIs with Flask-RESTful and integrated Flask-SQLAlchemy for seamless SQLite database management.",
            tech: ["Flask", "RESTful API", "SQLAlchemy", "Bootstrap", "Matplotlib"],
            icon: Box,
            link: "#"
        },
        {
            title: "IITM BS Portal + Gen-AI",
            description: "Collaborated to develop and integrate Gen-AI features like lecture summarization, course insights, and personalized question generation for exam preparation.",
            tech: ["Gen-AI", "LLMs", "Python", "Summarization"],
            icon: Sparkles,
            link: "#"
        },
        {
            title: "Taxi Fare Guru",
            description: "Machine learning model to predict NYC taxi fares using a dataset of over 55 million records. Optimized accuracy through intensive feature engineering and XGBoost.",
            tech: ["Python", "Pandas", "Scikit-Learn", "XGBoost", "Big Data"],
            icon: MapPin,
            link: "#"
        }
    ];

    return (
        <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-12"
            >
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">Featured <span className="text-brand-accent">Projects</span></h2>
                        <div className="w-20 h-1 bg-brand-accent rounded-full" />
                    </div>
                    <p className="text-text-muted max-w-md">Bridging the gap between robust backend engineering and data-driven intelligence.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="group glass rounded-3xl overflow-hidden border border-white/5 hover:border-brand-accent/30 transition-all flex flex-col"
                        >
                            <div className="h-48 bg-gradient-to-br from-brand-accent/20 to-transparent p-8 flex items-center justify-center relative overflow-hidden">
                                <div className="absolute inset-0 opacity-10 grid-bg" />
                                <motion.div
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    className="p-5 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 text-brand-accent relative z-10"
                                >
                                    <project.icon size={40} />
                                </motion.div>
                            </div>

                            <div className="p-6 flex flex-grow flex-col">
                                <h3 className="text-xl font-bold mb-3 group-hover:text-brand-accent transition-colors">{project.title}</h3>
                                <p className="text-text-muted text-sm leading-relaxed mb-6 flex-grow">{project.description}</p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tech.map((t) => (
                                        <span key={t} className="text-[10px] uppercase font-mono bg-brand-accent/5 text-brand-accent/80 px-2 py-0.5 rounded border border-brand-accent/10">
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                                    <a href={project.link} className="flex items-center gap-2 text-xs font-bold hover:text-brand-accent transition-colors">
                                        <Github size={14} /> Source
                                    </a>
                                    <a href={project.link} className="flex items-center gap-2 text-xs font-bold hover:text-brand-accent transition-colors">
                                        <ExternalLink size={14} /> Demo
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Projects;
