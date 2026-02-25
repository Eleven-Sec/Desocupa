import { Phone, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CTAFinal = () => {
  return (
    <section
      id="contacto"
      className="relative py-28 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-card via-black to-black" />

      {/* Decorative Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-cyan/8 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-cyan/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-cyan/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Tagline */}
        <div className="inline-flex items-center gap-2 mb-6">
          <span className="h-px w-10 bg-gradient-to-r from-transparent to-cyan/50" />
          <span className="text-cyan/70 text-sm font-medium tracking-widest uppercase">
            Contacto
          </span>
          <span className="h-px w-10 bg-gradient-to-l from-transparent to-cyan/50" />
        </div>

        <h2 className="font-orbitron text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          ¿Te han ocupado o<br />te están impagando?
        </h2>
        <p className="text-xl text-gray-300/90 mb-12 max-w-2xl mx-auto">
          Te decimos la ruta más rápida en una llamada. Disponibles 24/7.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-5 justify-center mb-10">
          <Button
            size="lg"
            className="bg-cyan text-black hover:bg-cyan-dark hover:shadow-glow-strong text-base font-bold px-12 py-8 rounded-xl transition-all hover:-translate-y-1"
            asChild
          >
            <a
              href="https://wa.me/34618762122"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="w-6 h-6 mr-3" />
              WhatsApp 24/7
            </a>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-2 border-cyan/60 text-cyan hover:bg-cyan/10 hover:border-cyan text-base font-bold px-12 py-8 rounded-xl backdrop-blur-sm transition-all hover:-translate-y-1"
            asChild
          >
            <a href="tel:+34618762122">
              <Phone className="w-6 h-6 mr-3" />
              Llamar ahora
            </a>
          </Button>
        </div>

        {/* Trust Note */}
        <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10">
          <span className="w-2 h-2 rounded-full bg-cyan animate-pulse" />
          <p className="text-sm text-gray-400">
            Primera consulta gratuita. Sin compromiso.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTAFinal;
