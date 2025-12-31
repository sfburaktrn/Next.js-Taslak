'use client';

import { motion } from 'framer-motion';

export default function CorporateHero() {
    return (
        <section className="relative h-[80vh] min-h-[600px] w-full overflow-hidden flex items-center justify-center bg-ozunlu-950">
            {/* Dynamic Background */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-800/20 via-ozunlu-950 to-black" />
                <div
                    className="absolute inset-0 opacity-80"
                    style={{
                        backgroundImage: `url('/corporate/hero-bg.jpg')`, // Updated with user provided image
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
                <div className="absolute inset-0 bg-black/40" /> {/* Dark overlay for text readability */}
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <span className="inline-block py-1 px-3 rounded-full border border-white/20 bg-white/5 text-xs font-bold tracking-[0.2em] text-gray-300 mb-6 backdrop-blur-sm uppercase">
                        1977&apos;den Beri
                    </span>
                    <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter leading-tight">
                        HIZIN VE GÜVENİN <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-gray-500">
                            İMZASI
                        </span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
                        Yarım asra yaklaşan tecrübemizle, ağır ticari araç üst yapı sektöründe standartları belirliyor, geleceği sağlam temeller üzerine inşa ediyoruz.
                    </p>
                </motion.div>
            </div>

            {/* Bottom Fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-ozunlu-950 to-transparent" />
        </section>
    );
}
