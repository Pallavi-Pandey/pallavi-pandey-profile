"use client";

import React from 'react';
import { motion } from 'framer-motion';
import {
    Code2,
    Database,
    Globe,
    Cpu,
    Terminal,
    Container
} from 'lucide-react';

const Skills = () => {
    const categories = [
        {
            title: "AI & Data Science",
            icon: Cpu,
            skills: ["LLMs", "RAG", "Agentic Workflows", "Langchain", "Hugging Face", "PyTorch", "TensorFlow", "Scikit-Learn", "NLTK", "Pandas", "NumPy"]
        },
        {
            title: "Backend & Systems",
            icon: Code2,
            skills: ["FastAPI", "Flask", "Django", "Node.js", "GraphQL", "WebSockets", "Microservices"]
        },
        {
            title: "Languages & Core",
            icon: Terminal,
            skills: ["Python", "JavaScript", "TypeScript", "SQL", "Java", "C", "HTML5", "CSS"]
        },
        {
            title: "Databases & Search",
            icon: Database,
            skills: ["PostgreSQL", "MongoDB", "Chroma DB", "Pinecone", "ElasticSearch", "Redis"]
        },
        {
            title: "Cloud & Devops",
            icon: Container,
            skills: ["Docker", "Kubernetes", "Azure", "GCP", "CI/CD", "Git", "Kafka"]
        },
        {
            title: "Automation & Tools",
            icon: Globe,
            skills: ["n8n", "RPA", "Web Scraping", "Postman", "Bash", "Linux"]
        }
    ];

    return (
        <section id="skills" className="py-24 px-6 bg-white/[0.02]">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Technical <span className="text-brand-secondary">Arsenal</span></h2>
                    <p className="text-text-muted max-w-2xl mx-auto">A comprehensive collection of tools and technologies I use to build intelligent, scalable solutions.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categories.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="glass p-8 rounded-3xl border border-white/5 hover:border-brand-secondary/20 transition-all hover:bg-white/[0.04] group"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 rounded-2xl bg-brand-secondary/10 text-brand-secondary group-hover:scale-110 transition-transform">
                                    <category.icon size={24} />
                                </div>
                                <h3 className="text-xl font-bold">{category.title}</h3>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-3 py-1.5 rounded-xl bg-white/5 text-xs font-medium text-text-muted hover:text-white hover:bg-white/10 border border-white/5 transition-colors"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
