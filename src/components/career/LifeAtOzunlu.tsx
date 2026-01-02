'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const galleryImages = [
    '/career-1-mock.jpg',
    '/career-2-mock.jpg',
    '/career-3-mock.jpg',
    '/career-4-mock.jpg'
];

export default function LifeAtOzunlu() {
    return (
        <section className="py-24 bg-transparent relative overflow-hidden">
            {/* Decorative Background Element */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-white/[0.03] to-transparent pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 items-center mb-16">
                    <div className="w-full lg:w-1/2 text-left lg:pl-12">
                        <div className="relative mb-12">
                            <h2 className="text-6xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white/20 via-white/5 to-transparent leading-[0.9] tracking-tighter opacity-40 select-none absolute -top-16 -left-8 w-full z-0 whitespace-nowrap">
                                ÖZÜNLÜ
                            </h2>
                            <h2 className="text-5xl md:text-7xl font-black text-white relative z-10 leading-tight">
                                BİZDE <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-gray-500">
                                    HAYAT
                                </span>
                            </h2>
                            <div className="relative mt-8 h-2">
                                <motion.div
                                    initial={{ width: 0, opacity: 0 }}
                                    whileInView={{ width: "10rem", opacity: 0.6 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, delay: 0.4 }}
                                    className="absolute top-1/2 left-0 -translate-y-1/2 h-5 bg-white/40 blur-xl rounded-full pointer-events-none"
                                />
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: "8rem" }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, delay: 0.4 }}
                                    className="absolute top-1/2 left-0 -translate-y-1/2 h-1.5 bg-gradient-to-r from-[#000080] to-transparent shadow-[0_0_15px_rgba(255,255,255,0.3)]"
                                />
                            </div>
                        </div>
                        <p className="text-2xl text-gray-300 font-light leading-relaxed">
                            Özünlü ailesi olarak, sadece en iyi damperleri üretmekle kalmıyor,
                            en mutlu çalışanlara sahip olmayı da hedefliyoruz. İnovasyon,
                            sürekli gelişim ve takım ruhu DNA&apos;mızda var.
                        </p>
                    </div>
                    <div className="w-full lg:w-1/2">
                        {/* Video/Image Collage Placeholder */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-4">
                                <div className="relative aspect-square bg-ozunlu-800 rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-500 group">
                                    <Image
                                        src="/career/career-1.jpg"
                                        alt="Özünlü Kariyer 1"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="relative aspect-[4/3] bg-ozunlu-900 rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-500 group">
                                    <Image
                                        src="/career/career-2.jpg"
                                        alt="Özünlü Kariyer 2"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                            <div className="space-y-4 pt-12">
                                <div className="relative aspect-[4/3] bg-ozunlu-900 rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-500 group">
                                    <Image
                                        src="/career/career-3.jpg"
                                        alt="Özünlü Kariyer 3"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="relative aspect-square bg-ozunlu-800 rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-500 group">
                                    <Image
                                        src="/career/career-4.jpg"
                                        alt="Özünlü Kariyer 4"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
