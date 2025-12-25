"use client";

import { motion } from "framer-motion";
import { Code2, Layers, Sparkles, Zap } from "lucide-react";

export default function About() {
    const highlights = [
        {
            icon: Code2,
            title: "Clean Code",
            description: "Writing maintainable, well-structured code that scales",
            color: "from-pink-500 to-pink-600"
        },
        {
            icon: Layers,
            title: "Full Stack",
            description: "From UI design to backend APIs and deployment",
            color: "from-purple-500 to-purple-600"
        },
        {
            icon: Sparkles,
            title: "Modern Tech",
            description: "Leveraging the latest technologies and best practices",
            color: "from-pink-400 to-purple-500"
        },
        {
            icon: Zap,
            title: "Performance",
            description: "Optimized solutions for blazing-fast experiences",
            color: "from-purple-500 to-pink-500"
        }
    ];

    return (
        <section 
            id="about"
            className="relative py-20 md:py-32 overflow-hidden"
        >
            {/* Animated background elements */}
            <div className="absolute inset-0 opacity-30">
                <motion.div
                    className="absolute top-20 left-10 w-72 h-72 bg-pink-500/20 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                <motion.div
                    className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.2, 0.4, 0.2],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1
                    }}
                />
            </div>

            <div className="relative max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 40 }} 
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    viewport={{ once: true }}
                >
                    <div className="text-center mb-16">
                        <motion.h2 
                            className="text-4xl md:text-5xl font-bold mb-6"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            About <span className="gradient-text-animated">Me</span>
                        </motion.h2>
                        
                        <motion.div 
                            className="h-1 w-20 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: 80 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true }}
                        />
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                        {highlights.map((item, index) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.05, y: -5 }}
                                className="group relative glass p-6 rounded-xl border border-pink-500/20 hover:border-pink-500/50 transition-all duration-300 overflow-hidden"
                            >
                                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                                
                                <motion.div
                                    whileHover={{ rotate: 360 }}
                                    transition={{ duration: 0.6 }}
                                    className={`w-14 h-14 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center mb-4 shadow-lg`}
                                >
                                    <item.icon className="w-7 h-7 text-white" />
                                </motion.div>
                                
                                <h3 className="text-xl font-semibold mb-2 text-white">{item.title}</h3>
                                <p className="text-gray-400 text-sm">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto"
                    >
                        <div className="relative glass p-8 md:p-12 rounded-2xl border border-pink-500/20 overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl -mr-32 -mt-32" />
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl -ml-32 -mb-32" />
                            
                            <div className="relative z-10 space-y-6">
                                <motion.p 
                                    className="text-lg text-gray-300 leading-relaxed"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.4 }}
                                    viewport={{ once: true }}
                                >
                                    I'm a web developer with a strong focus on building modern, scalable, and maintainable web applications. I work primarily with <span className="text-pink-400 font-semibold">TypeScript</span>, <span className="text-pink-400 font-semibold">React</span>, and <span className="text-pink-400 font-semibold">Next.js</span> on the frontend, with an emphasis on clean architecture, performance, and usability.
                                </motion.p>
                                
                                <motion.p 
                                    className="text-lg text-gray-300 leading-relaxed"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.5 }}
                                    viewport={{ once: true }}
                                >
                                    I enjoy turning complex requirements into clear, well-structured systems. Rather than chasing trends, I focus on understanding fundamentals—how things work under the hood, how data flows through an application, and how to design solutions that are easy to extend and maintain.
                                </motion.p>
                                
                                <motion.p 
                                    className="text-lg text-gray-300 leading-relaxed"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.6 }}
                                    viewport={{ once: true }}
                                >
                                    I am comfortable working across the full development lifecycle, from designing user interfaces and APIs to integrating authentication, file storage, and deployment pipelines. I value <span className="text-purple-400 font-semibold">clarity</span>, <span className="text-purple-400 font-semibold">consistency</span>, and <span className="text-purple-400 font-semibold">reliability</span> in my work, and I aim to build software that is both practical and well-crafted.
                                </motion.p>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}