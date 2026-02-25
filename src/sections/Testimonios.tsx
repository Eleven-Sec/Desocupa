import { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonios = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'María G.',
      city: 'Madrid',
      rating: 5,
      text: 'Recuperamos nuestra casa de la playa en 48 horas. El equipo fue profesional en todo momento y nos mantuvieron informados. Increíble servicio.',
      service: 'Okupación',
    },
    {
      name: 'Carlos R.',
      city: 'Barcelona',
      rating: 5,
      text: 'Tenía un inquilino que no pagaba desde hace 6 meses. En Eleven resolvieron el problema en dos semanas. Muy recomendables.',
      service: 'Inquilino moroso',
    },
    {
      name: 'Ana L.',
      city: 'Valencia',
      rating: 5,
      text: 'Contraté el Pack Prevención para mis dos apartamentos turísticos. La tranquilidad que tengo ahora no tiene precio.',
      service: 'Pack Prevención',
    },
    {
      name: 'Javier M.',
      city: 'Sevilla',
      rating: 5,
      text: 'Urgencia total, descubrí ocupantes en mi piso de alquiler un domingo. A las 3 horas ya tenía al equipo en el lugar.',
      service: 'Urgencia exprés',
    },
    {
      name: 'Laura P.',
      city: 'Alicante',
      rating: 5,
      text: 'Después de 8 meses de juicio por mi cuenta, contraté a Eleven y en 3 semanas tenía mi casa de vuelta. Profesionales de verdad.',
      service: 'Desalojo judicial',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 bg-dark-card relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-cyan/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="h-px w-8 bg-gradient-to-r from-transparent to-cyan/50" />
            <span className="text-cyan/70 text-sm font-medium tracking-widest uppercase">
              Testimonios
            </span>
            <span className="h-px w-8 bg-gradient-to-l from-transparent to-cyan/50" />
          </div>
          <h2 className="font-orbitron text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5">
            OPINIÓN DE NUESTROS CLIENTES
          </h2>
          <p className="text-gray-400 text-lg">
            Más de 1.000 propietarios ya confían en Eleven
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-16 w-12 h-12 rounded-2xl bg-dark-card border border-dark-border/60 flex items-center justify-center text-gray-400 hover:text-cyan hover:border-cyan/40 hover:bg-cyan/5 transition-all z-10"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-16 w-12 h-12 rounded-2xl bg-dark-card border border-dark-border/60 flex items-center justify-center text-gray-400 hover:text-cyan hover:border-cyan/40 hover:bg-cyan/5 transition-all z-10"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Cards Container */}
          <div className="overflow-hidden px-4">
            <div
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, i) => (
                <div
                  key={i}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-gradient-to-b from-black/80 to-black border border-dark-border/60 rounded-3xl p-10 text-center relative overflow-hidden">
                    {/* Quote decoration */}
                    <div className="absolute top-6 left-6 opacity-20">
                      <Quote className="w-16 h-16 text-cyan" />
                    </div>
                    
                    {/* Stars */}
                    <div className="flex justify-center gap-1.5 mb-6">
                      {[...Array(testimonial.rating)].map((_, j) => (
                        <Star key={j} className="w-5 h-5 fill-cyan text-cyan" />
                      ))}
                    </div>

                    {/* Text */}
                    <p className="text-gray-200 text-xl leading-relaxed mb-8 max-w-2xl mx-auto italic">
                      "{testimonial.text}"
                    </p>

                    {/* Author */}
                    <div>
                      <p className="text-white font-bold text-lg">{testimonial.name}</p>
                      <p className="text-gray-500 text-sm mb-3">{testimonial.city}</p>
                      <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-cyan/10 border border-cyan/20 text-cyan text-xs font-medium">
                        {testimonial.service}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === currentIndex
                    ? 'w-8 bg-cyan'
                    : 'w-2 bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonios;
