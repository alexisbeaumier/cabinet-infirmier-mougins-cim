import { Phone, X } from 'lucide-react';

export default function ServiceModal({ item, onClose }) {
  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
      onClick={onClose}>
      
      <div
        className="bg-white rounded-3xl shadow-2xl max-w-xl w-full overflow-hidden"
        style={{ animation: 'modalIn 0.25s ease forwards' }}
        onClick={(e) => e.stopPropagation()}>
        
        <div className="relative">
          <img src="https://media.base44.com/images/public/6a2091c60722d8d712f983eb/43199e1da_image_2026-06-08_154053376.png" alt={item.label} className="w-full h-52 object-cover" />
          <button
            onClick={onClose}
            className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/90 backdrop-blur flex items-center justify-center shadow hover:bg-white transition-colors">
            
            <X className="w-4 h-4 text-cim-deep" />
          </button>
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent" />
        </div>
        <div className="px-8 pt-2 pb-8">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-cim-mist flex items-center justify-center flex-shrink-0">
              <item.icon className="w-5 h-5 text-cim-pine" />
            </div>
            <h3 className="font-heading font-bold text-xl text-cim-deep">{item.label}</h3>
          </div>
          <p className="text-cim-deep/70 leading-relaxed mb-6">{item.detail}</p>
          <a
            href="tel:+33612345678"
            className="inline-flex items-center gap-2 bg-cim-pine text-white px-6 py-3 rounded-full font-semibold hover:bg-cim-deep transition-all duration-200">
            
            <Phone className="w-4 h-4" />
            Prendre rendez-vous
          </a>
        </div>
      </div>
      <style>{`
        @keyframes modalIn {
          from { opacity: 0; transform: scale(0.95) translateY(10px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }
      `}</style>
    </div>);

}