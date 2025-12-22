import React from "react";
import slide1 from "../assets/images/slide1.png"; // Hero image
import cajamarca from "../assets/images/recomendations/cajamarca.png";
import oxapampa from "../assets/images/recomendations/oxapampa.png";
import puntaSal from "../assets/images/recomendations/punta-sal.png";
import tarapoto from "../assets/images/recomendations/tarapoto.png";
import chancay from "../assets/images/recomendations/chancay.png";
import trujillo from "../assets/images/recomendations/trujillo.png";

const fullDays = [
    {
        title: "Full Day Perené",
        description: "Aventura total: cataratas, comunidades nativas y degustación de café.",
        image: cajamarca,
        duration: "1 Día"
    },
    {
        title: "Full Day Oxapampa",
        description: "Descubre la colonia austro-alemana, el Wharapo y la cueva Tunqui.",
        image: oxapampa,
        duration: "1 Día"
    },
    {
        title: "Full Day Villa Rica",
        description: "La tierra del café más fino del mundo y la laguna El Oconal.",
        image: puntaSal,
        duration: "1 Día"
    },
    {
        title: "Full Day Pozuzo",
        description: "Un rincón de Europa en la selva. Pozas de agua salada y cultura viva.",
        image: tarapoto,
        duration: "1 Día"
    },
    {
        title: "Full Day San Ramón",
        description: "Naturaleza pura: Catarata Tirol y el mariposario más grande.",
        image: chancay,
        duration: "1 Día"
    },
    {
        title: "Full Day La Merced",
        description: "Puente colgante Kimiri, perfil del nativo dormido y mucha diversión.",
        image: trujillo,
        duration: "1 Día"
    }
];

const FullDay: React.FC = () => {
    return (
        <div className="bg-gray-50">
            {/* Hero Section - Strict H-[70vh] & Style Match */}
            <div className="relative w-full h-[70vh] overflow-hidden">
                <img
                    src={slide1.src}
                    alt="Full Day Tours"
                    className="w-full h-full object-cover contrast-[1.1] brightness-[1.05] saturate-[1.1]"
                />
                <div className="absolute inset-0 bg-black/45 flex flex-col justify-center items-center text-center px-4 md:px-8 lg:px-12 text-white">
                    <h1 className="text-4xl sm:text-6xl md:text-7xl font-semibold leading-tight tracking-wide mb-2">
                        Full Day
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed mb-6 max-w-[90%] lg:max-w-[70%]">
                        Escápate de la rutina y vive una aventura inolvidable en un solo día
                    </p>
                    <div className="w-24 h-1 bg-white rounded-full mx-auto"></div>
                </div>
            </div>

            {/* Packages Grid - Strict Card Match */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 tracking-tight">
                            Nuestras Rutas Diarias
                            <span className="block w-24 h-1 bg-red-600 mx-auto mt-4 rounded-full"></span>
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Salidas diarias garantizadas. Elige tu próximo destino.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {fullDays.map((tour, idx) => (
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
                                    <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-red-600 transition-colors">
                                        {tour.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed mb-6 flex-grow text-sm">
                                        {tour.description}
                                    </p>
                                    <a
                                        href={`https://wa.me/51962353202?text=${encodeURIComponent(`¡Hola! Perú Traditional Travel. Estoy interesad@ en el ${tour.title}`)}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full inline-flex items-center justify-center px-6 py-3 bg-red-600 text-white font-semibold rounded-xl hover:bg-yellow-600 transition-colors duration-300 shadow-md group-hover:shadow-lg"
                                    >
                                        Consultar disponibilidad
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

export default FullDay;
