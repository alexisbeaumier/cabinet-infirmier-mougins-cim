import Navbar from '../components/Navbar';
import ScrollHint from '../components/ScrollHint';
import ContactSection from '../components/ContactSection';
import MapSection from '../components/MapSection';
import Footer from '../components/Footer';
import ScrollProgress from '../components/ScrollProgress';
import FloatingPhone from '../components/FloatingPhone';

export default function Contact() {
  return (
    <div className="min-h-screen">
      <ScrollProgress />
      <Navbar />

      {/* Page header */}
      <div className="pt-28 pb-12 bg-cim-mist/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-cim-pine font-semibold text-sm tracking-widest uppercase">Nous contacter</span>
          <h1 className="mt-4 font-heading font-bold text-4xl md:text-5xl text-cim-deep leading-tight">
            Prenez <span className="text-cim-pine">rendez-vous</span>
          </h1>
          <p className="mt-6 text-lg text-cim-deep/70 max-w-2xl mx-auto">
            Par téléphone, email ou formulaire — nous vous répondons dans les plus brefs délais.
          </p>
          <div className="mt-8 flex justify-center">
            <ScrollHint />
          </div>
        </div>
      </div>

      <ContactSection />
      <MapSection />
      <Footer />
      <FloatingPhone />
    </div>
  );
}