import { useEffect, useState } from 'react';

import { useLocation, Link } from 'react-router-dom';
import { Phone, ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import ScrollHint from '../components/ScrollHint';
import Services, { careItems } from '../components/Services';
import ServiceModal from '../components/ServiceModal';
import Footer from '../components/Footer';
import ScrollProgress from '../components/ScrollProgress';
import FloatingPhone from '../components/FloatingPhone';

export default function NosSoins() {
  const location = useLocation();
  const [autoOpen, setAutoOpen] = useState(null);

  useEffect(() => {
    document.title = "Soins Infirmiers à Domicile Mougins — Prise de Sang, Pansements | CIM";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) { meta = document.createElement('meta'); meta.name = 'description'; document.head.appendChild(meta); }
    meta.content = "Soins infirmiers à domicile à Mougins (06250) : pansements, injections, prélèvements sanguins, surveillance post-opératoire. Cabinet Infirmier Mougins (CIM).";
  }, []);

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const found = careItems.find((c) => c.id === id);
      if (found) setAutoOpen(found);
    }
  }, [location.hash]);

  return (
    <div className="min-h-screen">
      <ScrollProgress />
      <Navbar />

      {/* Page header */}
      <div className="pt-28 pb-16 bg-cim-mist/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-cim-pine font-semibold text-sm tracking-widest uppercase">Cabinet Infirmier Mougins</span>
          <h1 className="mt-4 font-heading font-bold text-4xl md:text-5xl text-cim-deep leading-tight">
            Nos soins <span className="text-cim-pine">à domicile</span>
          </h1>
          <p className="mt-6 text-lg text-cim-deep/70 max-w-2xl mx-auto">
            Une prise en charge complète, humaine et professionnelle, réalisée directement 
            à votre domicile sur l'ensemble de la commune de Mougins.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+33612345678"
              className="inline-flex items-center justify-center gap-3 bg-cim-pine text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-cim-deep transition-all duration-300"
            >
              <Phone className="w-5 h-5" />
              Prendre rendez-vous
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-3 bg-white text-cim-deep border-2 border-cim-deep/15 px-8 py-4 rounded-full text-lg font-semibold hover:border-cim-pine hover:text-cim-pine transition-all duration-300"
            >
              Nous écrire
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
          <div className="mt-10 flex justify-center">
            <ScrollHint />
          </div>
        </div>
      </div>

      <Services />
      {autoOpen && <ServiceModal item={autoOpen} onClose={() => setAutoOpen(null)} />}
      <Footer />
      <FloatingPhone />
    </div>
  );
}