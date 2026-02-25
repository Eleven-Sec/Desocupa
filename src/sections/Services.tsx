import { useState } from 'react';
import { Home, UserX, Zap, Scale, Check, X, Users, FileCheck } from 'lucide-react';

const Services = () => {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      id: 0,
      icon: Home,
      title: 'Desocupación de Okupas',
      subtitle: 'Ocupación ilegal',
      content: {
        what: 'La okupación es la entrada y permanencia en una vivienda sin consentimiento del propietario. Es un delito de usurpación que requiere actuación inmediata.',
        firstHours: [
          'No entres solo a la vivienda',
          'Documenta la situación con fotos/videos',
          'Contacta con nosotros inmediatamente',
          'No cortes suministros (es ilegal)',
        ],
        mistakes: [
          'Intentar desalojar por tu cuenta',
          'Amenazar o usar violencia',
          'Cambiar cerraduras con gente dentro',
          'Negociar sin asesoramiento',
        ],
        weDo: [
          'Verificación legal de la situación',
          'Intervención extrajudicial 24/7',
          'Mediación profesional con ocupantes',
          'Coordinación con fuerzas de seguridad',
          'Tramitación judicial si es necesario',
        ],
        youGet: [
          'Informe detallado del caso',
          'Seguimiento en tiempo real',
          'Recuperación de la posesión',
          'Documentación para futuras acciones',
        ],
      },
    },
    {
      id: 1,
      icon: UserX,
      title: 'Inquilinos Morosos',
      subtitle: 'Impago y precario',
      content: {
        what: 'Diferenciamos entre inquilinos con contrato (morosidad) y ocupantes sin título (precario). Cada caso tiene su ruta legal específica.',
        firstHours: [
          'Revisa el contrato de arrendamiento',
          'Documenta los impagos',
          'Consulta con nuestros abogados',
          'No realices cortes de suministros',
        ],
        mistakes: [
          'Confundir morosidad con okupación',
          'Intentar desahucio exprés sin abogado',
          'Aceptar pagos parciales sin acuerdo',
          'No documentar las comunicaciones',
        ],
        weDo: [
          'Análisis del contrato y situación',
          'Procedimiento de desahucio civil',
          'Negociación de abandono voluntario',
          'Reclamación de rentas impagadas',
          'Recuperación integral del inmueble',
        ],
        youGet: [
          'Estrategia legal personalizada',
          'Minimización de pérdidas económicas',
          'Recuperación de posesión',
          'Asesoramiento post-desalojo',
        ],
      },
    },
    {
      id: 2,
      icon: Zap,
      title: 'Desocupación Exprés',
      subtitle: 'Intervención urgente',
      content: {
        what: 'Para casos que requieren actuación inmediata. Nuestro equipo está disponible 24/7 para responder en el menor tiempo posible.',
        firstHours: [
          'Llama a nuestro número de urgencias',
          'Proporciona dirección y situación',
          'Ten a mano documentación de propiedad',
          'No entres en confrontación directa',
        ],
        mistakes: [
          'Perder tiempo buscando soluciones',
          'Esperar a que "se resuelva solo"',
          'Contratar servicios no profesionales',
          'No documentar la ocupación',
        ],
        weDo: [
          'Respuesta en menos de 2 horas',
          'Equipo especializado en campo',
          'Negociación inmediata',
          'Presencia disuasoria 24/7',
          'Activación de vía judicial paralela',
        ],
        youGet: [
          'Intervención prioritaria',
          'Equipo dedicado exclusivamente',
          'Actualizaciones cada 4 horas',
          'Resolución en tiempo récord',
        ],
      },
    },
    {
      id: 3,
      icon: Scale,
      title: 'Desalojo y Recuperación',
      subtitle: 'Vía judicial',
      content: {
        what: 'El desalojo judicial es el procedimiento legal para recuperar la posesión cuando la vía extrajudicial no es viable o ha fracasado.',
        firstHours: [
          'Reunir toda la documentación',
          'Contrato de propiedad o escritura',
          'Denuncia previa si existe',
          'Contactar con nuestro departamento legal',
        ],
        mistakes: [
          'Presentar demanda sin abogado',
          'No seguir el procedimiento correcto',
          'Omitir requisitos procesales',
          'Desconocer los plazos legales',
        ],
        weDo: [
          'Estudio gratuito del caso',
          'Redacción de demanda judicial',
          'Representación procesal completa',
          'Solicitud de medidas cautelares',
          'Ejecución de sentencia',
        ],
        youGet: [
          'Abogado especializado asignado',
          'Informes de seguimiento del proceso',
          'Coordinación con comisión judicial',
          'Recuperación con respaldo legal',
        ],
      },
    },
  ];

  const currentService = services[activeService];

  return (
    <section id="servicios" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-orbitron text-3xl sm:text-4xl font-bold text-white mb-4">
            NUESTROS SERVICIOS
          </h2>
          <p className="text-gray-400 text-lg">
            Soluciones integrales para cada situación
          </p>
        </div>

        {/* Service Tabs */}
        <div className="grid lg:grid-cols-4 gap-4 mb-8">
          {services.map((service) => (
            <button
              key={service.id}
              onClick={() => setActiveService(service.id)}
              className={`flex items-center gap-3 p-4 rounded-xl border transition-all duration-300 text-left ${
                activeService === service.id
                  ? 'bg-cyan/10 border-cyan shadow-glow'
                  : 'bg-dark-card border-dark-border hover:border-cyan/30'
              }`}
            >
              <service.icon
                className={`w-6 h-6 ${
                  activeService === service.id ? 'text-cyan' : 'text-gray-400'
                }`}
              />
              <div>
                <h3 className="font-orbitron text-sm font-semibold text-white">
                  {service.title}
                </h3>
                <p className="text-xs text-gray-500">{service.subtitle}</p>
              </div>
            </button>
          ))}
        </div>

        {/* Service Content */}
        <div className="bg-dark-card border border-dark-border rounded-xl p-6 lg:p-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left Column */}
            <div>
              <h3 className="font-orbitron text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <currentService.icon className="w-8 h-8 text-cyan" />
                {currentService.title}
              </h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                {currentService.content.what}
              </p>

              {/* What to do / Not to do */}
              <div className="space-y-4">
                <div>
                  <h4 className="text-cyan font-semibold mb-2 flex items-center gap-2">
                    <Check className="w-4 h-4" />
                    Qué hacer
                  </h4>
                  <ul className="space-y-1">
                    {currentService.content.firstHours.map((item, i) => (
                      <li key={i} className="text-sm text-gray-400 flex items-start gap-2">
                        <span className="text-cyan mt-1">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-red-400 font-semibold mb-2 flex items-center gap-2">
                    <X className="w-4 h-4" />
                    Errores a evitar
                  </h4>
                  <ul className="space-y-1">
                    {currentService.content.mistakes.map((item, i) => (
                      <li key={i} className="text-sm text-gray-400 flex items-start gap-2">
                        <span className="text-red-400 mt-1">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div>
              <div className="mb-6">
                <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                  <Users className="w-5 h-5 text-cyan" />
                  Qué hacemos nosotros
                </h4>
                <ul className="space-y-2">
                  {currentService.content.weDo.map((item, i) => (
                    <li
                      key={i}
                      className="text-sm text-gray-300 bg-black/50 p-3 rounded-lg border border-dark-border"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                  <FileCheck className="w-5 h-5 text-cyan" />
                  Qué recibes
                </h4>
                <ul className="space-y-2">
                  {currentService.content.youGet.map((item, i) => (
                    <li
                      key={i}
                      className="text-sm text-gray-300 bg-black/50 p-3 rounded-lg border border-dark-border"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
