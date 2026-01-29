"use client";

import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
    const experiences = [
        {
            company: "Articence Inc, CA",
            role: "Junior Software Engineer",
            period: "Jan 2025 - Jan 2026",
            description: [
                "Migrated backend architecture from Flask to FastAPI, improving performance and maintainability.",
                "Integrated advanced AI functionalities (LLMs, RAG, TTS, STT) for intelligent automation.",
                "Implemented real-time communication using WebSockets and Webhooks."
            ],
            tech: ["FastAPI", "LLMs", "RAG", "WebSockets", "Python"]
        },
        {
            company: "Magizh Technologies, Coimbatore",
            role: "Junior Python Developer",
            period: "Jan 2024 - Dec 2024",
            description: [
                "Developed backend for a scalable educational platform.",
                "Integrated an AI-driven chatbot for personalized learning recommendations.",
                "Implemented MicroServices for OAuth and notification services (Slack, SMS, LinkedIn)."
            ],
            tech: ["Python", "Flask", "Microservices", "OAuth", "Chatbots"]
        },
        {
            company: "IIT Madras, Chennai",
            role: "Internship",
            period: "Jan 2023 - Sept 2023",
            description: [
                "Gained hands-on experience in software development and data science projects during an 8-month internship."
            ],
            tech: ["Software Development", "Data Science"]
        }
    ];

    return (
        <section id="experience" className="py-24 px-6 max-w-5xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-12"
            >
                <div className="text-center md:text-left">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Professional <span className="text-brand-primary">Experience</span></h2>
                    <div className="w-20 h-1 bg-brand-primary rounded-full md:mx-0 mx-auto" />
                </div>

                <div className="relative border-l-2 border-white/10 ml-4 md:ml-0 space-y-12 pb-8">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.6 }}
                            className="relative pl-8"
                        >
                            <div className="absolute top-0 left-[-9px] w-4 h-4 rounded-full bg-brand-primary shadow-[0_0_10px_#00f2ff]" />

                            <div className="glass p-6 rounded-2xl border border-white/5 hover:border-brand-primary/20 transition-all group">
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                                    <div>
                                        <h3 className="text-xl font-bold group-hover:text-brand-primary transition-colors">{exp.role}</h3>
                                        <p className="text-brand-secondary text-sm font-medium">{exp.company}</p>
                                    </div>
                                    <span className="text-text-muted text-xs font-mono bg-white/5 px-3 py-1 rounded-full border border-white/5">{exp.period}</span>
                                </div>

                                <ul className="space-y-3 mb-6">
                                    {exp.description.map((item, idx) => (
                                        <li key={idx} className="text-text-muted text-sm leading-relaxed flex gap-2">
                                            <span className="text-brand-primary mt-1.5">•</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>

                                <div className="flex flex-wrap gap-2">
                                    {exp.tech.map((t) => (
                                        <span key={t} className="text-[10px] uppercase tracking-wider font-bold bg-white/5 px-2 py-1 rounded border border-white/5 text-text-muted">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Experience;
