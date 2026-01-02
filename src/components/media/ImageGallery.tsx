'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { X } from 'lucide-react';

const galleryImages = [
    { src: '/products/gallery-1.jpg', alt: 'Özünlü Damper Gallery 1' },
    { src: '/products/gallery-2.jpg', alt: 'Özünlü Damper Gallery 2' },
    { src: '/products/gallery-3.jpg', alt: 'Özünlü Damper Gallery 3' },
    { src: '/products/gallery-4.jpg', alt: 'Özünlü Damper Gallery 4' },
    { src: '/products/gallery-5.jpg', alt: 'Özünlü Damper Gallery 5' },
    { src: '/products/gallery-6.jpg', alt: 'Özünlü Damper Gallery 6' },
    { src: '/products/gallery-7.jpg', alt: 'Özünlü Damper Gallery 7' },
    { src: '/products/gallery-8.jpg', alt: 'Özünlü Damper Gallery 8' },
    { src: '/products/gallery-9.jpg', alt: 'Özünlü Damper Gallery 9' },
    { src: '/products/gallery-10.jpg', alt: 'Özünlü Damper Gallery 10' },
];

export default function ImageGallery() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    return (
        <section className="py-24 bg-ozunlu-950">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tighter leading-tight">
                        ÜRÜN <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-gray-500">GALERİSİ</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
                        Üstün mühendislik ve kusursuz işçiliğin detaylarını inceleyin.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {galleryImages.map((image, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="group relative aspect-square cursor-pointer overflow-hidden rounded-xl bg-ozunlu-900"
                            onClick={() => setSelectedImage(image.src)}
                        >
                            <Image
                                src={image.src}
                                alt={image.alt}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/20" />
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Lightbox Modal */}
            {selectedImage && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4" onClick={() => setSelectedImage(null)}>
                    <button
                        className="absolute top-8 right-8 text-white hover:text-primary transition-colors"
                        onClick={() => setSelectedImage(null)}
                    >
                        <X size={40} />
                    </button>
                    <div className="relative h-[80vh] w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
                        <Image
                            src={selectedImage}
                            alt="Gallery detail"
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>
            )}
        </section>
    );
}
