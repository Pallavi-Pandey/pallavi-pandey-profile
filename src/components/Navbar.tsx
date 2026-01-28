"use client";

import React from 'react';

const Navbar = () => {
    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Experience', href: '#experience' },
        { name: 'Projects', href: '#projects' },
        { name: 'Skills', href: '#skills' },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6">
            <div className="glass px-8 py-3 rounded-full flex items-center gap-8 border border-white/10 shadow-2xl">
                <a href="#home" className="text-xl font-bold text-brand-primary tracking-tighter">
                    PP<span className="text-white">.</span>
                </a>
                <div className="hidden md:flex items-center gap-6">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-text-muted hover:text-brand-primary transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>
                <a
                    href="mailto:pallavipandey181@gmail.com"
                    className="bg-brand-primary/10 text-brand-primary px-4 py-1.5 rounded-full text-xs font-bold border border-brand-primary/20 hover:bg-brand-primary/20 transition-all"
                >
                    Hire Me
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
