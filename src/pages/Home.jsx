import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ServicesTeaser from '../components/ServicesTeaser';
import Commitment from '../components/Commitment';
import Testimonials from '../components/Testimonials';
import FaqSection from '../components/FaqSection';
import MapSection from '../components/MapSection';
import Footer from '../components/Footer';
import ScrollProgress from '../components/ScrollProgress';
import FloatingPhone from '../components/FloatingPhone';
import CustomCursor from '../components/CustomCursor';

export default function Home() {
  return (
    <div className="min-h-screen">
      <ScrollProgress />
      <Navbar />
      <Hero />
      <ServicesTeaser />
      <Commitment />
      <Testimonials />
      <FaqSection />
      <MapSection />
      <Footer />
      <FloatingPhone />
      <CustomCursor />
    </div>
  );
}