"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("hero");

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
            
            // Update active section based on scroll position
            const sections = ["hero", "about", "skills", "projects", "contact"];
            const current = sections.find(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 100 && rect.bottom >= 100;
                }
                return false;
            });
            if (current) setActiveSection(current);
        };
        
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { href: "#hero", label: "Home" },
        { href: "#about", label: "About" },
        { href: "#skills", label: "Skills" },
        { href: "#projects", label: "Projects" },
        { href: "#contact", label: "Contact" },
    ];

    return (
        <motion.header 
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
                isScrolled 
                    ? "glass shadow-lg shadow-pink-500/10" 
                    : "bg-transparent"
            }`}
        >
            <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                <motion.a 
                    href="#hero" 
                    className="relative text-xl font-bold tracking-wide group"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <span className="relative z-10">
                        George <span className="gradient-text-animated">Njoroge</span>
                    </span>
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity"
                        layoutId="logo-glow"
                    />
                </motion.a>

                {/* Desktop Navigation */}
                <ul className="hidden md:flex items-center gap-2">
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <motion.a 
                                href={link.href}
                                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                                    activeSection === link.href.substring(1)
                                        ? "text-pink-400"
                                        : "text-gray-300 hover:text-pink-400"
                                }`}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {link.label}
                                {activeSection === link.href.substring(1) && (
                                    <motion.div
                                        layoutId="active-nav"
                                        className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-lg border border-pink-500/30"
                                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                    />
                                )}
                            </motion.a>
                        </li>
                    ))}
                </ul>

                {/* Mobile Menu Button */}
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="md:hidden relative z-50 p-2 rounded-lg glass border border-pink-500/30 text-white hover:text-pink-400 transition-colors"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <AnimatePresence mode="wait">
                        {isMobileMenuOpen ? (
                            <motion.div
                                key="close"
                                initial={{ rotate: -90, opacity: 0 }}
                                animate={{ rotate: 0, opacity: 1 }}
                                exit={{ rotate: 90, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                <X size={24} />
                            </motion.div>
                        ) : (
                            <motion.div
                                key="menu"
                                initial={{ rotate: 90, opacity: 0 }}
                                animate={{ rotate: 0, opacity: 1 }}
                                exit={{ rotate: -90, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                <Menu size={24} />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.button>
            </nav>

            {/* Mobile Navigation */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden glass border-t border-pink-500/20 overflow-hidden"
                    >
                        <ul className="flex flex-col items-center gap-4 py-8">
                            {navLinks.map((link, index) => (
                                <motion.li
                                    key={link.href}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <a 
                                        href={link.href} 
                                        className={`block px-6 py-3 text-lg font-medium rounded-lg transition-all duration-300 ${
                                            activeSection === link.href.substring(1)
                                                ? "text-pink-400 bg-pink-500/10 border border-pink-500/30"
                                                : "text-gray-300 hover:text-pink-400 hover:bg-pink-500/5"
                                        }`}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {link.label}
                                    </a>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}