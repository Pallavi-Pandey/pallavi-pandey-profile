"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Box, Sparkles, MapPin, Brain, Video, FileText } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: "AI Video Dubbing Pipeline",
            description: "Real-time voice translation and lip-syncing API. Combines OpenAI Whisper (ASR), MarianMT (Translation), and Wav2Lip GAN for high-fidelity video dubbing. Containerized with Docker & Kubernetes.",
            tech: ["Wav2Lip GAN", "OpenAI Whisper", "MarianMT", "Docker", "Kubernetes"],
            icon: Video,
            sourceLink: "https://github.com/Pallavi-Pandey/dataviv"
        },
        {
            title: "Technical Knowledge Base",
            description: "A high-performance static blog for technical documentation. Features blazing fast SSG, a premium glassmorphic UI, and an integrated markdown note creator. Built with Next.js and TypeScript.",
            tech: ["Next.js", "TypeScript", "MDX", "Tailwind CSS", "CI/CD"],
            icon: FileText,
            sourceLink: "https://github.com/Pallavi-Pandey/My_temp_blog",
            demoLink: "https://my-temp-blog.vercel.app/"
        },
        {
            title: "Multimodal Clinical AI",
            description: "A multimodal AI pipeline merging Speech Recognition and NLP for clinical documentation. Features real-time transcription, AI-powered documentation generation, and a modular architecture.",
            tech: ["Python", "LLMs", "Speech-to-Text", "Jupyter", "NLP"],
            icon: Brain,
            sourceLink: "https://github.com/Pallavi-Pandey/DSAI_Lab_Project"
        },
        {
            title: "IITM BS Portal + Gen-AI",
            description: "Integrated Google Gemini API to enable Gen-AI features like lecture summarization and personalized question generation. Built with Flask, SQLite, and vanilla JS.",
            tech: ["Flask", "Google Gemini API", "SQLite", "Python", "JavaScript", "Summarization", "Question Generation"],
            icon: Sparkles,
            sourceLink: "https://github.com/Pallavi-Pandey/IITM_BS_Portal_with_Gen_AI"
        },
        {
            title: "Unique Mart",
            description: "A dynamic grocery store app built with Flask. Features role-based access for users/admins, product categorization, and cart management. Visualizes sales data with Matplotlib.",
            tech: ["Flask", "SQLite", "Jinja2", "Bootstrap", "Matplotlib"],
            icon: Box,
            sourceLink: "https://github.com/Pallavi-Pandey/Unique_Mart"
        },
        {
            title: "Taxi Fare Guru",
            description: "A machine learning solution for the Kaggle Taxi Fare Guru Challenge. Predicts total taxi fare amounts using advanced feature engineering and a suite of regressors including XGBoost and Random Forest.",
            tech: ["Python", "XGBoost", "Random Forest", "Scikit-Learn", "Pandas"],
            icon: MapPin,
            sourceLink: "https://github.com/Pallavi-Pandey/taxi-fare-guru-mlp",
            demoLink: "https://www.kaggle.com/competitions/taxi-fare-guru-total-amount-prediction-challenge"
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
                                    {project.sourceLink && (
                                        <a href={project.sourceLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs font-bold hover:text-brand-accent transition-colors">
                                            <Github size={14} /> Source
                                        </a>
                                    )}
                                    {project.demoLink && (
                                        <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs font-bold hover:text-brand-accent transition-colors">
                                            <ExternalLink size={14} /> Demo
                                        </a>
                                    )}
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
