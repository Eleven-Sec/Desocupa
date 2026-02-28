import { Shield, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PromoSeguridad = () => {
    return (
        <section className="py-24 bg-black relative overflow-hidden">
            {/* Ambient light effects */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-cyan/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-cyan/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="group bg-dark-card/40 backdrop-blur-sm border border-white/10 rounded-[2.5rem] overflow-hidden hover:border-cyan/40 transition-all duration-700 shadow-2xl">
                    <div className="grid lg:grid-cols-2">
                        {/* Image side with responsive rounding */}
                        <div className="relative h-[300px] lg:h-auto min-h-[400px] overflow-hidden">
                            <img
                                src="/seguridad-privada.png"
                                alt="Seguridad Privada Eleven"
                                className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
                            />
                            {/* Overlay gradient for depth */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent lg:bg-gradient-to-r" />
                        </div>

                        {/* Content side */}
                        <div className="p-10 lg:p-20 flex flex-col justify-center">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan/10 border border-cyan/20 text-cyan w-fit mb-8">
                                <Shield className="w-4 h-4 shadow-glow" />
                                <span className="text-[10px] font-bold tracking-[0.2em] uppercase orbitron">Security Solutions</span>
                            </div>

                            <div className="space-y-6">
                                <h2 className="text-4xl lg:text-5xl font-bold font-orbitron text-white leading-tight uppercase tracking-tight">
                                    VISITA <span className="text-cyan drop-shadow-glow">ELEVEN</span> <br />
                                    SEGURIDAD
                                </h2>
                                <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
                                    Te invitamos a conocer <span className="text-white font-semibold">Eleven Seguridad</span>. Visita nuestra página web oficial para descubrir todas nuestras soluciones integrales en materia de seguridad, protección y vigilancia para tu tranquilidad.
                                </p>
                            </div>

                            <div className="mt-12 flex flex-col items-start gap-6">
                                <Button
                                    size="lg"
                                    className="bg-cyan text-black hover:bg-cyan-dark h-16 px-12 text-lg font-black rounded-xl group/btn transition-all duration-500 shadow-lg hover:shadow-cyan/20"
                                    asChild
                                >
                                    <a
                                        href="https://elevenseguridad.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-4"
                                    >
                                        IR A LA WEB OFICIAL
                                        <ArrowRight className="w-6 h-6 group-hover/btn:translate-x-2 transition-transform" />
                                    </a>
                                </Button>

                                <div className="flex items-center gap-3 pl-2 opacity-60">
                                    <div className="w-8 h-px bg-cyan/40" />
                                    <p className="text-sm text-gray-400 font-medium italic">
                                        Descubre todos nuestros servicios en elevenseguridad.com
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
