"use client";

import { motion } from "framer-motion";
import { Code, Database, Globe, Server, Wrench, GitBranch } from "lucide-react";

const skillCategories = [
  {
    category: "Frontend",
    icon: Code,
    color: "pink",
    gradient: "from-pink-500 to-pink-600",
    skills: [
      { name: "JavaScript", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "React", level: 92 },
      { name: "Next.js", level: 88 },
      { name: "HTML/CSS", level: 95 },
      { name: "Tailwind CSS", level: 90 },
    ]
  },
  {
    category: "Backend",
    icon: Server,
    color: "purple",
    gradient: "from-purple-500 to-purple-600",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "NestJS", level: 75 },
      { name: "REST APIs", level: 90 },
      { name: "GraphQL", level: 70 },
    ]
  },
  {
    category: "Database",
    icon: Database,
    color: "pink",
    gradient: "from-pink-400 to-purple-500",
    skills: [
      { name: "PostgreSQL", level: 88 },
      { name: "MySQL", level: 85 },
      { name: "MongoDB", level: 80 },
    ]
  },
  {
    category: "DevOps & Tools",
    icon: Wrench,
    color: "purple",
    gradient: "from-purple-400 to-pink-500",
    skills: [
      { name: "Git", level: 92 },
      { name: "Docker", level: 75 },
      { name: "AWS", level: 70 },
    ]
  }
];

export default function Skills() {
    return (
        <section id="skills" className="relative py-20 md:py-32 overflow-hidden">
            {/* Animated background */}
            <div className="absolute inset-0 opacity-20">
                <motion.div
                    className="absolute top-1/4 right-1/4 w-96 h-96 bg-pink-500/30 rounded-full blur-3xl"
                    animate={{
                        x: [0, 50, 0],
                        y: [0, 30, 0],
                        scale: [1, 1.1, 1],
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                <motion.div
                    className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl"
                    animate={{
                        x: [0, -50, 0],
                        y: [0, -30, 0],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: 18,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
            </div>

            <div className="relative max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            Technical <span className="gradient-text-animated">Skills</span>
                        </h2>
                        <motion.div 
                            className="h-1 w-20 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: 80 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true }}
                        />
                    </div>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    {skillCategories.map((category, categoryIndex) => (
                        <motion.div
                            key={category.category}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: categoryIndex * 0.15, duration: 0.5 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10 }}
                            className="relative group"
                        >
                            <div className="glass p-8 rounded-2xl border border-pink-500/20 hover:border-pink-500/40 transition-all duration-300 h-full">
                                {/* Glow effect on hover */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`} />
                                
                                <div className="relative z-10">
                                    <div className="flex items-center gap-4 mb-8">
                                        <motion.div
                                            whileHover={{ rotate: 360, scale: 1.1 }}
                                            transition={{ duration: 0.6 }}
                                            className={`w-16 h-16 rounded-xl bg-gradient-to-br ${category.gradient} flex items-center justify-center shadow-lg`}
                                        >
                                            <category.icon className="w-8 h-8 text-white" />
                                        </motion.div>
                                        <h3 className="text-2xl font-semibold">{category.category}</h3>
                                    </div>
                                    
                                    <div className="space-y-6">
                                        {category.skills.map((skill, skillIndex) => (
                                            <motion.div
                                                key={skill.name}
                                                initial={{ opacity: 0, x: -30 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                transition={{ 
                                                    delay: (categoryIndex * 0.15) + (skillIndex * 0.1), 
                                                    duration: 0.4 
                                                }}
                                                viewport={{ once: true }}
                                            >
                                                <div className="flex items-center justify-between mb-2">
                                                    <span className="text-gray-200 font-medium">{skill.name}</span>
                                                    <motion.span 
                                                        className="text-pink-400 font-semibold text-sm"
                                                        initial={{ opacity: 0 }}
                                                        whileInView={{ opacity: 1 }}
                                                        transition={{ delay: (categoryIndex * 0.15) + (skillIndex * 0.1) + 0.3 }}
                                                        viewport={{ once: true }}
                                                    >
                                                        {skill.level}%
                                                    </motion.span>
                                                </div>
                                                
                                                {/* Progress bar */}
                                                <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                                                    <motion.div
                                                        className={`h-full bg-gradient-to-r ${category.gradient} rounded-full relative`}
                                                        initial={{ width: 0 }}
                                                        whileInView={{ width: `${skill.level}%` }}
                                                        transition={{ 
                                                            delay: (categoryIndex * 0.15) + (skillIndex * 0.1) + 0.2,
                                                            duration: 1,
                                                            ease: "easeOut"
                                                        }}
                                                        viewport={{ once: true }}
                                                    >
                                                        <motion.div
                                                            className="absolute right-0 top-0 bottom-0 w-1 bg-white/50 blur-sm"
                                                            animate={{
                                                                opacity: [0.5, 1, 0.5],
                                                            }}
                                                            transition={{
                                                                duration: 1.5,
                                                                repeat: Infinity,
                                                                ease: "easeInOut"
                                                            }}
                                                        />
                                                    </motion.div>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}