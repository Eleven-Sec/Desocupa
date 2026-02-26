import { Phone, Mail, MapPin, Instagram, MessageCircle } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Servicios', href: '#servicios' },
    { label: 'Pack Prevención', href: '#pack-prevencion' },
    { label: 'Precios', href: '#precios' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contacto', href: '#contacto' },
  ];

  const legalLinks = [
    { label: 'Aviso Legal', href: '#' },
    { label: 'Política de Cookies', href: '#' },
    { label: 'Declaración de Privacidad', href: '#' },
  ];

  return (
    <footer className="bg-black border-t border-dark-border/60 relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[200px] bg-cyan/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <a href="#inicio" className="inline-block mb-5">
              <span className="font-orbitron text-3xl font-bold text-white tracking-wider">
                ELEVEN
              </span>
            </a>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              Especialistas en desocupación legal y recuperación de inmuebles. Cobertura nacional 24/7.
            </p>
            <div className="flex gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl bg-dark-card border border-dark-border/60 flex items-center justify-center text-gray-400 hover:text-cyan hover:border-cyan/40 hover:bg-cyan/5 transition-all"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/34608294503"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl bg-dark-card border border-dark-border/60 flex items-center justify-center text-gray-400 hover:text-cyan hover:border-cyan/40 hover:bg-cyan/5 transition-all"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-orbitron text-sm font-bold text-white mb-5 flex items-center gap-2">
              <span className="w-4 h-px bg-cyan/50" />
              Links Rápidos
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-cyan transition-colors text-sm inline-flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-gray-600 group-hover:bg-cyan transition-colors" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-orbitron text-sm font-bold text-white mb-5 flex items-center gap-2">
              <span className="w-4 h-px bg-cyan/50" />
              Contacto
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+34608294503"
                  className="flex items-center gap-3 text-gray-400 hover:text-cyan transition-colors text-sm group"
                >
                  <div className="w-8 h-8 rounded-lg bg-cyan/10 flex items-center justify-center group-hover:bg-cyan/20 transition-colors">
                    <Phone className="w-4 h-4 text-cyan" />
                  </div>
                  608 29 45 03
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@elevenseguridad.com"
                  className="flex items-center gap-3 text-gray-400 hover:text-cyan transition-colors text-sm group"
                >
                  <div className="w-8 h-8 rounded-lg bg-cyan/10 flex items-center justify-center group-hover:bg-cyan/20 transition-colors">
                    <Mail className="w-4 h-4 text-cyan" />
                  </div>
                  info@elevenseguridad.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <div className="w-8 h-8 rounded-lg bg-cyan/10 flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-cyan" />
                </div>
                <span>España - Cobertura nacional</span>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-orbitron text-sm font-bold text-white mb-5 flex items-center gap-2">
              <span className="w-4 h-px bg-cyan/50" />
              Legal
            </h4>
            <ul className="space-y-3">
              {legalLinks.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-cyan transition-colors text-sm inline-flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-gray-600 group-hover:bg-cyan transition-colors" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-dark-border/40 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            Copyright © 2025 Eleven Seguridad y Protección
          </p>
          <p className="text-gray-600 text-xs">
            Servicio de protección de propiedades. No es un seguro tradicional.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
