'use client';

import { motion } from 'framer-motion';

export default function HeroSection() {
    return (
        <div className="relative h-screen w-full overflow-hidden bg-ozunlu-950">
            {/* Video Background Mockup - In real app, use <video> tag */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="h-full w-full object-cover opacity-40 mix-blend-overlay"
                >
                    <source src="/placeholder-industrial-video.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-ozunlu-950 via-transparent to-transparent opacity-90" />
            </div>

            {/* Content */}
            <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-4">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                >
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white drop-shadow-2xl">
                        GÜCÜN <span className="text-primary">MÜHENDİSLİK</span> HALİ
                    </h1>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="mt-6 max-w-2xl"
                >
                    <p className="text-xl md:text-2xl text-gray-300 font-light tracking-wide">
                        Geleceği Taşıyoruz. 3 Üretim Üssü, +50 İhracat Ülkesi ile
                        <span className="font-semibold text-white"> Global Güç.</span>
                    </p>
                </motion.div>

                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 1, duration: 0.5 }}
                    className="mt-12"
                >
                    <button className="group relative px-8 py-4 bg-transparent overflow-hidden border-2 border-primary text-primary font-bold uppercase tracking-wider transition-all hover:text-black">
                        <span className="relative z-10">Ürünlerimizi İnceleyin</span>
                        <div className="absolute inset-0 h-full w-full origin-left scale-x-0 bg-primary transition-transform duration-300 ease-out group-hover:scale-x-100" />
                    </button>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
            >
                <div className="h-12 w-8 border-2 border-white/20 rounded-full flex justify-center p-2">
                    <div className="w-1 h-3 bg-primary rounded-full" />
                </div>
            </motion.div>
        </div>
    );
}
