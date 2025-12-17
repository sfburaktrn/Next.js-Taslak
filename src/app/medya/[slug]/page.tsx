import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Calendar, Tag } from 'lucide-react';
import { notFound } from 'next/navigation';

// Haber verileri - gerçek uygulamada veritabanından veya API'den gelecek
const newsData: { [key: string]: any } = {
    'ozunlu-damper-treder-ailesine-katildi': {
        title: 'Özünlü Damper TREDER Ailesi\'ne Katıldı',
        date: '2024',
        category: 'KURUMSAL',
        image: '/news/news-photo-1.jpeg',
        content: `
            <p class="mb-6 text-lg text-gray-300 leading-relaxed">
                Treyler sektörünün tek temsilcisi olan TREDER'e katılımlar devam ediyor. "Onaylı üst yapı" tedarikçisi olarak öne çıkan Özünlü Damper, Türkiye'nin en değerli ve en çok tercih edilen ağır ticari üst yapı ekipman üretim şirketlerinden biri olmak için faaliyetlerine devam ediyor.
            </p>
            
            <p class="mb-6 text-lg text-gray-300 leading-relaxed">
                Özünlü Damper CEO'su <strong class="text-white">Ufuk Özünlü</strong>, TREDER'in faydalı çalışmalara imza attığını ve böyle bir derneğin içerisinde yer almaktan dolayı mutlu olduklarını dile getirdi. TREDER Başkanı <strong class="text-white">Yalçın Şentürk</strong> de TREDER Ailesi'nin her geçen gün büyümesinin sektöre çok olumlu bir enerji yaydığını ve bundan hem sektörün hem de ülkenin pozitif olarak yararlanacağını dile getirdi.
            </p>
            
            <h2 class="text-2xl font-bold text-white mb-4 mt-8">Dünden Bugüne Özünlü Damper</h2>
            
            <p class="mb-6 text-lg text-gray-300 leading-relaxed">
                40 yılı aşkın süredir treyler ve üstyapı sektöründe faaliyet gösteren Özünlü Damper, TREDER'in 29'uncu üyesi oldu. Özünlü Damper Karoser ve Çelik Konst. San. Tic. Ltd. Şti. CEO'su Ufuk Özünlü, firmayla ilgili şu bilgileri verdi:
            </p>
            
            <div class="bg-ozunlu-900/50 border border-white/10 rounded-xl p-6 mb-6">
                <p class="mb-4 text-lg text-gray-300 leading-relaxed">
                    <strong class="text-white">1977 yılında</strong> İstanbul Okmeydanı'nda 30 metrekare bir atölyede faaliyetlerine başlamış olup, 1985 yılına kadar burada faaliyetini sürdürdü. 1985 yılında halen üretim tesislerinin bulunduğu İstanbul Habipler'e taşındı.
                </p>
                
                <p class="mb-4 text-lg text-gray-300 leading-relaxed">
                    Özünlü büyüme hedefleri doğrultusunda <strong class="text-white">1991 yılında</strong> mevcut fabrikasının bulunduğu araziyi satın alarak geleceğin lider üst yapı üreticisi olma yolunda ilk yatırımını yaptı. Bugün itibariyle 3 ayrı tesiste 7 bin metrekare kapalı, 23 bin metrekare açık alan olmak üzere toplam 30 bin metrekare alanda faaliyetlerini sürdürüyor.
                </p>
                
                <p class="mb-4 text-lg text-gray-300 leading-relaxed">
                    <strong class="text-white">2009 yılında</strong> Kalite Yönetimi anlayışı ile tüm süreçlerini yeniden düzenlerken yeni makina yatırımları ile üretim kapasitesini 2 katına çıkarmayı başardı.
                </p>
                
                <p class="mb-4 text-lg text-gray-300 leading-relaxed">
                    Firmamız <strong class="text-white">2005 yılından</strong> günümüze kadar olan süreçte uluslararası ticaretine de destek olacak şekilde Türkiye'de faaliyet gösteren 6 araç üreticisinin "onaylı üst yapı" tedarikçisi olarak sektörde bir ilki başardı.
                </p>
                
                <p class="text-lg text-gray-300 leading-relaxed">
                    Yatırımlarına ve Ar-Ge çalışmalarına her geçen gün yenisini ekleyen Özünlü yurtiçinde 81 ilde ve yurtdışında 40'dan fazla ülkede satış gerçekleştirerek, ülke ekonomisine katkıda bulunmaya ve istihdam yaratmaya devam ediyor.
                </p>
            </div>
            
            <div class="mt-8 pt-6 border-t border-white/10">
                <p class="text-sm text-gray-400">
                    Kaynak: <a href="https://treder.org.tr/ozunlu-damper-treder-ailesine-katildi" target="_blank" rel="noopener noreferrer" class="text-white hover:underline">TREDER - Özünlü Damper Treder Ailesi'ne Katıldı</a>
                </p>
            </div>
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
                    className="inline-flex items-center gap-2 text-white hover:text-white mb-8 transition-colors group"
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
                            className="prose prose-invert max-w-none"
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

