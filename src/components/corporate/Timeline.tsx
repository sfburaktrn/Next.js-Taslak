'use client';

import { motion } from 'framer-motion';

const milestones = [
    { year: '1977', title: 'Temellerin Atılması', desc: "İstanbul Okmeydanı'nda 30 metrekarelik bir atölyede, büyük hayallerle başlayan üretim yolculuğu." },
    { year: '1985', title: 'İlk Büyüme', desc: "Üretim tesislerinin günümüzde de bulunduğu İstanbul Habipler'e taşınması." },
    { year: '1991', title: 'Geleceğe Yatırım', desc: 'Mevcut fabrika arazisinin satın alınması ve lider üstyapı üreticisi olma yolunda ilk büyük yatırım.' },
    { year: '2005', title: 'Yetkili Üst Yapıcı', desc: 'Dünyanın önde gelen kamyon üreticilerinin sektördeki ilk "Qualified Body Builder" unvanı.' },
    { year: '2009', title: 'Kapasite Artışı', desc: 'Yeni Kalite Yönetimi anlayışı ve makine yatırımları ile üretim kapasitesinin iki katına çıkarılması.' },
    { year: 'Günümüz', title: 'Küresel Güç', desc: '3 ayrı tesiste toplam 30.000 m² üretim alanı, 81 ilde satış ve 40 dan fazla ülkeye ihracat.' },
];

export default function Timeline() {
    return (
        <section className="py-16 bg-ozunlu-950 relative overflow-hidden">
            <div className="absolute inset-0 bg-white/5 skew-y-3 transform origin-top-left" />

            <div className="container mx-auto px-4 relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
                    ZAMANIN <span className="text-white">ÖTESİNDE</span>
                </h2>

                <div className="relative">
                    {/* Center Line with Premium Gradient */}
                    <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-[2px] bg-gradient-to-b from-transparent via-white/20 to-transparent ml-4 md:ml-0" />

                    <div className="space-y-8">
                        {milestones.map((item, index) => (
                            <motion.div
                                key={item.year}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className={`flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                            >
                                {/* Content Card */}
                                <div className={`w-full md:w-[45%] pl-12 md:pl-0 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                                    <div className="group relative p-5 md:p-6 bg-white/[0.02] backdrop-blur-sm border border-white/5 rounded-none hover:bg-white/[0.04] hover:border-white/20 transition-all duration-700">

                                        <span className="block text-4xl md:text-5xl font-black text-white/90 mb-2 tracking-tighter">
                                            {item.year}
                                        </span>
                                        <h4 className="text-lg md:text-xl font-bold text-gray-200 mb-2 uppercase tracking-widest text-sm">{item.title}</h4>
                                        <p className="text-gray-400 leading-relaxed text-sm font-light border-t border-white/5 pt-3 group-hover:text-gray-300 transition-colors">{item.desc}</p>
                                    </div>
                                </div>

                                {/* Node Dot */}
                                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-9 h-9 flex items-center justify-center ml-0">
                                    <div className="w-3 h-3 bg-white rounded-full ring-4 ring-black ring-opacity-50 shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
                                </div>

                                <div className="hidden md:block w-[45%]" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
