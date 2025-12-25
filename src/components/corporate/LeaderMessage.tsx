'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function LeaderMessage() {
    return (
        <section className="py-32 bg-ozunlu-900 overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center gap-16">

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="w-full md:w-1/2 relative"
                    >
                        <div className="relative aspect-[3/4] md:aspect-square rounded-lg overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                            <Image
                                src="/ufuk-ozunlu.jpg"
                                alt="Ufuk Özünlü"
                                fill
                                className="object-cover object-top"
                            />
                        </div>
                        {/* Decorative elements */}
                        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="w-full md:w-1/2"
                    >
                        <h2 className="text-white font-bold tracking-widest uppercase mb-4">Liderin Mesajı</h2>
                        <blockquote className="text-3xl md:text-4xl font-serif italic text-white leading-tight mb-8">
                            &ldquo;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.&rdquo;
                        </blockquote>

                        <div className="border-l-4 border-primary pl-6">
                            <h3 className="text-2xl font-bold text-white">Ufuk Özünlü</h3>
                            <p className="text-gray-400">Yönetim Kurulu Başkanı</p>
                        </div>

                        <div className="mt-12">
                            <p className="text-gray-400 leading-relaxed">
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            </p>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
