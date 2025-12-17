'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const newsItems = [
    {
        id: 1,
        title: 'Özünlü Damper TREDER Ailesi\'ne Katıldı',
        date: '2024',
        image: '/news/news-photo-1.jpeg',
        category: 'KURUMSAL',
        slug: 'ozunlu-damper-treder-ailesine-katildi',
        excerpt: 'Treyler sektörünün tek temsilcisi olan TREDER\'e katılımlar devam ediyor. "Onaylı üst yapı" tedarikçisi olarak öne çıkan Özünlü Damper, Türkiye\'nin en değerli ve en çok tercih edilen ağır ticari üst yapı ekipman üretim şirketlerinden biri olmak için faaliyetlerine devam ediyor.'
    },
    {
        id: 2,
        title: 'Avrupa Lojistik Zirvesi\'nde Özünlü Rüzgarı',
        date: '12 KASIM 2024',
        image: '/news-mock-1.jpg',
        category: 'KURUMSAL'
    },
    {
        id: 3,
        title: 'Yeni Hardox 500 Tuf Serisi Tanıtıldı',
        date: '28 EKİM 2024',
        image: '/news-mock-2.jpg',
        category: 'ÜRÜN'
    }
];

export default function NewsFeed() {
    return (
        <section className="py-24 bg-ozunlu-950">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                            GÜNCEL <span className="text-white">GELİŞMELER</span>
                        </h2>
                        <div className="h-1 w-24 bg-primary rounded-full" />
                    </div>
                    <Link
                        href="/medya"
                        className="hidden md:inline-flex items-center text-gray-300 hover:text-white transition-colors uppercase font-bold tracking-wider"
                    >
                        Tüm Haberler →
                    </Link>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {newsItems.map((item, index) => (
                        <Link href={item.slug ? `/medya/${item.slug}` : '/medya'} key={item.id}>
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="group cursor-pointer"
                            >
                                <div className="relative aspect-[4/3] bg-ozunlu-800 overflow-hidden rounded-lg mb-6">
                                    {item.image ? (
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
                                        />
                                    ) : (
                                        <div className="absolute inset-0 bg-gray-800 group-hover:scale-105 transition-transform duration-700" />
                                    )}
                                    <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded z-10">
                                        {item.category}
                                    </div>
                                </div>
                                <span className="text-white text-sm font-bold tracking-widest">{item.date}</span>
                                <h3 className="text-xl font-bold text-white mt-2 group-hover:text-white transition-colors">
                                    {item.title}
                                </h3>
                                {item.excerpt && (
                                    <p className="text-gray-400 text-sm mt-2 line-clamp-2">
                                        {item.excerpt}
                                    </p>
                                )}
                            </motion.div>
                        </Link>
                    ))}
                </div>

                <div className="mt-12 text-center md:hidden">
                    <Link
                        href="/medya"
                        className="inline-flex items-center text-gray-300 hover:text-white transition-colors uppercase font-bold tracking-wider"
                    >
                        Tüm Haberler →
                    </Link>
                </div>
            </div>
        </section>
    );
}
