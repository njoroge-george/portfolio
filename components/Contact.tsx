"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, MessageCircle } from "lucide-react";
import { useState } from "react";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus("idle");
        
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                setSubmitStatus("success");
                setFormData({ name: "", email: "", subject: "", message: "" });
                
                // Reset success message after 5 seconds
                setTimeout(() => setSubmitStatus("idle"), 5000);
            } else {
                setSubmitStatus("error");
                console.error('Error:', data.error);
                
                // Reset error message after 5 seconds
                setTimeout(() => setSubmitStatus("idle"), 5000);
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setSubmitStatus("error");
            
            // Reset error message after 5 seconds
            setTimeout(() => setSubmitStatus("idle"), 5000);
        } finally {
            setIsSubmitting(false);
        }
    };

    const contactInfo = [
        {
            icon: Mail,
            title: "Email",
            value: "dawstech5@gmail.com",
            link: "mailto:dawstech5@gmail.com",
            gradient: "from-pink-500 to-pink-600"
        },
        {
            icon: Phone,
            title: "Phone",
            value: "+254758960504",
            link: "tel:+254758960504",
            gradient: "from-purple-500 to-purple-600"
        },
        {
            icon: MapPin,
            title: "Location",
            value: "Nairobi, Kenya",
            link: null,
            gradient: "from-pink-400 to-purple-500"
        }
    ];

    return (
        <section id="contact" className="relative py-20 md:py-32 overflow-hidden">
            {/* Animated background */}
            <div className="absolute inset-0 opacity-20">
                <motion.div
                    className="absolute top-1/4 right-1/4 w-96 h-96 bg-pink-500/40 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                <motion.div
                    className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-500/40 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.2, 0.4, 0.2],
                    }}
                    transition={{
                        duration: 12,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1
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
                        <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full border border-pink-500/30 mb-6"
                        >
                            <MessageCircle size={18} className="text-pink-400" />
                            <span className="text-pink-400 text-sm font-semibold">Let's Talk</span>
                        </motion.div>

                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            Get In <span className="gradient-text-animated">Touch</span>
                        </h2>
                        
                        <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
                            Have a project in mind or want to collaborate? I'd love to hear from you!
                        </p>
                        
                        <motion.div 
                            className="h-1 w-20 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: 80 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true }}
                        />
                    </div>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Contact Information */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div>
                            <h3 className="text-2xl font-semibold mb-4">Let's Connect</h3>
                            <p className="text-gray-400 leading-relaxed">
                                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Feel free to reach out through any of the channels below.
                            </p>
                        </div>

                        <div className="space-y-6">
                            {contactInfo.map((info, index) => (
                                <motion.div
                                    key={info.title}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.3 + (index * 0.1), duration: 0.5 }}
                                    viewport={{ once: true }}
                                    whileHover={{ scale: 1.02, x: 5 }}
                                    className="group relative glass p-6 rounded-xl border border-pink-500/20 hover:border-pink-500/40 transition-all duration-300 overflow-hidden"
                                >
                                    <div className={`absolute inset-0 bg-gradient-to-r ${info.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                                    
                                    <div className="relative flex items-start gap-4">
                                        <motion.div
                                            whileHover={{ rotate: 360 }}
                                            transition={{ duration: 0.6 }}
                                            className={`p-3 rounded-lg bg-gradient-to-br ${info.gradient} shadow-lg`}
                                        >
                                            <info.icon className="w-6 h-6 text-white" />
                                        </motion.div>
                                        <div>
                                            <h4 className="font-semibold mb-1">{info.title}</h4>
                                            {info.link ? (
                                                <a 
                                                    href={info.link}
                                                    className="text-gray-400 hover:text-pink-400 transition-colors"
                                                >
                                                    {info.value}
                                                </a>
                                            ) : (
                                                <p className="text-gray-400">{info.value}</p>
                                            )}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                viewport={{ once: true }}
                            >
                                <label htmlFor="name" className="block text-sm font-medium mb-2 text-pink-300">
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 glass border border-pink-500/30 rounded-lg focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-500/20 transition-all text-white placeholder-gray-500"
                                    placeholder="John Doe"
                                />
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                viewport={{ once: true }}
                            >
                                <label htmlFor="email" className="block text-sm font-medium mb-2 text-pink-300">
                                    Your Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 glass border border-pink-500/30 rounded-lg focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-500/20 transition-all text-white placeholder-gray-500"
                                    placeholder="john@example.com"
                                />
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                viewport={{ once: true }}
                            >
                                <label htmlFor="subject" className="block text-sm font-medium mb-2 text-pink-300">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 glass border border-pink-500/30 rounded-lg focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-500/20 transition-all text-white placeholder-gray-500"
                                    placeholder="Project Inquiry"
                                />
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6 }}
                                viewport={{ once: true }}
                            >
                                <label htmlFor="message" className="block text-sm font-medium mb-2 text-pink-300">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={5}
                                    className="w-full px-4 py-3 glass border border-pink-500/30 rounded-lg focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-500/20 transition-all text-white resize-none placeholder-gray-500"
                                    placeholder="Tell me about your project..."
                                />
                            </motion.div>

                            <motion.button
                                type="submit"
                                disabled={isSubmitting}
                                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                                className="w-full relative overflow-hidden flex items-center justify-center gap-2 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 disabled:from-gray-600 disabled:to-gray-700 text-white px-6 py-4 rounded-lg font-semibold transition-all duration-300 disabled:cursor-not-allowed group shadow-lg shadow-pink-500/20"
                            >
                                <span className="relative z-10 flex items-center gap-2">
                                    {isSubmitting ? (
                                        <motion.span
                                            animate={{ rotate: 360 }}
                                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                        >
                                            ⏳
                                        </motion.span>
                                    ) : (
                                        <>
                                            Send Message
                                            <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                                        </>
                                    )}
                                </span>
                            </motion.button>

                            {submitStatus === "success" && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8, y: 10 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    className="p-4 glass border border-green-500/50 rounded-lg text-green-400 text-center"
                                >
                                    ✓ Message sent successfully! I'll get back to you soon.
                                </motion.div>
                            )}

                            {submitStatus === "error" && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8, y: 10 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    className="p-4 glass border border-red-500/50 rounded-lg text-red-400 text-center"
                                >
                                    ✗ Failed to send message. Please try again or email me directly.
                                </motion.div>
                            )}
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
