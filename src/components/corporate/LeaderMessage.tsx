'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function LeaderMessage() {
    return (
        <section className="py-16 bg-ozunlu-900 overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center gap-12">

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="w-full md:w-2/5 relative"
                    >
                        <div className="relative aspect-[3/4] md:aspect-square rounded-lg overflow-hidden shadow-2xl">
                            <Image
                                src="/ufuk-ozunlu.jpg"
                                alt="Ufuk Özünlü"
                                fill
                                className="object-cover object-top"
                            />
                        </div>
                        {/* Decorative elements */}
                        <div className="absolute -bottom-8 -right-8 w-36 h-36 bg-primary/20 rounded-full blur-2xl" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="w-full md:w-3/5"
                    >
                        <h2 className="text-white font-bold tracking-widest uppercase mb-4 text-sm border-b border-primary/50 inline-block pb-2">Liderin Mesajı</h2>
                        <blockquote className="text-2xl md:text-3xl font-serif italic text-white leading-relaxed mb-8 opacity-90">
                            &ldquo;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.&rdquo;
                        </blockquote>

                        <div className="flex items-center gap-4">
                            <div className="h-12 w-1 bg-primary rounded-full" />
                            <div>
                                <h3 className="text-xl font-bold text-white tracking-wide">UFUK ÖZÜNLÜ</h3>
                                <p className="text-gray-400 text-sm uppercase tracking-wider">Yönetim Kurulu Başkanı</p>
                            </div>
                        </div>

                        <div className="mt-10">
                            <p className="text-gray-400 leading-relaxed text-base">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                <br /><br />
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
                            </p>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
