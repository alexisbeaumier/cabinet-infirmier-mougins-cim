import { Phone } from 'lucide-react';

export default function FloatingPhone() {
  return (
    <a
      href="tel:+33612345678"
      className="fixed bottom-6 right-6 z-50 md:hidden flex items-center justify-center w-14 h-14 rounded-full bg-orange-500 text-white shadow-lg hover:scale-110 transition-transform duration-200 animate-pulse-ring-terracotta"
      aria-label="Appeler le cabinet"
    >
      <Phone className="w-6 h-6" />
    </a>
  );
}