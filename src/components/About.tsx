"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Heart } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="py-24 px-6 max-w-5xl mx-auto">
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

                <div className="glass p-8 md:p-12 rounded-[2rem] border border-white/5 relative overflow-hidden group">
                    <div className="grid grid-cols-1 gap-12 items-center">
                        <div className="relative z-10 space-y-6 text-lg text-text-muted leading-relaxed">
                            <p>
                                I am a <span className="text-white font-medium">Full Stack Engineer</span> at <span className="text-brand-primary font-bold">Dom Ventas</span> and a <span className="text-brand-primary font-bold">Data Science</span> graduate from <span className="text-brand-primary font-bold">IIT Madras</span>. I specialize in building intelligent systems that merge high-performance backend engineering with state-of-the-art AI.
                            </p>
                            <p>
                                My primary focus is on <span className="text-white">Generative AI</span>, where I build robust pipelines utilizing <span className="text-white">LLMs, RAG, and Agentic Workflows</span>. I thrive on migrating complex architectures and integrating AI functionalities like TTS, STT, and translation into real-world, scalable platforms.
                            </p>
                            <p>
                                I am also deeply interested in <span className="text-white">Blockchain &amp; Web3</span>, exploring smart contract development on <span className="text-brand-primary font-bold">Ethereum &amp; Solana</span>, DeFi protocols, and the convergence of AI with decentralized systems to build trustless, verifiable applications.
                            </p>
                            <p>
                                Beyond my professional work, I am a passionate hackathon enthusiast, participating in events like the <span className="text-white">Kharagpur Data Science Hackathon 2024</span>. I am dedicated to pushing the boundaries of what is possible with data and machine intelligence.
                            </p>
                        </div>

                        {/* Profile Image - Commented out for now
                        <div className="relative flex justify-center">
                            <div className="relative w-64 h-64 rounded-2xl overflow-hidden border-2 border-white/10 ring-1 ring-white/5 rotate-3 hover:rotate-0 transition-all duration-500 shadow-2xl group-hover:shadow-brand-primary/20">
                                <Image
                                    src="/Pallavi_image.jpg"
                                    alt="Pallavi Pandey"
                                    fill
                                    className="object-cover object-center"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>
                            <div className="absolute -z-10 top-4 right-4 w-64 h-64 rounded-2xl border border-brand-primary/20 bg-brand-primary/5 -rotate-3 group-hover:rotate-0 transition-all duration-500" />
                        </div>
                        */}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10 mt-12">
                        <div className="p-6 rounded-2xl bg-white/5 border border-white/5 flex items-start gap-4">
                            <div className="p-3 rounded-xl bg-brand-primary/10 text-brand-primary">
                                <Award size={24} />
                            </div>
                            <div>
                                <h4 className="font-bold text-white mb-1">Education</h4>
                                <p className="text-sm text-text-muted">B.S in Data Science & Applications, IIT Madras</p>
                            </div>
                        </div>
                        <div className="p-6 rounded-2xl bg-white/5 border border-white/5 flex items-start gap-4">
                            <div className="p-3 rounded-xl bg-brand-secondary/10 text-brand-secondary">
                                <Heart size={24} />
                            </div>
                            <div>
                                <h4 className="font-bold text-white mb-1">Interests</h4>
                                <p className="text-sm text-text-muted">AI Research, Blockchain & Web3, Scalable Systems, Open Source, Hackathons</p>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default About;
