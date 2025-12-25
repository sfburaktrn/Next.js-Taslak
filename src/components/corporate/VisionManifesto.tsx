'use client';

import { motion } from 'framer-motion';

export default function VisionManifesto() {
    return (
        <section className="py-24 bg-ozunlu-950 text-white border-b border-white/5">
            <div className="container mx-auto px-4 text-center max-w-4xl">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-6xl font-black mb-12 tracking-tighter"
                >
                    LOREM IPSUM DOLOR SIT AMET <span className="text-white">CONSECTETUR</span>
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="space-y-8 text-lg md:text-xl text-gray-300 font-light leading-relaxed"
                >
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <p>
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                    <p className="text-white font-semibold">
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
