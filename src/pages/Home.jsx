import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Commitment from '../components/Commitment';
import MapSection from '../components/MapSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import ScrollProgress from '../components/ScrollProgress';
import FloatingPhone from '../components/FloatingPhone';

export default function Home() {
  return (
    <div className="min-h-screen">
      <ScrollProgress />
      <Navbar />
      <Hero />
      <Services />
      <Commitment />
      <MapSection />
      <ContactSection />
      <Footer />
      <FloatingPhone />
    </div>
  );
}