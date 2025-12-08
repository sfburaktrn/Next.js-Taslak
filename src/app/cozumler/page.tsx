import SectorFilter from '@/components/solutions/SectorFilter';
import SuccessStories from '@/components/solutions/SuccessStories';

export default function SolutionsPage() {
    return (
        <main className="min-h-screen bg-ozunlu-950 pt-24">
            <div className="container mx-auto px-4 text-center mb-12">
                <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
                    SİZİ <span className="text-primary">ANLIYORUZ</span>
                </h1>
                <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                    Her sektörün ihtiyaçları farklıdır. Özünlü Damper olarak, işinizin zorluklarını analiz ediyor
                    ve size en uygun çözümleri mühendislik hassasiyetiyle sunuyoruz.
                </p>
            </div>

            <SectorFilter />
            <SuccessStories />
        </main>
    );
}
