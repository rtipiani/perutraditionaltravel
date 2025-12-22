import React from "react";
import slide1 from "../assets/images/slide1.png"; // Hero image
import ica from "../assets/images/full-day/ica.png";
import sanMateo from "../assets/images/full-day/san-mateo.png";
import chancay from "../assets/images/full-day/chancay.png";
import lunahuana from "../assets/images/full-day/lunahuana.png";

const fullDays = [
    {
        title: "Ica - Huacachina",
        description: "Vive una experiencia llena de adrenalina y paisajes increíbles con nuestro Full Day a Ica y Huacachina. Descubre el famoso oasis de Huacachina, rodeado de enormes dunas, perfecto para fotos épicas y momentos inolvidables Siente la emoción del tubulares(buggies) y el sandboarding en el desierto.",
        image: ica,
        duration: "FULL DAY"
    },
    {
        title: "San Mateo de Otao",
        description: "Descubre San Mateo de Otao, un destino natural escondido en la sierra de Lima, perfecto para escapar de la rutina y conectar con la naturaleza. Rodeado de montañas, ríos y vegetación, este lugar es ideal para los amantes del turismo de aventura y paisajes verdes.",
        image: sanMateo,
        duration: "FULL DAY"
    },
    {
        title: "Castillo de Chancay",
        description: "Descubre el Castillo de Chancay, una joya arquitectónica inspirada en los castillos europeos del siglo XIX, ubicada en la hermosa costa norte de Lima.",
        image: chancay,
        duration: "FULL DAY"
    },
    {
        title: "Lunahuaná",
        description: "Vive un día lleno de emociones y paisajes increíbles en Lunahuaná, el destino perfecto cerca de Lima para quienes buscan aventura, sol y diversión. Este pintoresco valle es conocido por sus ríos, viñedos y actividades al aire libre, ideal para un escape rápido de la ciudad.",
        image: lunahuana,
        duration: "FULL DAY"
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
