import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';

const FAQ = () => {
  const faqCategories = [
    {
      category: 'Sobre el proceso',
      questions: [
        {
          q: '¿Qué hago si acabo de descubrir que me han ocupado?',
          a: 'Lo primero es no entrar en pánico ni intentar resolverlo por tu cuenta. Documenta la situación con fotos desde fuera, verifica que realmente hay ocupantes, y contacta con nosotros inmediatamente. Nunca cortes suministros ni uses violencia, ya que eso podría volverse en tu contra legalmente.',
        },
        {
          q: '¿Qué documentación necesito?',
          a: 'Necesitaremos la escritura de propiedad o documento que acredite tu titularidad, tu DNI, y cualquier documentación relacionada con la ocupación (denuncia previa, fotos, testimonios de vecinos, etc.) Si es un caso de inquilino moroso, también el contrato de arrendamiento.',
        },
        {
          q: '¿Cuánto tardáis en empezar?',
          a: 'En casos de urgencia, nuestro equipo puede estar en el lugar en menos de 2 horas desde el aviso. Para casos no urgentes, programamos la intervención en las siguientes 24-48 horas. El Pack Prevención incluye respuesta prioritaria.',
        },
      ],
    },
    {
      category: 'Sobre legalidad',
      questions: [
        {
          q: '¿Es legal lo que hacéis?',
          a: 'Absolutamente. Todas nuestras actuaciones se realizan dentro del marco legal español. No empleamos violencia ni coacciones. Nuestros métodos se basan en mediación profesional, presencia disuasoria legal, y vía judicial cuando es necesario. Contamos con abogados colegiados y vigilantes de seguridad habilitados.',
        },
        {
          q: '¿Trabajáis con abogados?',
          a: 'Sí, tenemos un departamento legal propio y colaboramos con despachos de abogados especializados en desahucios y ocupación ilegal en toda España. Cuando la vía extrajudicial no es suficiente, gestionamos todo el procedimiento judicial por ti.',
        },
        {
          q: '¿Qué pasa si hay personas vulnerables?',
          a: 'En casos con personas vulnerables (menores, discapacitados, ancianos), seguimos un protocolo especial que incluye coordinación con servicios sociales. Aunque esto puede alargar el proceso, siempre actuamos buscando el equilibrio entre la defensa de tus derechos como propietario y el respeto a la dignidad de todas las personas involucradas.',
        },
      ],
    },
    {
      category: 'Sobre precios',
      questions: [
        {
          q: '¿Por qué varía el precio?',
          a: 'El precio depende de varios factores: urgencia del caso, ubicación geográfica, tipo de inmueble (vivienda, local, nave), complejidad de la situación, y si hay que activar vía judicial. Los casos urgentes o en zonas remotas pueden tener un coste adicional.',
        },
        {
          q: '¿Cuándo conviene el Pack Prevención?',
          a: 'El Pack Prevención es ideal si tienes una segunda residencia, varias propiedades en alquiler, o simplemente quieres tranquilidad. Con una cuota mensual predecible, tienes la garantía de que si ocurre algo, no tendrás que afrontar un desembolso grande. Es especialmente recomendable para propiedades que están vacías largas temporadas.',
        },
      ],
    },
    {
      category: 'Sobre Pack Prevención',
      questions: [
        {
          q: '¿Es un seguro?',
          a: 'No, el Pack Prevención no es un seguro tradicional. Es un contrato de prestación de servicios de protección y asistencia. La diferencia principal es que nosotros actuamos directamente para resolver el problema, no solo indemnizamos. Tienes un equipo especializado listo para intervenir cuando lo necesites.',
        },
        {
          q: '¿Qué incluye y qué no?',
          a: 'Incluye: defensa legal, intervención extrajudicial 24/7, control de accesos, reparaciones básicas, limpieza, cambio de cerraduras y cobertura nacional. No incluye: reparaciones estructurales mayores, mobiliario nuevo, o indemnizaciones por lucro cesante. Cada incidencia cubre hasta 2 intervenciones completas al año.',
        },
        {
          q: '¿Cuántas incidencias cubre?',
          a: 'El Pack Prevención cubre hasta 2 incidencias completas al año por propiedad. Una incidencia completa incluye desde el aviso hasta la recuperación de la posesión y reparaciones básicas. Si ocurre una tercera incidencia en el mismo año, se aplicaría un descuento especial sobre la tarifa puntual.',
        },
      ],
    },
  ];

  return (
    <section id="faq" className="py-20 bg-dark-card">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-cyan mb-4">
            <span className="h-px w-8 bg-cyan" />
            <span className="text-sm font-medium tracking-wide uppercase">
              FAQ
            </span>
            <span className="h-px w-8 bg-cyan" />
          </div>
          <h2 className="font-orbitron text-3xl sm:text-4xl font-bold text-white mb-4">
            PREGUNTAS FRECUENTES
          </h2>
          <p className="text-gray-400 text-lg">
            Resolvemos tus dudas
          </p>
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="space-y-4">
          {faqCategories.map((category, catIndex) => (
            <div key={catIndex} className="mb-8">
              <h3 className="font-orbitron text-lg font-semibold text-cyan mb-4">
                {category.category}
              </h3>
              <div className="space-y-2">
                {category.questions.map((item, qIndex) => (
                  <AccordionItem
                    key={qIndex}
                    value={`${catIndex}-${qIndex}`}
                    className="bg-black border border-dark-border rounded-lg px-4 data-[state=open]:border-cyan/30"
                  >
                    <AccordionTrigger className="text-left text-white hover:text-cyan py-4">
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-400 pb-4 leading-relaxed">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </div>
            </div>
          ))}
        </Accordion>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-400 mb-4">¿Tienes más preguntas? Estamos aquí para ayudarte.</p>
          <Button
            variant="outline"
            className="border-cyan text-cyan hover:bg-cyan/10"
            asChild
          >
            <a
              href="https://wa.me/34618762122"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Contáctanos
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
