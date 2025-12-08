'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

const stats = [
    { label: 'Üretim Üssü', value: 3, suffix: '' },
    { label: 'İhracat Ülkesi', value: 50, suffix: '+' },
    { label: 'Yıllık Çelik İşleme (Ton)', value: 12000, suffix: '' },
    { label: 'Yıllık Tecrübe', value: 45, suffix: '' },
];

const Counter = ({ from, to, duration }: { from: number; to: number; duration: number }) => {
    const nodeRef = useRef<HTMLSpanElement>(null);
    const inView = useInView(nodeRef, { once: true });

    useEffect(() => {
        if (!inView) return;

        const node = nodeRef.current;
        if (!node) return;

        let startTime: number;

        const step = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);

            node.textContent = Math.floor(progress * (to - from) + from).toLocaleString();

            if (progress < 1) {
                requestAnimationFrame(step);
            }
        };

        requestAnimationFrame(step);
    }, [inView, from, to, duration]);

    return <span ref={nodeRef} />;
};

export default function StatsCounter() {
    return (
        <section className="bg-ozunlu-900 py-20 border-y border-white/5 relative z-10">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="text-center"
                        >
                            <div className="text-4xl md:text-6xl font-black text-white mb-2 flex justify-center items-center gap-1">
                                <Counter from={0} to={stat.value} duration={2} />
                                <span className="text-primary">{stat.suffix}</span>
                            </div>
                            <p className="text-gray-400 uppercase tracking-widest text-sm font-semibold">
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
