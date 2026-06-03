import { MapPin, Navigation } from 'lucide-react';
import useScrollReveal from './useScrollReveal';

export default function MapSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="localisation" className="py-24 md:py-32 bg-white">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
      >
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-cim-pine font-semibold text-sm tracking-widest uppercase">
            Localisation
          </span>
          <h2 className="mt-4 font-heading font-bold text-3xl md:text-4xl text-cim-deep leading-tight">
            Nous intervenons <span className="text-cim-pine">exclusivement à Mougins</span>
          </h2>
          <p className="mt-4 text-lg text-cim-deep/70">
            Notre connaissance du terrain nous permet d'intervenir rapidement à votre domicile, 
            partout dans Mougins et ses alentours proches.
          </p>
        </div>

        <div className="relative rounded-3xl overflow-hidden shadow-xl">
          <iframe
            title="Cabinet Infirmier Mougins - Google Maps"
            src="https://maps.google.com/maps?width=100%&height=100%&hl=fr&q=1279+boulevard+Georges+Courteline,+06250+Mougins&t=&z=14&ie=UTF8&iwloc=B&output=embed"
            className="w-full h-[400px] md:h-[500px] border-0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
            allowFullScreen
          />

          <div className="absolute bottom-4 left-4 right-4 md:left-6 md:bottom-6 md:right-auto">
            <div className="bg-white/95 backdrop-blur-md rounded-2xl p-5 shadow-lg max-w-sm">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-cim-mist flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-cim-pine" />
                </div>
                <div>
                  <h3 className="font-semibold text-cim-deep">Cabinet Infirmier Mougins</h3>
                  <p className="text-sm text-cim-deep/60 mt-1">
                    1279 boulevard Georges Courteline<br />
                    06250 Mougins
                  </p>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=1279+boulevard+Georges+Courteline+06250+Mougins"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-cim-pine text-sm font-medium mt-2 hover:underline"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    Itinéraire
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}