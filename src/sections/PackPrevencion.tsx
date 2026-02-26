import { Check, Shield, Phone, FileText, Lock, Sparkles, Home, Building2, Key } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PackPrevencion = () => {
  const benefits = [
    'Cuota mensual predecible',
    'Acceso directo a equipo especializado',
    'Proceso guiado paso a paso',
    'Rapidez + tranquilidad',
    'Aplicable a vivienda y alquiler',
  ];

  const includes = [
    { icon: FileText, text: 'Defensa y asesoramiento legal' },
    { icon: Shield, text: 'Intervención extrajudicial 24/7' },
    { icon: Lock, text: 'Control de accesos y prevención' },
    { icon: Home, text: 'Reparaciones básicas y limpieza' },
    { icon: Phone, text: 'Cobertura nacional 24/7' },
  ];

  const forWho = [
    { icon: Home, title: 'Segunda residencia', desc: 'Tranquilidad todo el año aunque no estés.' },
    { icon: Building2, title: 'Inversores', desc: 'Coste fijo mensual por activo. Menos riesgo.' },
    { icon: Key, title: 'Arrendadores', desc: 'Soporte ante incidencias + canal único.' },
  ];

  return (
    <section id="pack-prevencion" className="py-24 bg-gradient-to-b from-black via-dark-card/50 to-dark-card relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-cyan/3 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-cyan/10 border border-cyan/30 mb-6 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-cyan" />
            <span className="text-cyan text-sm font-semibold tracking-widest uppercase">
              Servicio Estrella
            </span>
          </div>
          <h2 className="font-orbitron text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5">
            PACK PREVENCIÓN ANTI-OKUPACIÓN
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            No es un seguro: es una <span className="text-cyan font-semibold">suscripción con intervención y protocolo</span>.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Info */}
          <div className="space-y-8">
            {/* Value Proposition */}
            <div className="bg-gradient-to-br from-dark-card to-dark-card/60 border border-dark-border/60 rounded-3xl p-8 hover:border-cyan/20 transition-colors">
              <h3 className="font-orbitron text-xl font-bold text-white mb-4">
                Propuesta de Valor
              </h3>
              <p className="text-gray-300 leading-relaxed text-lg">
                Pagas una cuota fija y, si pasa algo, activas un equipo con un plan claro, sin sustos.
              </p>
            </div>

            {/* Benefits */}
            <div>
              <h3 className="font-orbitron text-lg font-bold text-white mb-5 flex items-center gap-2">
                <span className="w-8 h-px bg-cyan/50" />
                Beneficios
              </h3>
              <ul className="space-y-4">
                {benefits.map((benefit, i) => (
                  <li key={i} className="flex items-center gap-4 text-gray-300 group">
                    <div className="w-6 h-6 rounded-full bg-cyan/10 flex items-center justify-center flex-shrink-0 group-hover:bg-cyan/20 transition-colors">
                      <Check className="w-3.5 h-3.5 text-cyan" />
                    </div>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>

            {/* What Includes */}
            <div>
              <h3 className="font-orbitron text-lg font-bold text-white mb-5 flex items-center gap-2">
                <span className="w-8 h-px bg-cyan/50" />
                Qué incluye
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {includes.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 bg-dark-card/60 p-4 rounded-2xl border border-dark-border/40 hover:border-cyan/20 transition-all group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-cyan/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <item.icon className="w-5 h-5 text-cyan" />
                    </div>
                    <span className="text-sm text-gray-300">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Pricing Card */}
          <div className="lg:sticky lg:top-28">
            <div className="relative bg-gradient-to-b from-dark-card to-black border-2 border-cyan/60 rounded-3xl p-10 shadow-glow overflow-hidden">
              {/* Glow effect */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-32 bg-cyan/10 blur-[60px] pointer-events-none" />

              {/* Content */}
              <div className="relative z-10">
                {/* Price */}
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center px-6 py-3 rounded-2xl bg-cyan/10 border border-cyan/30 mb-4">
                    <span className="font-orbitron text-2xl font-bold text-white">Precio a consultar</span>
                  </div>
                  <p className="text-cyan/80 text-sm">
                    Cuota mensual predecible vs miles € en caso puntual
                  </p>
                </div>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-cyan/30 to-transparent mb-8" />

                {/* Features */}
                <ul className="space-y-4 mb-10">
                  {[
                    'Sin permanencia',
                    'Cancela cuando quieras',
                    'Hasta 2 incidencias/año incluidas',
                    'Respuesta en menos de 2h',
                  ].map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-300">
                      <div className="w-5 h-5 rounded-full bg-cyan/20 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-cyan" />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button
                  size="lg"
                  className="w-full bg-cyan text-black hover:bg-cyan-dark hover:shadow-glow-strong font-bold py-7 rounded-xl text-base transition-all hover:-translate-y-0.5"
                  asChild
                >
                  <a
                    href="https://wa.me/34608294503"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Contratar Pack Prevención
                  </a>
                </Button>

                <p className="text-center text-xs text-gray-500 mt-5">
                  Te contactaremos para explicarte los detalles y adaptar el servicio a tus necesidades.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* For Who Section */}
        <div className="mt-20">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="h-px w-8 bg-gradient-to-r from-transparent to-cyan/50" />
              <span className="text-cyan/70 text-sm font-medium tracking-widest uppercase">
                Perfiles
              </span>
              <span className="h-px w-8 bg-gradient-to-l from-transparent to-cyan/50" />
            </div>
            <h3 className="font-orbitron text-2xl font-bold text-white">
              ¿Para quién es?
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {forWho.map((item, i) => (
              <div
                key={i}
                className="group bg-gradient-to-b from-dark-card/80 to-dark-card/40 border border-dark-border/60 rounded-3xl p-8 text-center hover:border-cyan/30 transition-all hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan/20 to-cyan/5 flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform">
                  <item.icon className="w-7 h-7 text-cyan" />
                </div>
                <h4 className="font-orbitron text-lg font-bold text-white mb-3">
                  {item.title}
                </h4>
                <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PackPrevencion;
