import { Home, UserX, Zap, ArrowRight } from 'lucide-react';

const CaseSelector = () => {
  const cases = [
    {
      icon: Home,
      title: 'Okupación / Intrusión',
      description:
        'Entrada sin consentimiento. Vivienda vacía, segunda residencia, local, nave...',
      cta: 'Ver cómo actuamos',
      href: '#servicios',
      gradient: 'from-cyan/20 to-cyan/5',
    },
    {
      icon: UserX,
      title: 'Inquilino moroso / Precario',
      description:
        'Dejó de pagar / se niega a salir / conflicto enquistado',
      cta: 'Ver solución para alquiler',
      href: '#servicios',
      gradient: 'from-cyan/15 to-transparent',
    },
    {
      icon: Zap,
      title: 'Urgencia (Exprés)',
      description: 'Necesitas actuar hoy. Intervención inmediata 24/7.',
      cta: 'Activar equipo',
      href: 'https://wa.me/34608294503',
      external: true,
      gradient: 'from-cyan/25 to-cyan/10',
    },
  ];

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-cyan/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="h-px w-8 bg-gradient-to-r from-transparent to-cyan/50" />
            <span className="text-cyan/70 text-sm font-medium tracking-widest uppercase">
              Identifica tu caso
            </span>
            <span className="h-px w-8 bg-gradient-to-l from-transparent to-cyan/50" />
          </div>
          <h2 className="font-orbitron text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5">
            ¿QUÉ CASO TIENES?
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Selecciona tu situación y te mostramos la solución
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {cases.map((caseItem, index) => (
            <a
              key={index}
              href={caseItem.href}
              target={caseItem.external ? '_blank' : undefined}
              rel={caseItem.external ? 'noopener noreferrer' : undefined}
              className="group relative bg-gradient-to-b from-dark-card to-dark-card/80 border border-dark-border/60 hover:border-cyan/40 rounded-3xl p-8 transition-all duration-500 hover:shadow-glow hover:-translate-y-2 overflow-hidden"
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${caseItem.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan/20 to-cyan/5 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  <caseItem.icon className="w-8 h-8 text-cyan" />
                </div>

                {/* Title */}
                <h3 className="font-orbitron text-xl font-bold text-white mb-3 group-hover:text-cyan transition-colors">
                  {caseItem.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {caseItem.description}
                </p>

                {/* CTA */}
                <div className="flex items-center gap-2 text-cyan font-semibold">
                  <span className="group-hover:mr-1 transition-all">{caseItem.cta}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>

              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-cyan/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-tr-3xl" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseSelector;
