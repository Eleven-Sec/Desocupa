import { UserPlus, AlertCircle, Search, Users, FileCheck } from 'lucide-react';

const Protocol = () => {
  const steps = [
    {
      letter: 'A',
      icon: UserPlus,
      title: 'Alta / Activación',
      description: 'Te suscribes y registramos los datos de tu propiedad. Canal de contacto definido.',
    },
    {
      letter: 'B',
      icon: AlertCircle,
      title: 'Incidencia',
      description: 'Detectas un problema y contactas por el canal habilitado. Respuesta inmediata.',
    },
    {
      letter: 'C',
      icon: Search,
      title: 'Verificación',
      description: 'Clasificamos el caso y validamos la información. Identidad, propiedad, evidencias.',
    },
    {
      letter: 'D',
      icon: Users,
      title: 'Intervención',
      description: 'Activamos el protocolo especializado según la situación. Equipo en campo.',
    },
    {
      letter: 'E',
      icon: FileCheck,
      title: 'Seguimiento y Cierre',
      description: 'Recibes actualizaciones hasta la resolución del caso. Documentación final.',
    },
  ];

  return (
    <section className="py-20 bg-dark-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-orbitron text-3xl sm:text-4xl font-bold text-white mb-4">
            PROTOCOLO DE ACTUACIÓN
          </h2>
          <p className="text-gray-400 text-lg">
            No improvisas. Sigues un protocolo.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-cyan/30 to-transparent -translate-y-1/2" />

          {/* Steps */}
          <div className="grid md:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative flex flex-col items-center text-center group"
              >
                {/* Step Circle */}
                <div className="relative z-10 w-16 h-16 rounded-full bg-dark-card border-2 border-cyan flex items-center justify-center mb-4 group-hover:shadow-glow transition-shadow">
                  <span className="font-orbitron text-xl font-bold text-cyan">
                    {step.letter}
                  </span>
                </div>

                {/* Icon */}
                <div className="mb-3">
                  <step.icon className="w-6 h-6 text-cyan/70" />
                </div>

                {/* Content */}
                <h3 className="font-orbitron text-lg font-semibold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {step.description}
                </p>

                {/* Pulse Dot */}
                <div className="absolute top-0 right-1/4 w-3 h-3">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-cyan opacity-75 animate-ping" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Protocol;
