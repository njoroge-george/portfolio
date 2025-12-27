"use client";

import { motion } from "framer-motion";
import { Clock, Home, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function ComingSoon() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-mint-400/20 rounded-full blur-3xl"
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
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-lime-400/20 rounded-full blur-3xl"
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

      <div className="relative z-10 text-center px-6 max-w-2xl">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, type: "spring" }}
          className="mb-8"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="inline-block"
          >
            <Clock size={80} className="text-mint-400" />
          </motion.div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold mb-6"
        >
          <span className="bg-gradient-to-r from-mint-300 to-lime-400 bg-clip-text text-transparent">
            Coming Soon
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-400 mb-12"
        >
          This project is currently under development. Check back soon for updates!
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link href="/">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-mint-400 to-lime-500 text-black px-8 py-4 rounded-full text-lg font-semibold shadow-lg shadow-mint-500/30"
            >
              <Home size={20} />
              Back to Portfolio
            </motion.button>
          </Link>

          <Link href="/#projects">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 glass border-2 border-mint-400/50 hover:border-mint-400 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all"
            >
              <ArrowLeft size={20} />
              View Other Projects
            </motion.button>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-12"
        >
          <p className="text-gray-500 text-sm">
            Want updates? Follow me on{" "}
            <a href="https://github.com/njoroge-george" target="_blank" rel="noopener noreferrer" className="text-mint-400 hover:text-lime-400 transition-colors">
              GitHub
            </a>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
