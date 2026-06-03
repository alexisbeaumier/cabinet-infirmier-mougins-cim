import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import useScrollReveal from './useScrollReveal';

const hours = [
  { day: 'Lundi – Vendredi', time: '8h00 – 19h00' },
  { day: 'Samedi', time: '9h00 – 12h00' },
  { day: 'Dimanche', time: 'Fermé' },
];

export default function ContactSection() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const { ref, isVisible } = useScrollReveal();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);

    const formData = new FormData(e.target);

    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString(),
      });
      setSent(true);
    } catch {
      setSent(true);
    }
    setSending(false);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-cim-mist/40">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
      >


        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-3">
            {sent ? (
              <div className="bg-white rounded-3xl p-10 shadow-sm text-center">
                <div className="w-16 h-16 rounded-full bg-cim-mist flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-8 h-8 text-cim-pine" />
                </div>
                <h3 className="font-heading font-bold text-2xl text-cim-deep mb-3">
                  Message envoyé !
                </h3>
                <p className="text-cim-deep/70 text-lg">
                  Nous vous rappellerons dans les plus brefs délais.
                </p>
              </div>
            ) : (
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                onSubmit={handleSubmit}
                className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-10 shadow-sm space-y-6"
              >
                <input type="hidden" name="form-name" value="contact" />

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="nom" className="text-cim-deep font-medium">
                      Nom complet *
                    </Label>
                    <Input
                      id="nom"
                      name="nom"
                      required
                      placeholder="Votre nom"
                      className="h-12 rounded-xl border-cim-deep/10 focus:border-cim-pine"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="telephone" className="text-cim-deep font-medium">
                      Téléphone *
                    </Label>
                    <Input
                      id="telephone"
                      name="telephone"
                      type="tel"
                      required
                      placeholder="06 xx xx xx xx"
                      className="h-12 rounded-xl border-cim-deep/10 focus:border-cim-pine"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-cim-deep font-medium">
                    Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="votre@email.fr"
                    className="h-12 rounded-xl border-cim-deep/10 focus:border-cim-pine"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="adresse" className="text-cim-deep font-medium">
                    Adresse d'intervention (facultatif)
                  </Label>
                  <Input
                    id="adresse"
                    name="adresse"
                    placeholder="Votre adresse à Mougins"
                    className="h-12 rounded-xl border-cim-deep/10 focus:border-cim-pine"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-cim-deep font-medium">
                    Message *
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Décrivez brièvement votre besoin..."
                    className="rounded-xl border-cim-deep/10 focus:border-cim-pine resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={sending}
                  className="w-full h-14 bg-cim-pine hover:bg-cim-deep text-white text-lg font-semibold rounded-full transition-all duration-300 flex items-center justify-center gap-3"
                >
                  <Send className="w-5 h-5" />
                  {sending ? 'Envoi en cours...' : 'Envoyer le message'}
                </Button>
              </form>
            )}
          </div>

          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-3xl p-8 shadow-sm">
              <a
                href="tel:+33612345678"
                className="flex items-center gap-4 p-4 rounded-2xl bg-cim-mist/50 hover:bg-cim-mist transition-colors group"
              >
                <div className="w-14 h-14 rounded-2xl bg-cim-pine flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-cim-deep/60">Appelez-nous</p>
                  <p className="font-heading font-bold text-xl text-cim-deep">06 12 34 56 78</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 mt-3">
                <div className="w-14 h-14 rounded-2xl bg-cim-mist flex items-center justify-center">
                  <Mail className="w-6 h-6 text-cim-pine" />
                </div>
                <div>
                  <p className="text-sm text-cim-deep/60">Email</p>
                  <a
                    href="mailto:contact@cabinet-infirmier-mougins.fr"
                    className="font-medium text-cim-deep hover:text-cim-pine transition-colors text-sm"
                  >
                    contact@cabinet-infirmier-mougins.fr
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 mt-3">
                <div className="w-14 h-14 rounded-2xl bg-cim-mist flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-cim-pine" />
                </div>
                <div>
                  <p className="text-sm text-cim-deep/60">Adresse</p>
                  <p className="font-medium text-cim-deep text-sm">
                    1279 bd Georges Courteline<br />
                    06250 Mougins
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <Clock className="w-5 h-5 text-cim-pine" />
                <h3 className="font-heading font-semibold text-cim-deep text-lg">Horaires</h3>
              </div>
              <div className="space-y-3">
                {hours.map((h) => (
                  <div key={h.day} className="flex justify-between items-center py-2 border-b border-cim-deep/5 last:border-0">
                    <span className="text-cim-deep/70">{h.day}</span>
                    <span className={`font-semibold ${h.time === 'Fermé' ? 'text-cim-deep/40' : 'text-cim-deep'}`}>
                      {h.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}