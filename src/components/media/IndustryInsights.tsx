'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const articles = [
    {
        category: 'AKADEMİ',
        slug: 'damper-uretiminde-celik-kalitesi-hardox',
        title: 'Damper Üretiminde Çelik Kalitesi: Hardox ve Ötesi',
        excerpt: 'Yüksek mukavemetli çelik kullanımı, damper ömrünü nasıl uzatır? Hardox 450 ve 500 Tuf karşılaştırması ve yatırım getirisi analizi.',
        date: '12 Ocak 2025',
        readTime: '6 dk okuma',
        image: '/hardox-logo.png' // Using logo as a placeholder/relevant image
    },
    {
        category: 'SEKTÖREL',
        slug: '2026-lojistik-ve-tasimacilik-trendleri',
        title: '2026 Lojistik ve Taşımacılık Trendleri',
        excerpt: 'Küresel tedarik zincirindeki değişimler, yakıt verimliliği düzenlemeleri ve Türk taşımacılık sektörünü bekleyen fırsatlar.',
        date: '08 Ocak 2025',
        readTime: '8 dk okuma',
        image: '/news/news-photo-1.jpeg'
    },
    {
        category: 'SÜRDÜRÜLEBİLİRLİK',
        slug: 'yesil-lojistik-hafif-damperlerin-cevresel-etkisi',
        title: 'Yeşil Lojistik: Hafif Damperlerin Çevresel Etkisi',
        excerpt: 'Daha hafif şasi tasarımı ile yakıt tasarrufu sağlamak ve karbon ayak izini azaltmak mümkün. Özünlü AR-GE verileriyle inceledik.',
        date: '03 Ocak 2025',
        readTime: '5 dk okuma',
        image: '/products/gallery-3.jpg' // Reusing a gallery image
    }
];

export default function IndustryInsights() {
    return (
        <section className="py-24 bg-ozunlu-900 border-t border-white/5">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tighter leading-tight">
                            SEKTÖREL <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-gray-500">İÇGÖRÜLER</span>
                        </h2>
                        <p className="text-gray-400 text-lg max-w-xl leading-relaxed">
                            Ağır ticari araç sektörü, üretim teknolojileri ve lojistik dünyasına dair uzman analizleri.
                        </p>
                    </div>

                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {articles.map((article, index) => (
                        <Link href={`/medya/${article.slug}`} key={index} className="block h-full">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group cursor-pointer flex flex-col h-full bg-ozunlu-950 rounded-xl overflow-hidden border border-white/5 hover:border-primary/30 transition-all duration-300"
                            >
                                <div className="relative aspect-[16/9] overflow-hidden">
                                    {/* Image handling */}
                                    <div className="absolute inset-0 bg-gray-800" />
                                    <Image
                                        src={article.image}
                                        alt={article.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-ozunlu-950 via-transparent to-transparent opacity-60 z-10" />
                                    <div className="absolute top-4 left-4 z-20">
                                        <span className="bg-primary/90 text-white text-[10px] font-bold px-3 py-1 rounded backdrop-blur-md">
                                            {article.category}
                                        </span>
                                    </div>
                                </div>

                                <div className="p-8 flex flex-col flex-grow">
                                    <div className="flex items-center gap-4 text-xs text-gray-500 mb-4 font-medium uppercase tracking-wider">
                                        <div className="flex items-center gap-1">
                                            <Calendar className="w-3 h-3" />
                                            {article.date}
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Clock className="w-3 h-3" />
                                            {article.readTime}
                                        </div>
                                    </div>

                                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-primary transition-colors leading-snug">
                                        {article.title}
                                    </h3>

                                    <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                                        {article.excerpt}
                                    </p>

                                    <div className="flex items-center text-white font-bold text-xs uppercase tracking-widest mt-auto">
                                        Devamını Oku <ArrowRight className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
