"use client";

import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
    const experiences = [
        {
            company: "Dom Ventas, Bengaluru",
            role: "Full Stack Engineer",
            period: "Jan 2026 - Current",
            description: [
                "Managing and automating core application workflows supporting operations, retail, marketing, and sales.",
                "Architecting an accreditation application with a RAG-based AI chatbot for intelligent document retrieval and user assistance.",
                "Maintaining a custom dashboard for unified business insights via ETL processes across multiple databases."
            ],
            tech: ["React", "FastAPI", "RAG", "ETL", "PostgreSQL", "Next.js"]
        },
        {
            company: "Articence Inc, CA",
            role: "Software Developer Engineer",
            period: "Jan 2025 - Dec 2025",
            description: [
                "Integrated advanced Gen-AI capabilities (LLMs, RAG, TTS, STT) to build intelligent automation and real-time conversational systems across voice and chat channels.",
                "Architected and migrated backend systems to FastAPI to support low-latency, high-throughput AI inference pipelines at scale.",
                "Implemented real-time communication using WebSockets and Webhooks to enable live streaming interactions and event-driven workflows.",
                "Contributed to scalable contact-center and automation infrastructure, improving system reliability, performance, and user experience."
            ],
            tech: ["LLMs", "RAG", "TTS", "STT", "FastAPI", "Python", "Gen-AI", "WebSockets", "Webhooks"]
        },
        {
            company: "Magizh Technologies, Coimbatore",
            role: "Python & AI Developer",
            period: "Jan 2024 - Dec 2024",
            description: [
                "Designed and built an AI-powered chatbot that delivers personalized educational recommendations based on student profiles and learning goals.",
                "Integrated AI to automatically generate and format quiz questions from book excerpts, content, or paragraphs, simplifying question creation and upload.",
                "Developed a quiz application enabling students to add their own questions and revise them later through interactive quiz and fill-in-the-blanks formats for rapid practice.",
                "Engineered scalable backend services using Flask and PostgreSQL to efficiently process and manage student data."
            ],
            tech: ["Python", "LLMs", "NLP", "Chatbots", "Flask", "PostgreSQL", "Microservices"]
        },
        {
            company: "VaayuSastra, Chennai",
            role: "Junior Developer Intern",
            period: "Aug 2023 - Oct 2023",
            description: [
                "Built a learning platform where kids can learn, access, and take tests related to aerospace content.",
                "Designed interactive assessment modules to track and evaluate student progress effectively.",
                "Integrated educational resources with a focus on aerospace engineering concepts for high engagement."
            ],
            tech: ["Flutter", "Dart", "Firebase", "State Management"]
        },
        {
            company: "IIT Madras, Chennai",
            role: "Tech Intern",
            period: "Jan 2023 - Sept 2023",
            description: [
                "Developed the official website for 'Paradox', the flagship technical and cultural fest of the IITM BS degree.",
                "Designed and launched the project showcase website for academic and research initiatives.",
                "Managed and coordinated Student Affairs, bridging the gap between student requirements and administration."
            ],
            tech: ["Web Development", "Portal Management", "Student Affairs"]
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
