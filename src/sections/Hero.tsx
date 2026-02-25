import { Shield, MapPin, Headphones, Phone, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const trustBullets = [
    { icon: Shield, text: 'Intervención según protocolo' },
    { icon: MapPin, text: 'Cobertura nacional' },
    { icon: Headphones, text: 'Un solo punto de contacto' },
  ];

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80')`,
        }}
      >
        {/* Dark Overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/75 to-black/90" />
        {/* Cyan tint overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-cyan/5 via-transparent to-transparent" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-cyan/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-[120px] pb-24">
        <div className="max-w-3xl">
          {/* Tagline */}
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-cyan/10 border border-cyan/30 mb-8 animate-fade-in-up backdrop-blur-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan"></span>
            </span>
            <span className="text-cyan text-sm font-semibold tracking-widest uppercase">
              Desocupación Legal y Rápida
            </span>
          </div>

          {/* Main Title */}
          <h1 className="font-orbitron text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.15] mb-7 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Recupera tu vivienda con{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan to-cyan-dark">intervención legal</span> y mediación firme
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-gray-300/90 mb-10 leading-relaxed max-w-2xl animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Activamos un protocolo claro: verificación → intervención → seguimiento → cierre documentado.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <Button
              size="lg"
              className="bg-cyan text-black hover:bg-cyan-dark hover:shadow-glow-strong text-base font-bold px-10 py-7 rounded-xl transition-all hover:-translate-y-0.5"
              asChild
            >
              <a
                href="https://wa.me/34618762122"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp 24/7
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-cyan/60 text-cyan hover:bg-cyan/10 hover:border-cyan text-base font-bold px-10 py-7 rounded-xl backdrop-blur-sm transition-all hover:-translate-y-0.5"
              asChild
            >
              <a href="tel:+34618762122">
                <Phone className="w-5 h-5 mr-2" />
                Llamar ahora
              </a>
            </Button>
          </div>

          {/* Microcopy */}
          <p className="text-sm text-gray-500 mb-12 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            Cuéntanos tu caso en 60 segundos y te decimos la ruta más rápida.
          </p>

          {/* Trust Bullets - Enhanced */}
          <div className="flex flex-wrap gap-8 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            {trustBullets.map((bullet, index) => (
              <div key={index} className="flex items-center gap-3 text-gray-300 bg-white/5 backdrop-blur-sm px-4 py-2.5 rounded-full border border-white/10">
                <bullet.icon className="w-4 h-4 text-cyan" />
                <span className="text-sm font-medium">{bullet.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black via-black/80 to-transparent" />
    </section>
  );
};

export default Hero;
