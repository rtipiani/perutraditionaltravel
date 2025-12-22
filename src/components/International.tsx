import React from "react";
import slide1 from "../assets/images/slide1.png"; // Punta Cana
import slide2 from "../assets/images/slide2.png"; // Cartagena
import puntaSal from "../assets/images/recomendations/punta-sal.png"; // Placeholder for San Andrés (Beach vibe)

const destinations = [
    {
        title: "Punta Cana",
        description: "El paraíso del Caribe. Playas de arena blanca, resorts todo incluido y aguas turquesas.",
        image: slide1,
        duration: "4 Días / 3 Noches",
        price: "Desde $890"
    },
    {
        title: "Cartagena de Indias",
        description: "Historia y encanto caribeño. Ciudad amurallada, Islas del Rosario y rumba.",
        image: slide2,
        duration: "4 Días / 3 Noches",
        price: "Desde $750"
    },
    {
        title: "San Andrés",
        description: "El mar de los siete colores. Snorkel, compras y playas de ensueño.",
        image: puntaSal,
        duration: "5 Días / 4 Noches",
        price: "Desde $820"
    }
];

const International: React.FC = () => {
    return (
        <div className="bg-gray-50">
            {/* Hero Section - Matching Design Tokens */}
            <div className="relative w-full h-[70vh] overflow-hidden">
                <img
                    src={slide2.src}
                    alt="Destinos Internacionales"
                    className="w-full h-full object-cover contrast-[1.1] brightness-[1.05] saturate-[1.1]"
                />
                <div className="absolute inset-0 bg-black/45 flex flex-col justify-center items-center text-center px-4 md:px-8 lg:px-12 text-white">
                    <h1 className="text-4xl sm:text-6xl md:text-7xl font-semibold leading-tight tracking-wide mb-2">
                        Internacionales
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed mb-6 max-w-[90%] lg:max-w-[70%]">
                        Descubre el mundo con la confianza de Perú Traditional Travel
                    </p>
                    <div className="w-24 h-1 bg-white rounded-full mx-auto"></div>
                </div>
            </div>

            {/* Why Choose Us - Matching Recommendation Clean Style */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 tracking-tight">
                            Viaja sin Fronteras
                            <span className="block w-24 h-1 bg-red-600 mx-auto mt-4 rounded-full"></span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { icon: "fa-plane-departure", title: "Paquetes Todo Incluido", desc: "Vuelos, hotel, traslados y alimentación. Despreocúpate de todo." },
                            { icon: "fa-passport", title: "Asesoría Migratoria", desc: "Te orientamos con los requisitos de ingreso y documentos necesarios." },
                            { icon: "fa-concierge-bell", title: "Hoteles Seleccionados", desc: "Alianzas con las mejores cadenas hoteleras internacionales." }
                        ].map((feature, idx) => (
                            <div key={idx} className="group p-8 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-300 border border-gray-100 text-center">
                                <div className="w-16 h-16 mx-auto bg-red-600 rounded-full flex items-center justify-center mb-4 shadow-lg group-hover:bg-yellow-600 transition-colors duration-300 text-white">
                                    <i className={`fas ${feature.icon} text-2xl`}></i>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                                <p className="text-gray-600 text-sm">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Packages - Matching Design Tokens */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 tracking-tight">
                            Destinos Favoritos
                            <span className="block w-24 h-1 bg-red-600 mx-auto mt-4 rounded-full"></span>
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Experiencias únicas en los destinos más solicitados del Caribe y Sudamérica.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {destinations.map((tour, idx) => (
                            <div key={idx} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden flex flex-col h-full border border-gray-100">
                                <div className="relative overflow-hidden h-64">
                                    <img
                                        src={tour.image.src}
                                        alt={tour.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute top-4 right-4 bg-yellow-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md uppercase tracking-wide">
                                        {tour.duration}
                                    </div>
                                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300"></div>
                                </div>
                                <div className="p-8 flex flex-col flex-grow">
                                    <div className="flex justify-between items-center mb-3">
                                        <h3 className="text-2xl font-bold text-gray-800 group-hover:text-red-600 transition-colors">
                                            {tour.title}
                                        </h3>
                                    </div>

                                    <p className="text-gray-600 leading-relaxed mb-6 flex-grow text-sm">
                                        {tour.description}
                                    </p>

                                    <div className="mb-6 pt-4 border-t border-gray-100">
                                        <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold">Precio referencial</p>
                                        <p className="text-2xl font-bold text-gray-900">{tour.price}</p>
                                    </div>

                                    <a
                                        href={`https://wa.me/51962353202?text=${encodeURIComponent(`¡Hola! Perú Traditional Travel. Estoy interesad@ en el paquete internacional: ${tour.title}`)}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full inline-flex items-center justify-center px-6 py-3 bg-red-600 text-white font-semibold rounded-xl hover:bg-yellow-600 transition-colors duration-300 shadow-md group-hover:shadow-lg"
                                    >
                                        Solicitar Cotización
                                        <i className="fa-brands fa-whatsapp ml-2 text-lg"></i>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default International;
