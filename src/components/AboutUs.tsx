import React from "react";
import slide3 from "../assets/images/slide3.avif";
import about from "../assets/images/about.avif";

const AboutUs: React.FC = () => {
    return (
        <div className="bg-gray-50">
            {/* Hero Section - Matching Slider.tsx style */}
            <div className="relative w-full h-[70vh] overflow-hidden">
                <img
                    src={slide3.src}
                    alt="Nosotros"
                    className="w-full h-full object-cover contrast-[1.1] brightness-[1.05] saturate-[1.1]"
                />
                <div className="absolute inset-0 bg-black/45 flex flex-col justify-center items-center text-center px-4 md:px-8 lg:px-12 text-white">
                    <h1 className="text-4xl sm:text-6xl md:text-7xl font-semibold leading-tight tracking-wide mb-2">
                        Nosotros
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed mb-6 max-w-[90%] lg:max-w-[70%]">
                        Pasión por el Perú, compromiso contigo
                    </p>
                    <div className="w-24 h-1 bg-white rounded-full mx-auto"></div>
                </div>
            </div>

            {/* Our Story Section - Cleaner, professional layout */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="relative group">
                        <div className="overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                            <img
                                src={about.src}
                                alt="Nuestra Historia"
                                className="w-full h-[500px] object-cover transform transition duration-700 group-hover:scale-110"
                            />
                        </div>
                        {/* Decorative element matching main theme */}

                    </div>

                    <div className="pl-0 md:pl-8">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 tracking-tight">
                            Más que una agencia, <span className="text-red-600">tu familia en Perú</span>
                        </h2>
                        <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
                            <p>
                                <strong className="text-gray-900">Somos una agencia de viajes especializadas</strong> en viajes de promoción, corporativos, full days en destinos nacionales e internacionales. Diseñamos programas a medida, según las necesidades de cada uno de nuestros clientes.
                            </p>
                            <p>
                                Nuestro equipo de profesionales en turismo se encuentran capacitados para la planificación y asesoramiento a cada uno de nuestros clientes, asegurando su satisfacción. Nos enfocamos en crear experiencias memorables desde la coordinación previa al viaje y durante.
                            </p>
                            <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
                                <ul className="space-y-2 text-sm">
                                    <li><strong className="text-gray-900">Razón Social:</strong> Peru Traditional Travel</li>
                                    <li><strong className="text-gray-900">RUC:</strong> 20606335793</li>
                                </ul>
                                <p className="mt-3 text-sm italic text-gray-500">
                                    Nos encontramos registrados en MINCETUR, ente que nos acredita como una agencia formal y responsable.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision - Matching Recomendation.tsx Card Style */}
            <section className="bg-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 tracking-tight">
                            Nuestra Identidad
                            <span className="block w-24 h-1 bg-red-600 mx-auto mt-4 rounded-full"></span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: "fa-bullseye",
                                title: "Misión",
                                desc: "Brindar experiencias turísticas auténticas y de calidad, superando las expectativas de nuestros viajeros mediante un servicio personalizado y cálido."
                            },
                            {
                                icon: "fa-eye",
                                title: "Visión",
                                desc: "Ser la agencia referente en turismo vivencial en el Perú, reconocidos por nuestra innovación, sostenibilidad y la excelencia de nuestro equipo humano."
                            },
                            {
                                icon: "fa-heart",
                                title: "Valores",
                                desc: "Integridad, pasión, seguridad y respeto. Trabajamos cada día para honrar la confianza que depositas en nosotros al elegirnos."
                            }
                        ].map((item, idx) => (
                            <div key={idx} className="group bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-gray-200">
                                <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center mb-6 text-2xl shadow-lg group-hover:bg-yellow-600 transition-colors duration-300">
                                    <i className={`fas ${item.icon}`}></i>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutUs;
