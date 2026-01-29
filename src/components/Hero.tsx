"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail, Code } from 'lucide-react';

import Image from 'next/image';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex flex-col justify-center items-center px-6 pt-20">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-4xl w-full text-center space-y-8"
            >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-primary/5 border border-brand-primary/10 text-brand-primary text-xs font-mono mb-4">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-primary opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-primary"></span>
                    </span>
                    Available for new opportunities
                </div>

                <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
                    Pallavi <span className="text-gradient">Pandey</span>
                </h1>

                <p className="text-xl md:text-2xl text-text-muted max-w-2xl mx-auto leading-relaxed">
                    Junior Software Engineer & Data Scientist.
                    Specializing in <span className="text-white">FastAPI</span>, <span className="text-white">AI/LLMs</span>, and scalable <span className="text-white">Backend Architectures</span>.
                </p>

                <div className="flex flex-wrap justify-center gap-4 mt-8">
                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="#projects"
                        className="bg-white text-black px-8 py-3 rounded-full font-bold flex items-center gap-2 hover:bg-brand-primary transition-colors hover:text-black"
                    >
                        View Projects <ArrowRight size={18} />
                    </motion.a>

                    <div className="flex items-center gap-3">
                        {[
                            { icon: Github, href: "https://github.com/Pallavi-Pandey", label: "GitHub" },
                            { icon: Linkedin, href: "https://www.linkedin.com/in/pallavi181/", label: "LinkedIn" },
                            { icon: Code, href: "https://leetcode.com/u/Pallavi-Pandey/", label: "LeetCode" },
                            { icon: Mail, href: "mailto:pallavipandey181@gmail.com", label: "Email" }
                        ].map((social) => (
                            <motion.a
                                key={social.label}
                                whileHover={{ y: -4, color: "#00f2ff" }}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 rounded-full glass border border-white/5 text-text-muted hover:border-brand-primary/30 transition-all"
                                aria-label={social.label}
                            >
                                <social.icon size={20} />
                            </motion.a>
                        ))}
                    </div>
                </div>
            </motion.div>

        </section>
    );
};

export default Hero;
