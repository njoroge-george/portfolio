"use client";

import { Github, Linkedin, Mail, Twitter, Heart, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
    const currentYear = new Date().getFullYear();
    
    const socialLinks = [
        { 
            icon: Mail, 
            href: "mailto:george@example.com", 
            label: "Email",
            color: "hover:text-pink-400",
            gradient: "from-pink-500 to-pink-600"
        },
        { 
            icon: Github, 
            href: "https://github.com/njoroge-george", 
            label: "GitHub",
            color: "hover:text-purple-400",
            gradient: "from-purple-500 to-purple-600"
        },
        { 
            icon: Linkedin, 
            href: "https://linkedin.com/in/george-njoroge", 
            label: "LinkedIn",
            color: "hover:text-pink-400",
            gradient: "from-pink-400 to-purple-500"
        },
        { 
            icon: Twitter, 
            href: "https://twitter.com/georgenjoroge", 
            label: "Twitter",
            color: "hover:text-purple-400",
            gradient: "from-purple-400 to-pink-500"
        },
    ];

    const quickLinks = [
        { href: "#hero", label: "Home" },
        { href: "#about", label: "About" },
        { href: "#skills", label: "Skills" },
        { href: "#projects", label: "Projects" },
        { href: "#contact", label: "Contact" },
    ];

    return (
        <footer id="footer" className="relative bg-black/50 border-t border-pink-500/20">
            {/* Animated background */}
            <div className="absolute inset-0 opacity-10">
                <motion.div
                    className="absolute top-0 left-1/4 w-64 h-64 bg-pink-500/30 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.2, 0.4, 0.2],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                <motion.div
                    className="absolute bottom-0 right-1/4 w-64 h-64 bg-purple-500/30 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.2, 0.3, 0.2],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1
                    }}
                />
            </div>

            <div className="relative max-w-7xl mx-auto px-6 py-12">
                <div className="grid md:grid-cols-3 gap-12 mb-8">
                    {/* Brand Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-2xl font-bold mb-4">
                            George <span className="gradient-text-animated">Njoroge</span>
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed mb-4">
                            Full Stack Developer passionate about building exceptional web applications
                            and solving complex problems with clean, maintainable code.
                        </p>
                        <motion.div
                            animate={{
                                opacity: [0.5, 1, 0.5],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="flex items-center gap-2 text-pink-400"
                        >
                            <Sparkles size={16} />
                            <span className="text-sm font-medium">Available for freelance</span>
                        </motion.div>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <h4 className="text-lg font-semibold mb-4 text-pink-300">Quick Links</h4>
                        <ul className="space-y-2">
                            {quickLinks.map((link, index) => (
                                <motion.li
                                    key={link.href}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.2 + (index * 0.05) }}
                                    viewport={{ once: true }}
                                >
                                    <a 
                                        href={link.href}
                                        className="text-gray-400 hover:text-pink-400 transition-colors text-sm flex items-center gap-2 group"
                                    >
                                        <span className="w-1 h-1 rounded-full bg-pink-500/50 group-hover:bg-pink-500 transition-colors" />
                                        {link.label}
                                    </a>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Social Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <h4 className="text-lg font-semibold mb-4 text-purple-300">Connect With Me</h4>
                        <div className="flex flex-wrap gap-3">
                            {socialLinks.map((social, index) => (
                                <motion.a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    initial={{ opacity: 0, scale: 0 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.3 + (index * 0.1), type: "spring" }}
                                    viewport={{ once: true }}
                                    whileHover={{ scale: 1.15, rotate: 360 }}
                                    whileTap={{ scale: 0.9 }}
                                    className={`p-3 glass rounded-full ${social.color} transition-all duration-300 border border-pink-500/20 hover:border-pink-500/50 group relative overflow-hidden`}
                                    aria-label={social.label}
                                >
                                    <div className={`absolute inset-0 bg-gradient-to-br ${social.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />
                                    <social.icon size={20} className="relative z-10" />
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Bottom Bar */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="border-t border-pink-500/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
                >
                    <p className="text-sm text-gray-400 flex items-center gap-2">
                        &copy; {currentYear} George Njoroge. Built with 
                        <motion.span
                            animate={{
                                scale: [1, 1.2, 1],
                            }}
                            transition={{
                                duration: 1,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        >
                            <Heart size={14} className="text-pink-500 fill-pink-500" />
                        </motion.span>
                        using Next.js & Tailwind
                    </p>
                    <p className="text-sm text-gray-400">
                        All rights reserved
                    </p>
                </motion.div>
            </div>
        </footer>
    );
}