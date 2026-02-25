import { MapPin, ArrowRight } from 'lucide-react';

const Cobertura = () => {
  const cities = [
    {
      name: 'Madrid',
      image: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=600&q=80',
      description: 'Servicio completo de desocupación en la capital y toda la Comunidad de Madrid.',
    },
    {
      name: 'Barcelona',
      image: 'https://images.unsplash.com/photo-1583422409516-2895a77efded?w=600&q=80',
      description: 'Cobertura en Barcelona ciudad y provincia, incluyendo Costa Brava.',
    },
    {
      name: 'Valencia',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Malvarrosa_Beach%2C_Valencia%2C_Spain_%2829812271043%29.jpg/960px-Malvarrosa_Beach%2C_Valencia%2C_Spain_%2829812271043%29.jpg',
      description: 'Desocupaciones rápidas en Valencia y toda la Comunidad Valenciana.',
    },
    {
      name: 'Sevilla',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Plaza_de_Espa%C3%B1a_%28Sevilla%29_-_01.jpg/960px-Plaza_de_Espa%C3%B1a_%28Sevilla%29_-_01.jpg',
      description: 'Servicio especializado en Sevilla y provincia, disponible 24/7.',
    },
    {
      name: 'Málaga',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Vista_de_M%C3%A1laga_desde_el_castillo_de_Gibralfaro%2C_Espa%C3%B1a%2C_2023-05-20%2C_DD_113.jpg/960px-Vista_de_M%C3%A1laga_desde_el_castillo_de_Gibralfaro%2C_Espa%C3%B1a%2C_2023-05-20%2C_DD_113.jpg',
      description: 'Protección para segundas residencias en la Costa del Sol.',
    },
    {
      name: 'Zaragoza',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Zaragoza_-_Bas%C3%ADlica_del_Pilar_y_r%C3%ADo_Ebro.jpg/960px-Zaragoza_-_Bas%C3%ADlica_del_Pilar_y_r%C3%ADo_Ebro.jpg',
      description: 'Cobertura completa en Aragón con equipos locales.',
    },
  ];

  const moreCities = [
    'Bilbao', 'Murcia', 'Palma', 'Las Palmas', 'Alicante',
    'Córdoba', 'Valladolid', 'Vigo', 'Gijón', 'Vitoria',
    'La Coruña', 'Granada', 'Elche', 'Oviedo', 'Tarragona'
  ];

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-cyan mb-4">
            <MapPin className="w-5 h-5" />
            <span className="text-sm font-medium tracking-wide uppercase">
              Cobertura Nacional
            </span>
          </div>
          <h2 className="font-orbitron text-3xl sm:text-4xl font-bold text-white mb-4">
            TRABAJAMOS EN TODA ESPAÑA
          </h2>
          <p className="text-gray-400 text-lg">
            Cobertura nacional con equipos locales
          </p>
        </div>

        {/* Cities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {cities.map((city, i) => (
            <div
              key={i}
              className="group relative bg-dark-card border border-dark-border rounded-xl overflow-hidden hover:border-cyan/30 transition-all"
            >
              {/* Image */}
              <div className="h-48 overflow-hidden">
                <img
                  src={city.image}
                  alt={city.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="w-4 h-4 text-cyan" />
                  <h3 className="font-orbitron text-xl font-bold text-white">
                    {city.name}
                  </h3>
                </div>
                <p className="text-sm text-gray-400 mb-3">{city.description}</p>
                <a
                  href={`#contacto`}
                  className="inline-flex items-center text-cyan text-sm font-medium group-hover:gap-2 transition-all"
                >
                  Más información
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* More Cities */}
        <div className="text-center">
          <p className="text-gray-500 text-sm mb-4">También operamos en:</p>
          <div className="flex flex-wrap justify-center gap-2">
            {moreCities.map((city, i) => (
              <span
                key={i}
                className="px-3 py-1 rounded-full bg-dark-card border border-dark-border text-gray-400 text-sm"
              >
                {city}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cobertura;
