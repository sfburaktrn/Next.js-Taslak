import LifeAtOzunlu from '@/components/career/LifeAtOzunlu';
import JobBoard from '@/components/career/JobBoard';

export default function CareerPage() {
    return (
        <main className="min-h-screen bg-ozunlu-950 pt-24">
            <div className="container mx-auto px-4 text-center mb-12">
                <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
                    YETENEK <span className="text-primary">YÖNETİMİ</span>
                </h1>
                <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                    Büyük hayaller kuran, tutkulu ve yetenekli profesyoneller için
                    eşsiz bir kariyer yolculuğu sunuyoruz.
                </p>
            </div>

            <LifeAtOzunlu />
            <JobBoard />
        </main>
    );
}
