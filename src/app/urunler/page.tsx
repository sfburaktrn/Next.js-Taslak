import View360 from '@/components/products/View360';
import Configurator from '@/components/products/Configurator';
import TechSpecs from '@/components/products/TechSpecs';

export default function ProductsPage() {
    return (
        <main className="pt-24 min-h-screen bg-ozunlu-950">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-black text-white mb-4">
                        İNTERAKTİF <span className="text-primary">DENEYİM</span>
                    </h1>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Klasik katalogların ötesine geçin. Özünlü Damper&apos;in mühendislik harikası ürünlerini
                        360 derece inceleyin ve projenize en uygun konfigürasyonu kendiniz oluşturun.
                    </p>
                </div>

                {/* Interactive Area */}
                <div className="flex flex-col lg:flex-row gap-8 mb-16">
                    <div className="w-full lg:w-2/3">
                        <View360 />
                    </div>
                    <div className="w-full lg:w-1/3">
                        <Configurator />
                    </div>
                </div>

                {/* Specs */}
                <TechSpecs />
            </div>
        </main>
    );
}
