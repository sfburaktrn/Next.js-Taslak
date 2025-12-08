import BlogGrid from '@/components/media/BlogGrid';
import VideoGallery from '@/components/media/VideoGallery';

export default function MediaPage() {
    return (
        <main className="min-h-screen bg-ozunlu-950 pt-24">
            <div className="container mx-auto px-4 text-center mb-12">
                <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
                    MEDYA <span className="text-primary">MERKEZİ</span>
                </h1>
                <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                    Sektörel haberler, teknolojik gelişmeler ve Özünlü dünyasından en son güncellemeler.
                </p>
            </div>

            <BlogGrid />
            <VideoGallery />
        </main>
    );
}
