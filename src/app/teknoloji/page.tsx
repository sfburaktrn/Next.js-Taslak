import VirtualTour from '@/components/technology/VirtualTour';
import GreenReport from '@/components/technology/GreenReport';
import RDLab from '@/components/technology/RDLab';

export default function TechnologyPage() {
    return (
        <main className="min-h-screen bg-ozunlu-950">
            <VirtualTour />
            <GreenReport />
            <RDLab />
        </main>
    );
}
