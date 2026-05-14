"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Box, Sparkles, MapPin, Brain, Video, FileText, Layers, TrendingUp } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: "AI Financial Modeling & Decision Intelligence",
            description: "End-to-end financial modeling system with XGBoost + RandomForest revenue forecasting, what-if scenario simulation, and AI-generated business insights via a 5-provider fallback chain. Features an interactive Streamlit dashboard with Plotly visualisations.",
            tech: ["Python", "XGBoost", "Random Forest", "Streamlit", "Plotly", "Gemini", "Claude", "Pandas"],
            icon: TrendingUp,
            sourceLink: "https://github.com/Pallavi-Pandey/ai-financial-modeling",
            demoLink: "https://ai-financial-modeling.streamlit.app/"
        },
        {
            title: "AI Healthcare System",
            description: "Advanced clinical documentation pipeline merging Speech-to-Text and Generative AI. Features real-time transcription and automated medical reporting using specialized LLM prompting.",
            tech: ["Python", "LLMs", "RAG", "Speech-to-Text", "NLP", "FastAPI"],
            icon: Brain,
            sourceLink: "https://github.com/Pallavi-Pandey/ai-healthcare"
        },
        {
            title: "AI Video Dubbing Pipeline",
            description: "End-to-end intelligent video translation system. Orchestrates MarianMT for translation, OpenAI Whisper for ASR, and Wav2Lip GAN for precise lip-syncing.",
            tech: ["Wav2Lip GAN", "OpenAI Whisper", "MarianMT", "Docker", "Kubernetes"],
            icon: Video,
            sourceLink: "https://github.com/Pallavi-Pandey/ai-video-dubbing"
        },
        {
            title: "Taxi Fare Predictor",
            description: "Predictive ML solution for high-precision fare estimation. Leverages advanced feature engineering and a robust ensemble of XGBoost and Random Forest regressors.",
            tech: ["Python", "XGBoost", "Random Forest", "Scikit-Learn", "Pandas", "Feature Engineering"],
            icon: MapPin,
            sourceLink: "https://github.com/Pallavi-Pandey/taxi-fare-predictor",
            demoLink: "https://www.kaggle.com/competitions/taxi-fare-guru-total-amount-prediction-challenge"
        },
        {
            title: "IITM BS Portal Gen AI",
            description: "Full-stack educational platform integrated with Google Gemini. Features AI-driven lecture summarization and automated academic question generation.",
            tech: ["Flask", "Google Gemini API", "SQLite", "Python", "Summarization", "Gen-AI"],
            icon: Sparkles,
            sourceLink: "https://github.com/Pallavi-Pandey/iitm-bs-portal-gen-ai"
        },
        {
            title: "My Technical Blog",
            description: "High-performance technical knowledge base optimized for developer experience. Features glassmorphic UI, markdown integration, and automated CI/CD deployment.",
            tech: ["Next.js", "TypeScript", "MDX", "Tailwind CSS", "CI/CD"],
            icon: FileText,
            sourceLink: "https://github.com/Pallavi-Pandey/my-temp-blog",
            demoLink: "https://my-temp-blog.vercel.app/"
        },
        {
            title: "Unique Mart E-Commerce",
            description: "Intelligent grocery management system with integrated sales forecasting and data visualization modules for inventory optimization.",
            tech: ["Flask", "SQLite", "Matplotlib", "Data Visualization", "Python"],
            icon: Box,
            sourceLink: "https://github.com/Pallavi-Pandey/unique-mart-ecommerce"
        },
        {
            title: "DeFi Lending Protocol",
            description: "Decentralized lending and borrowing protocol built on Ethereum. Features collateralized loans, dynamic interest rates, and on-chain liquidation logic via Solidity smart contracts.",
            tech: ["Solidity", "Ethereum", "Hardhat", "Web3.js", "React", "IPFS"],
            icon: Layers,
            sourceLink: "https://github.com/Pallavi-Pandey/defi-lending-protocol"
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
