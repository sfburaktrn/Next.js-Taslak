import VisionManifesto from '@/components/corporate/VisionManifesto';
import LeaderMessage from '@/components/corporate/LeaderMessage';
import Timeline from '@/components/corporate/Timeline';
import FacilitiesMap from '@/components/corporate/FacilitiesMap';

export default function CorporatePage() {
    return (
        <main className="pt-24 min-h-screen bg-ozunlu-950">
            <VisionManifesto />
            <LeaderMessage />
            <Timeline />
            <FacilitiesMap />
        </main>
    );
}
