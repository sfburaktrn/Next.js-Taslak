import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Calendar, Tag } from 'lucide-react';
import { notFound } from 'next/navigation';

// Haber verileri - gerçek uygulamada veritabanından veya API'den gelecek
const newsData: { [key: string]: any } = {
    'damper-uretiminde-celik-kalitesi-hardox': {
        title: 'Damper Üretiminde Çelik Kalitesi: Hardox ve Ötesi',
        date: '12 Ocak 2025',
        category: 'AKADEMİ',
        image: '/hardox-logo.png', // Placeholder based on available files
        content: `
            <p class="mb-6 text-lg text-gray-300 leading-relaxed">
                Ağır taşımacılık ve madencilik sektörlerinde, damperlerin dayanıklılığı operasyonel verimlilik için hayati öneme sahiptir. Bu noktada kullanılan çelik kalitesi, ekipmanın ömrünü doğrudan belirler. İsveç çeliği Hardox, aşınma direnci ve tokluğu ile sektörün altın standardı haline gelmiştir.
            </p>
            
            <h2 class="text-2xl font-bold text-white mb-4 mt-8">Hardox Neden Fark Yaratıyor?</h2>
            
            <p class="mb-6 text-lg text-gray-300 leading-relaxed">
                Hardox plakalar, zorlu koşullara dayanacak şekilde tasarlanmıştır. Yüksek sertliği, kayaların, kumun ve hurda metallerin aşındırıcı etkisine karşı kalkan görevi görür. Örneğin, <strong>Hardox 450</strong>, standart yumuşak çeliğe göre çok daha uzun servis ömrü sunar.
            </p>
            
            <div class="bg-ozunlu-900/50 border border-white/10 rounded-xl p-6 mb-6">
                <h3 class="text-xl font-bold text-white mb-3">Avantajları:</h3>
                <ul class="list-disc list-inside text-gray-300 space-y-2">
                    <li><strong class="text-white">Daha Uzun Ömür:</strong> Aşınmaya karşı direnç, bakım ve tamir ihtiyacını azaltır.</li>
                    <li><strong class="text-white">Daha Hafif Tasarım:</strong> Yüksek mukavemet sayesinde daha ince plakalar kullanılabilir, bu da boş ağırlığı (dara) düşürür.</li>
                    <li><strong class="text-white">Darbe Dayanımı:</strong> Soğuk iklimlerde bile çatlamaz, ağır darbelere karşı dirençlidir.</li>
                </ul>
            </div>

            <h2 class="text-2xl font-bold text-white mb-4 mt-8">Hardox 500 Tuf: Yeni Nesil Teknoloji</h2>
             <p class="mb-6 text-lg text-gray-300 leading-relaxed">
                En yeni nesil Hardox 500 Tuf, yapısal özellikleriyle Hardox 450'nin tokluğunu ve Hardox 500'ün sertliğini birleştirir. Bu, daha ince ama daha güçlü damper gövdeleri üretmemize olanak tanır. Özünlü Damper olarak, en yeni Hardox teknolojilerini ürünlerimize entegre ederek müşterilerimize "daha fazla yük, daha az yakıt" avantajı sunuyoruz.
            </p>
        `
    },
    '2026-lojistik-ve-tasimacilik-trendleri': {
        title: '2026 Lojistik ve Taşımacılık Trendleri: Türkiye\'nin Rolü',
        date: '08 Ocak 2025',
        category: 'SEKTÖREL',
        image: '/news/news-photo-1.jpeg',
        content: `
            <p class="mb-6 text-lg text-gray-300 leading-relaxed">
                2026 yılına yaklaşırken, küresel lojistik sektörü dijitalleşme ve sürdürülebilirlik ekseninde büyük bir dönüşüm geçiriyor. Türkiye, Asya ve Avrupa arasındaki stratejik konumuyla bu dönüşümün merkezinde yer alıyor.
            </p>

             <h2 class="text-2xl font-bold text-white mb-4 mt-8">Öne Çıkan Başlıklar</h2>
             
            <p class="mb-6 text-lg text-gray-300 leading-relaxed">
                Geleceğin lojistiğinde verimlilik sadece hız demek değil, aynı zamanda akıllı süreç yönetimi demektir.
            </p>

            <ul class="list-none space-y-4 mb-8">
                <li class="flex gap-4">
                    <span class="text-primary text-2xl font-bold">01.</span>
                    <div>
                        <h4 class="text-white font-bold mb-1">Dijitalleşme ve Yapay Zeka</h4>
                        <p class="text-gray-400">Rota optimizasyonundan yük takibine kadar yapay zeka destekli sistemler, bekleme sürelerini minimize ediyor.</p>
                    </div>
                </li>
                 <li class="flex gap-4">
                    <span class="text-primary text-2xl font-bold">02.</span>
                    <div>
                        <h4 class="text-white font-bold mb-1">Multimodal Taşımacılık</h4>
                        <p class="text-gray-400">Demiryolu ve denizyolu entegrasyonu artıyor. Türkiye'nin orta koridor üzerindeki önemi, yeni demiryolu yatırımlarıyla pekişiyor.</p>
                    </div>
                </li>
            </ul>

            <h2 class="text-2xl font-bold text-white mb-4 mt-8">Türk Taşımacısı İçin Fırsatlar</h2>
            <p class="mb-6 text-lg text-gray-300 leading-relaxed">
                Artan ihracat hacmi, kaliteli ve Avrupa standartlarına uygun treyler/damper ihtiyacını doğuruyor. Özünlü Damper, TREDER üyesi olarak sektörün standartlarını yukarı çekmeye ve Türk lojistik firmalarının küresel rekabet gücünü artıracak donanımlar üretmeye devam ediyor.
            </p>
        `
    },
    'yesil-lojistik-hafif-damperlerin-cevresel-etkisi': {
        title: 'Yeşil Lojistik: Hafif Damperlerin Çevresel Etkisi',
        date: '03 Ocak 2025',
        category: 'SÜRDÜRÜLEBİLİRLİK',
        image: '/products/gallery-3.jpg',
        content: `
            <p class="mb-6 text-lg text-gray-300 leading-relaxed">
                Lojistik sektörü, karbon ayak izini azaltma baskısı altında. "Yeşil Lojistik" kavramı, sadece elektrikli tırları değil, bu tırların çektiği yükü, yani damperleri de kapsıyor. Hafifletilmiş şasi ve gövde tasarımı, sürdürülebilirliğin anahtarıdır.
            </p>
            
            <h2 class="text-2xl font-bold text-white mb-4 mt-8">Hafifliğin Matematiği</h2>
            
            <p class="mb-6 text-lg text-gray-300 leading-relaxed">
                Bir damperin boş ağırlığındaki her <strong>1000 kg'lık düşüş</strong>, yakıt tüketiminde %1-2 civarında tasarruf sağlar. Bu, binlerce kilometrelik yolculuklarda tonlarca yakıt ve daha az CO2 emisyonu demektir.
            </p>

            <div class="grid md:grid-cols-2 gap-6 mb-8">
                <div class="bg-gradient-to-br from-ozunlu-900 to-black p-6 rounded-xl border border-white/10">
                    <h3 class="text-primary font-bold mb-2">Ekonomik Fayda</h3>
                    <p class="text-gray-400 text-sm">Daha az yakıt tüketimi, işletme maliyetlerini düşürür. Ayrıca daha hafif damper, yasal sınırlar dahilinde daha fazla yük taşıma kapasitesi (payload) sunar.</p>
                </div>
                 <div class="bg-gradient-to-br from-ozunlu-900 to-black p-6 rounded-xl border border-white/10">
                    <h3 class="text-green-500 font-bold mb-2">Çevresel Fayda</h3>
                    <p class="text-gray-400 text-sm">Daha az fosil yakıt kullanımı, doğaya salınan karbon miktarını azaltır. Yeşil mutabakat hedeflerine uyum sağlamak için kritik bir adımdır.</p>
                </div>
            </div>

            <p class="mb-6 text-lg text-gray-300 leading-relaxed">
                Özünlü Damper AR-GE merkezi, mukavemetten ödün vermeden ağırlığı optimize eden özel alaşımlı şasiler üzerinde çalışmaktadır. Geleceğin taşımacılığı, hafif, güçlü ve çevreci çözümlerle şekillenecek.
            </p>
        `
    }
};

export default async function NewsDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const news = newsData[slug];

    if (!news) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-ozunlu-950 pt-24 pb-24">
            <div className="container mx-auto px-4 max-w-4xl">
                {/* Back Button */}
                <Link
                    href="/medya"
                    className="inline-flex items-center gap-2 text-white hover:text-primary mb-8 transition-colors group"
                >
                    <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                    <span className="font-bold">Tüm Haberlere Dön</span>
                </Link>

                {/* Article Header */}
                <article className="bg-ozunlu-900/50 border border-white/10 rounded-2xl overflow-hidden">
                    {/* Featured Image */}
                    <div className="relative w-full h-96 bg-ozunlu-800">
                        {news.image ? (
                            <Image
                                src={news.image}
                                alt={news.title}
                                fill
                                className="object-cover"
                                sizes="100vw"
                            />
                        ) : (
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="text-white/20 text-6xl">📰</div>
                            </div>
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-ozunlu-950 via-black/50 to-transparent" />

                        {/* Category Badge */}
                        <div className="absolute top-6 left-6">
                            <span className="inline-flex items-center gap-2 bg-primary text-white text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full">
                                <Tag size={14} />
                                {news.category}
                            </span>
                        </div>
                    </div>

                    {/* Article Content */}
                    <div className="p-8 md:p-12">
                        {/* Date */}
                        <div className="flex items-center gap-2 text-gray-400 mb-4">
                            <Calendar size={16} />
                            <span className="text-sm font-bold tracking-widest">{news.date}</span>
                        </div>

                        {/* Title */}
                        <h1 className="text-3xl md:text-5xl font-black text-white mb-8 leading-tight">
                            {news.title}
                        </h1>

                        {/* Content */}
                        <div
                            className="prose prose-invert max-w-none prose-lg prose-p:text-gray-300 prose-headings:text-white prose-strong:text-white"
                            dangerouslySetInnerHTML={{ __html: news.content }}
                        />
                    </div>
                </article>

                {/* Related News or CTA */}
                <div className="mt-12 text-center">
                    <Link
                        href="/medya"
                        className="inline-flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
                    >
                        Diğer Haberleri Görüntüle
                        <ArrowLeft size={20} className="rotate-180" />
                    </Link>
                </div>
            </div>
        </main>
    );
}
