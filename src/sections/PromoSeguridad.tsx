import { Shield, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PromoSeguridad = () => {
    return (
        <section className="py-24 bg-black relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="bg-dark-card border border-dark-border/60 rounded-[2.5rem] overflow-hidden hover:border-cyan/30 transition-all duration-500 shadow-2xl">
                    <div className="grid lg:grid-cols-2 items-center">
                        {/* Image Content */}
                        <div className="relative h-[300px] lg:h-[500px] overflow-hidden">
                            <img
                                src="/seguridad-privada.png"
                                alt="Seguridad Privada Eleven"
                                className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700 hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent lg:hidden" />
                        </div>

                        {/* Text Content */}
                        <div className="p-8 lg:p-16 space-y-8">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan/10 border border-cyan/20 text-cyan">
                                <Shield className="w-5 h-5 shadow-glow" />
                                <span className="text-sm font-bold tracking-wider uppercase orbitron">Security Solutions</span>
                            </div>

                            <div className="space-y-4">
                                <h2 className="text-3xl lg:text-5xl font-bold font-orbitron text-white leading-tight">
                                    SEGURIDAD <span className="text-cyan">PRIVADA</span> ESPECIALIZADA
                                </h2>
                                <p className="text-gray-400 text-lg leading-relaxed">
                                    Más allá de la desocupación, protegemos lo que más te importa. Ofrecemos servicios de seguridad física, escoltas, vigilancia de eventos y sistemas de protección avanzada con el sello de calidad de Eleven Seguridad.
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-5 pt-4">
                                <Button
                                    size="lg"
                                    className="bg-cyan text-black hover:bg-cyan-dark h-16 px-10 text-lg font-bold rounded-2xl group transition-all"
                                    asChild
                                >
                                    <a
                                        href="https://elevenseguridad.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-3"
                                    >
                                        Visitar Eleven Seguridad
                                        <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                                    </a>
                                </Button>

                                <div className="flex flex-col justify-center">
                                    <p className="text-sm text-gray-500 font-medium italic">
                                        "Si quieres saber más, ve a nuestra página oficial"
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PromoSeguridad;
