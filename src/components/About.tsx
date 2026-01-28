"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Heart } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="py-24 px-6 max-w-4xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-12"
            >
                <div className="text-center">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">About <span className="text-brand-primary">Me</span></h2>
                    <div className="w-20 h-1 bg-brand-primary rounded-full mx-auto" />
                </div>

                <div className="glass p-8 md:p-12 rounded-[2rem] border border-white/5 space-y-8 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-8 text-brand-primary/10 group-hover:text-brand-primary/20 transition-colors">
                        <GraduationCap size={120} />
                    </div>

                    <div className="relative z-10 space-y-6 text-lg text-text-muted leading-relaxed">
                        <p>
                            I am a <span className="text-white font-medium">Data Science & Applications</span> student at <span className="text-brand-primary font-bold">IIT Madras</span> (2021-25), with a deep passion for building intelligent systems that bridge the gap between robust backend engineering and data-driven insights.
                        </p>
                        <p>
                            My journey is fueled by a constant curiosity for new technologies—from migrating architectures to <span className="text-white">FastAPI</span> for better performance, to integrating complex <span className="text-white">Gen-AI functionalities</span> like RAG and LLMs into real-world platforms.
                        </p>
                        <p>
                            Beyond coding, I am an active participant in hackathons, including the <span className="text-white">Kharagpur Data Science Hackathon 2024</span> and <span className="text-white">HackCBS 6.0</span>. I thrive in collaborative environments where I can leverage my skills in Python, AI, and Cloud technologies to solve challenging problems.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
                        <div className="p-6 rounded-2xl bg-white/5 border border-white/5 flex items-start gap-4">
                            <div className="p-3 rounded-xl bg-brand-primary/10 text-brand-primary">
                                <Award size={24} />
                            </div>
                            <div>
                                <h4 className="font-bold text-white mb-1">Education</h4>
                                <p className="text-sm text-text-muted">B.S in Data Science & Applications, IIT Madras (2021-25)</p>
                            </div>
                        </div>
                        <div className="p-6 rounded-2xl bg-white/5 border border-white/5 flex items-start gap-4">
                            <div className="p-3 rounded-xl bg-brand-secondary/10 text-brand-secondary">
                                <Heart size={24} />
                            </div>
                            <div>
                                <h4 className="font-bold text-white mb-1">Interests</h4>
                                <p className="text-sm text-text-muted">AI Research, Scalable Systems, Open Source, Hackathons</p>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default About;
