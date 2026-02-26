import Navigation from './sections/Navigation';
import Hero from './sections/Hero';
import CaseSelector from './sections/CaseSelector';
import Protocol from './sections/Protocol';
import Services from './sections/Services';
import PackPrevencion from './sections/PackPrevencion';
import Precios from './sections/Precios';
import Testimonios from './sections/Testimonios';
import Cobertura from './sections/Cobertura';
import FAQ from './sections/FAQ';
import PromoSeguridad from './sections/PromoSeguridad';
import CTAFinal from './sections/CTAFinal';
import Footer from './sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <main>
        <Hero />
        <CaseSelector />
        <Protocol />
        <Services />
        <PackPrevencion />
        <Precios />
        <PromoSeguridad />
        <Testimonios />
        <Cobertura />
        <FAQ />
        <CTAFinal />
      </main>
      <Footer />
    </div>
  );
}

export default App;
