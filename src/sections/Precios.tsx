import { Clock, MapPin, Home, ArrowRight, Calculator } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Precios = () => {
  const factors = [
    { icon: Clock, title: 'Urgencia', desc: 'Casos exprés tienen coste adicional' },
    { icon: MapPin, title: 'Ubicación', desc: 'Zonas remotas pueden tener suplemento' },
    { icon: Home, title: 'Tipo de inmueble', desc: 'Vivienda, local, nave industrial...' },
  ];

  const comparison = [
    { feature: 'Pago puntual', oneTime: 'A consultar', pack: 'Incluido' },
    { feature: 'Honorarios abogado', oneTime: 'A consultar', pack: 'Incluido' },
    { feature: 'Intervención 24/7', oneTime: 'A consultar', pack: 'Incluido' },
    { feature: 'Reparaciones básicas', oneTime: 'A consultar', pack: 'Incluido' },
    { feature: 'Tiempo medio', oneTime: '6-18 meses', pack: '24-72h extrajudicial' },
  ];

  return (
    <section id="precios" className="py-24 bg-black relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cyan/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="h-px w-8 bg-gradient-to-r from-transparent to-cyan/50" />
            <span className="text-cyan/70 text-sm font-medium tracking-widest uppercase">
              Tarifas
            </span>
            <span className="h-px w-8 bg-gradient-to-l from-transparent to-cyan/50" />
          </div>
          <h2 className="font-orbitron text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5">
            PRECIOS TRANSPARENTES
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Cuánto cuesta y qué determina el precio
          </p>
        </div>

        {/* Factors - Redesigned as pills */}
        <div className="mb-16">
          <div className="flex flex-wrap justify-center gap-4">
            {factors.map((factor, i) => (
              <div
                key={i}
                className="group bg-dark-card/80 backdrop-blur border border-dark-border hover:border-cyan/40 rounded-2xl px-6 py-5 flex items-center gap-4 transition-all duration-300 hover:shadow-glow hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan/20 to-cyan/5 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <factor.icon className="w-6 h-6 text-cyan" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-0.5">{factor.title}</h4>
                  <p className="text-sm text-gray-500">{factor.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Comparison Table - Enhanced */}
        <div className="mb-16">
          <div className="bg-gradient-to-b from-dark-card/90 to-dark-card border border-dark-border/60 rounded-3xl overflow-hidden shadow-2xl">
            {/* Header */}
            <div className="grid grid-cols-3 gap-4 p-6 bg-gradient-to-r from-black/60 via-black/40 to-black/60 border-b border-dark-border/60">
              <div className="text-gray-500 text-sm font-medium">Concepto</div>
              <div className="text-center text-gray-500 text-sm font-medium">Pago puntual</div>
              <div className="text-center text-cyan text-sm font-medium">Pack Prevención</div>
            </div>

            {/* Rows */}
            {comparison.map((row, i) => (
              <div
                key={i}
                className="grid grid-cols-3 gap-4 p-5 border-b border-dark-border/40 last:border-b-0 hover:bg-white/[0.02] transition-colors"
              >
                <div className="text-gray-300 font-medium">{row.feature}</div>
                <div className="text-center text-gray-500">{row.oneTime}</div>
                <div className="text-center">
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-cyan/10 text-cyan text-sm font-semibold">
                    {row.pack}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA - Enhanced */}
        <div className="text-center">
          <div className="inline-flex flex-col items-center gap-4">
            <p className="text-gray-500 text-sm">¿Necesitas una evaluación personalizada?</p>
            <Button
              size="lg"
              className="bg-cyan text-black hover:bg-cyan-dark hover:shadow-glow-strong font-semibold px-8 py-6 rounded-xl"
              asChild
            >
              <a
                href="https://wa.me/34608294503"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Calculator className="w-5 h-5 mr-2" />
                Evaluación rápida gratis
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Precios;
