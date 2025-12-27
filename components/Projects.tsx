"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Star, Zap } from "lucide-react";
import { MouseEvent, useState } from "react";

type ProjectStatus = "live" | "coming-soon";

interface Project {
    name: string;
    description: string;
    tech: string[];
    github: string;
    live: string;
    featured: boolean;
    gradient: string;
    emoji: string;
    status: ProjectStatus;
}

const projects: Project[] = [
    {
        name: "Home Manager App",
        description: "Comprehensive home management system for tracking maintenance, expenses, inventory, and smart home integration.",
        tech: ["React Native", "Node.js", "MongoDB", "Firebase"],
        github: "https://github.com/yourusername/home-manager",
        live: "https://home-manager-demo.com",
        featured: true,
        gradient: "from-lime-400 to-emerald-600",
        emoji: "🏠",
        status: "coming-soon",
    },
    {
        name: "Document Approval System",
        description: "Enterprise document workflow system with multi-level approvals, digital signatures, and audit trails.",
        tech: ["Next.js", "TypeScript", "PostgreSQL", "Redis"],
        github: "https://github.com/yourusername/doc-approval",
        live: "https://doc-approval-demo.com",
        featured: true,
        gradient: "from-lime-300 to-sky-500",
        emoji: "📋",
        status: "coming-soon",
    },
    {
        name: "Property Management System (PMS)",
        description: "Full-featured property management platform with tenant management, lease tracking, maintenance requests, and financial reporting.",
        tech: ["Next.js", "NestJS", "PostgreSQL", "AWS S3"],
        github: "https://github.com/yourusername/pms",
        live: "https://pms-demo.com",
        featured: true,
        gradient: "from-emerald-400 to-lime-500",
        emoji: "🏢",
        status: "coming-soon",
    },
    {
        name: "E-Commerce Platform",
        description: "A full-stack e-commerce solution with cart management, payment integration, and admin dashboard.",
        tech: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
        github: "https://github.com/yourusername/ecommerce",
        live: "https://ecommerce-demo.com",
        featured: false,
        gradient: "from-lime-300 to-sky-400",
        emoji: "🛍️",
        status: "coming-soon",
    },
    {
        name: "Task Management App",
        description: "Collaborative task management tool with real-time updates, team collaboration, and analytics.",
        tech: ["React", "Node.js", "MongoDB", "Socket.io"],
        github: "https://github.com/yourusername/task-manager",
        live: "https://taskflow.geenjoroge.org",
        featured: false,
        gradient: "from-lime-400 to-blue-500",
        emoji: "✅",
        status: "live",
    },
    {
        name: "Analytics Dashboard",
        description: "Real-time analytics platform with interactive charts, custom reports, and data visualization.",
        tech: ["Next.js", "NestJS", "PostgreSQL", "Chart.js"],
        github: "https://github.com/yourusername/analytics",
        live: "https://analytics-demo.com",
        featured: false,
        gradient: "from-lime-300 to-emerald-400",
        emoji: "📊",
        status: "coming-soon",
    },
];

interface ProjectCardProps {
    project: Project;
    index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
    const [rotateX, setRotateX] = useState(0);
    const [rotateY, setRotateY] = useState(0);
    const isComingSoon = project.status === "coming-soon";

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        const card = e.currentTarget;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        setRotateY((x - centerX) / 10);
        setRotateX((centerY - y) / 10);
    };

    const handleMouseLeave = () => {
        setRotateX(0);
        setRotateY(0);
    };

    const handleCardClick = () => {
        if (isComingSoon) return;
        window.open(project.live, "_blank", "noopener,noreferrer");
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
                transition: 'transform 0.1s ease-out',
            }}
            className={`group relative ${isComingSoon ? "cursor-default" : "cursor-pointer"}`}
            onClick={handleCardClick}
            whileHover={{ y: -10, scale: 1.01 }}
            whileTap={{ scale: 0.995 }}
        >
            <div className="relative h-full rounded-3xl p-[1.5px] bg-gradient-to-br from-white/15 via-transparent to-white/5">
                <motion.div
                    className="absolute inset-0 rounded-3xl bg-gradient-to-r from-lime-400/10 via-transparent to-sky-400/10 blur-2xl"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                />
                <div className="relative bg-black/80 backdrop-blur-sm rounded-[calc(1.5rem-1.5px)] overflow-hidden border border-white/10 transition-all duration-300 h-full shadow-[0_25px_60px_-30px_rgba(0,0,0,0.8)] group-hover:border-lime-300/60">
                    <div className="absolute inset-px rounded-[calc(1.5rem-3px)] bg-gradient-to-br from-white/5 via-white/0 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                    {/* Animated gradient background */}
                    <div className="relative h-56 overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black">
                        <motion.div
                            className="absolute -inset-12 bg-gradient-to-br from-lime-500/20 via-transparent to-sky-500/20 blur-3xl"
                            animate={{ rotate: [0, 45, 0], scale: [1, 1.1, 1] }}
                            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                        />
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.12),_transparent_65%)]" />
                        <motion.div
                            className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-30`}
                            animate={{
                                scale: [1, 1.1, 1],
                            }}
                            transition={{
                                duration: 5,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        />
                    
                    {/* Emoji Display */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <motion.span
                            className="text-8xl"
                            animate={{
                                y: [0, -10, 0],
                                rotate: [0, 5, -5, 0],
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        >
                            {project.emoji}
                        </motion.span>
                    </div>

                    {/* Featured badge - Sweet lime */}
                    {project.featured && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.5 + (index * 0.1) }}
                            viewport={{ once: true }}
                            className="absolute top-4 right-4 flex items-center gap-1 bg-black/70 backdrop-blur-sm px-3 py-1 rounded-full border border-lime-400/50"
                        >
                            <Star size={14} className="fill-lime-400 text-lime-400" />
                            <span className="text-xs text-lime-400 font-semibold">Featured</span>
                        </motion.div>
                    )}
                    
                    {/* Action buttons overlay */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.35, ease: "easeOut" }}
                        className="absolute inset-0 bg-black/85 backdrop-blur-md flex items-center justify-center gap-4"
                    >
                        {isComingSoon ? (
                            <motion.span
                                initial={{ opacity: 0.4 }}
                                animate={{
                                    opacity: [0.4, 1, 0.4],
                                    letterSpacing: [4, 8, 4],
                                }}
                                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                                className="px-5 py-3 rounded-full border border-dashed border-sky-400/50 text-sm uppercase text-sky-200 tracking-[0.4em] bg-sky-500/10"
                            >
                                Coming Soon
                            </motion.span>
                        ) : (
                            <>
                                <motion.a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="p-4 bg-black/80 rounded-full border border-lime-400/50 hover:border-lime-300 transition-colors group/btn"
                                    aria-label="View on GitHub"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <Github size={24} className="text-white group-hover/btn:text-lime-300 transition-colors" />
                                </motion.a>
                                <motion.a
                                    href={project.live}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="p-4 bg-black/80 rounded-full border border-lime-400/50 hover:border-lime-300 transition-colors group/btn"
                                    aria-label="View live demo"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <ExternalLink size={24} className="text-white group-hover/btn:text-lime-300 transition-colors" />
                                </motion.a>
                            </>
                        )}
                    </motion.div>
                </div>

                <div className="p-6 bg-black/60">
                    <motion.h3 
                        className="text-2xl font-bold mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-lime-300 group-hover:to-sky-400 transition-all duration-300"
                    >
                        {project.name}
                    </motion.h3>
                    
                    <div className="mb-6 space-y-4">
                        <p className="text-gray-400 text-sm leading-relaxed">
                            {project.description}
                        </p>
                        <div className="flex items-center gap-3">
                            {isComingSoon ? (
                                <motion.span
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 * index }}
                                    viewport={{ once: true }}
                                    className="text-[11px] uppercase tracking-[0.3em] text-sky-200 px-3 py-1 rounded-full border border-dashed border-sky-400/40"
                                >
                                    Coming Soon
                                </motion.span>
                            ) : (
                                <motion.span
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 * index }}
                                    viewport={{ once: true }}
                                    className="text-[11px] uppercase tracking-[0.3em] text-lime-300 px-3 py-1 rounded-full border border-lime-400/40 shadow-[0_0_15px_rgba(163,230,53,0.2)]"
                                >
                                    Live
                                </motion.span>
                            )}
                            <div className="flex-1 h-px bg-white/10 rounded-full overflow-hidden">
                                <motion.span
                                    className={`block h-full ${isComingSoon ? 'bg-gradient-to-r from-sky-300 via-sky-500/20 to-transparent' : 'bg-gradient-to-r from-lime-400 via-emerald-400 to-transparent'}`}
                                    animate={{ x: ['-30%', '100%'] }}
                                    transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, techIndex) => (
                            <motion.span
                                key={tech}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: (index * 0.1) + (techIndex * 0.05) }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.1, y: -2 }}
                                className={`group/tech text-xs px-3 py-1.5 rounded-full border font-medium transition-all cursor-default relative overflow-hidden backdrop-blur-sm ${
                                    techIndex % 3 === 0 
                                        ? 'bg-gradient-to-r from-lime-400/20 to-emerald-400/20 border-lime-400/40 text-lime-200 hover:border-lime-300 hover:shadow-lg hover:shadow-lime-400/20'
                                        : techIndex % 3 === 1
                                        ? 'bg-gradient-to-r from-emerald-400/20 to-lime-500/20 border-emerald-400/40 text-emerald-200 hover:border-emerald-300 hover:shadow-lg hover:shadow-emerald-400/20'
                                        : 'bg-gradient-to-r from-sky-400/20 to-blue-500/20 border-sky-400/40 text-sky-200 hover:border-sky-300 hover:shadow-lg hover:shadow-sky-400/20'
                                }`}
                            >
                                <span className="absolute inset-0 bg-white/5 opacity-0 group-hover/tech:opacity-30 transition-opacity duration-300" />
                                <span className="relative z-10">{tech}</span>
                            </motion.span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </motion.div>
);
}

export default function Projects() {
    return (
        <section id="projects" className="relative py-20 md:py-32 overflow-hidden bg-black">
            {/* Animated background - Sweet blend */}
            <div className="absolute inset-0 opacity-10">
                <motion.div
                    className="absolute top-1/3 left-1/3 w-96 h-96 bg-lime-400/50 rounded-full blur-3xl"
                    animate={{
                        x: [0, 100, 0],
                        y: [0, 50, 0],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                <motion.div
                    className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-lime-400/50 rounded-full blur-3xl"
                    animate={{
                        x: [0, -100, 0],
                        y: [0, -50, 0],
                        scale: [1, 1.3, 1],
                    }}
                    transition={{
                        duration: 22,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                <motion.div
                    className="absolute top-1/2 right-1/4 w-80 h-80 bg-sky-400/30 rounded-full blur-3xl"
                    animate={{
                        x: [0, 50, 0],
                        y: [0, -30, 0],
                        scale: [1, 1.15, 1],
                    }}
                    transition={{
                        duration: 18,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(0deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:140px_140px] opacity-30" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08),_transparent_60%)]" />
            </div>

            <div className="relative max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <div className="text-center mb-16">
                        <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 bg-black/60 backdrop-blur-sm px-4 py-2 rounded-full border border-lime-400/30 mb-6"
                        >
                            <Zap size={18} className="text-lime-400" />
                            <span className="text-lime-400 text-sm font-semibold">Latest Work</span>
                        </motion.div>
                        
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            Featured <span className="bg-gradient-to-r from-lime-300 to-sky-400 bg-clip-text text-transparent">Projects</span>
                        </h2>
                        
                        <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
                            Explore my recent work showcasing cutting-edge technologies and innovative solutions
                        </p>
                        
                        <motion.div 
                            className="h-1 w-20 bg-gradient-to-r from-lime-400 to-sky-400 mx-auto rounded-full shadow-lg shadow-lime-400/30"
                            initial={{ width: 0 }}
                            whileInView={{ width: 80 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true }}
                        />
                    </div>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard key={project.name} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
