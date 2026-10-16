"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Presentation, GraduationCap, Calendar, MapPin, Clock, Boxes, Sparkles, Brain, ShieldAlert, Network, Calculator } from 'lucide-react';

const Activities = () => {
    const activities = [
        {
            title: "Distributed Computing Faculty",
            organization: "JAIN (Deemed-to-be University)",
            location: "Jayanagar, Bengaluru",
            date: "September, 2026 – Ongoing",
            duration: "Ongoing Course",
            description: "Teaching an M.Tech CSE Distributed Computing course, covering Module 1 (hands-on labs in sockets, RPC/gRPC, concurrency, mutual exclusion, and deadlocks) and Module 2 (fault tolerance, consistency, CAP theorem, and the full security stack from authentication through auditing).",
            icon: Network,
            tech: ["Distributed Systems", "RPC/gRPC", "Concurrency", "Fault Tolerance", "Security"],
            color: "text-brand-primary"
        },
        {
            title: "Workshop: AI × Cybersecurity",
            organization: "Jain University",
            location: "Global Campus, Kanakapura",
            date: "October 5, 2026",
            duration: "8-Hour Workshop",
            description: "Delivered an 8-hour industry-focused workshop (4 hours theory + 4 hours hands-on labs) on AI in Cybersecurity — phishing detection, prompt injection and AI-system security, anomaly-based threat detection, incident response, SOC alert triage, and career pathways into AI-security roles.",
            icon: ShieldAlert,
            tech: ["AI Security", "Threat Detection", "Prompt Injection", "Incident Response", "SOC"],
            color: "text-brand-secondary"
        },
        {
            title: "Placement Training",
            organization: "CMS Business School",
            location: "Gandhi Nagar, Bangalore",
            date: "September – October, 2026",
            duration: "4-Week Training",
            description: "Delivered a 4-week placement-training program for 2nd Year MBA students, covering Aptitude (arithmetic shortcuts, percentages, ratios, and calculation speed techniques) and Advanced Excel (structured tables, formulas, IF/AND/OR logic, VLOOKUP/XLOOKUP, INDEX-MATCH, SUMIFS/COUNTIFS, text & date functions, error handling, and PivotTables/PivotCharts).",
            icon: Calculator,
            tech: ["Aptitude", "Excel", "PivotTables", "VLOOKUP", "Data Cleaning"],
            color: "text-brand-accent"
        },
        {
            title: "Semester 5 AI Faculty: Deep Learning & NLP",
            organization: "St. Claret College Autonomous",
            location: "Bangalore",
            date: "July – September, 2026",
            duration: "40-Hour Semester Program",
            description: "Taught the Semester 5 Artificial Intelligence course, covering Deep Learning foundations (neural networks, backpropagation, optimizers), Computer Vision (OpenCV, CNNs, object detection with RCNN/YOLO), and Forecasting & Advanced NLP (ARIMA, RNN/LSTM/GRU, Transformer architectures and attention), with hands-on notebooks, assignments, and a capstone mini project.",
            icon: Brain,
            tech: ["Deep Learning", "CNNs", "Computer Vision", "RNN/LSTM", "Transformers", "NLP"],
            color: "text-brand-secondary"
        },
        {
            title: "Data Analysis Training Program",
            organization: "Dr. Ambedkar Institute of Technology",
            location: "Bangalore",
            date: "May, 2026",
            duration: "6-Week Intensive Training",
            description: "Conducted a comprehensive 6-week training program on Data Analysis using SQL, Python, Pandas, NumPy, Power BI, and other modern data analysis tools, empowering students with practical industry-ready skills.",
            icon: GraduationCap,
            tech: ["SQL", "Python", "Pandas", "NumPy", "Power BI"],
            color: "text-brand-primary"
        },
        {
            title: "Guest Lecture: AI & Data Science",
            organization: "VIT",
            location: "Vellore",
            date: "April, 2026",
            duration: "Single Session",
            description: "Delivered an insightful session on the evolving landscape of AI and Data Science, bridging academic theory with industry practices.",
            icon: Presentation,
            tech: ["AI", "Data Science", "Industry Trends"],
            color: "text-brand-accent"
        },
        {
            title: "Workshop: Blockchain & Web3 Fundamentals",
            organization: "Magizh technologies",
            location: "Coimbatore",
            date: "2025",
            duration: "10-Day Bootcamp",
            description: "Conducted an intensive 10-day bootcamp on Blockchain fundamentals, covering smart contract development with Solidity, DeFi concepts, and hands-on projects deploying on Ethereum testnets using Hardhat and Web3.js.",
            icon: Boxes,
            tech: ["Solidity", "Ethereum", "Hardhat", "Web3.js", "DeFi", "IPFS"],
            color: "text-brand-accent"
        },
        {
            title: "Training: Generative AI in Practice",
            organization: "Training Institution",
            location: "Bangalore, Whitefield (Offline)",
            date: "2025",
            duration: "3 Weeks",
            description: "Delivered a hands-on 3 weeks offline intensive training for B.Tech interns at Training Institution, Bangalore Whitefield, covering LLM fundamentals, RAG pipelines, prompt engineering, agentic workflows with LangChain, and real-world deployment of AI-powered applications.",
            icon: Sparkles,
            tech: ["LLMs", "RAG", "LangChain", "Prompt Engineering", "Agentic AI", "HuggingFace"],
            color: "text-brand-secondary"
        }
    ];

    return (
        <section id="activities" className="py-24 px-6 max-w-5xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-12"
            >
                <div className="text-center md:text-left">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Invited Talks & <span className="text-brand-primary">Workshops</span></h2>
                    <div className="w-20 h-1 bg-brand-primary rounded-full md:mx-0 mx-auto" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {activities.map((activity, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.6 }}
                            className="glass p-8 rounded-3xl border border-white/5 hover:border-brand-primary/20 transition-all group relative overflow-hidden h-full flex flex-col"
                        >
                            <div className="relative z-10 flex-grow">
                                <div className={`p-3 rounded-2xl bg-white/5 w-fit mb-6 ${activity.color} group-hover:scale-110 transition-transform`}>
                                    <activity.icon size={28} />
                                </div>
                                <h3 className="text-xl font-bold mb-2 group-hover:text-brand-primary transition-colors">{activity.title}</h3>
                                <div className="flex flex-col gap-2 mb-4">
                                    <div className="flex items-center gap-2 text-text-muted text-xs">
                                        <Calendar size={14} className="text-brand-primary" />
                                        <span>{activity.date}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-text-muted text-xs">
                                        <Clock size={14} className="text-brand-secondary" />
                                        <span>{activity.duration}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-text-muted text-xs">
                                        <MapPin size={14} className="text-brand-accent" />
                                        <span>{activity.organization}, {activity.location}</span>
                                    </div>
                                </div>
                                <p className="text-text-muted text-sm leading-relaxed mb-6">
                                    {activity.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {activity.tech.map((t) => (
                                        <span key={t} className="text-[10px] uppercase tracking-wider font-bold bg-white/5 px-2 py-1 rounded border border-white/5 text-text-muted">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                                <activity.icon size={80} />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Activities;
