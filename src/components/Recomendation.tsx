import { fullDays } from "./FullDay";
import { programs } from "./SchoolPrograms";

const Recomendation = () => {
    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 tracking-tight">
                        Tours más vendidos
                        <span className="block w-24 h-1 bg-red-600 mx-auto mt-4 rounded-full"></span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Descubre los destinos favoritos de nuestros viajeros y vive experiencias inolvidables.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {fullDays.map((tour, index) => {
                        const message = `¡Hola! Perú Traditional Travel. Estoy interesad@ en el paquete ${tour.duration} - ${tour.title}.`;
                        const waLink = `https://wa.me/51962353202?text=${encodeURIComponent(message)}`;
                        return (
                            <div key={index} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden flex flex-col h-full border border-gray-100">
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
                                        href={waLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full inline-flex items-center justify-center px-6 py-3 bg-red-600 text-white font-semibold rounded-xl hover:bg-red-700 transition-colors duration-300 shadow-md group-hover:shadow-lg"
                                    >
                                        Consultar ahora
                                        <i className="fa-brands fa-whatsapp ml-2 text-lg"></i>
                                    </a>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* School Programs Section */}
                <div className="text-center mb-16 mt-24">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 tracking-tight">
                        Programas Escolares
                        <span className="block w-24 h-1 bg-red-600 mx-auto mt-4 rounded-full"></span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Aprendizaje, aventura y seguridad para tu colegio.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {programs.map((program, idx) => (
                        <div key={idx} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden flex flex-col h-full border border-gray-100">
                            <div className="relative overflow-hidden h-64">
                                <img
                                    src={program.image.src}
                                    alt={program.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute top-4 right-4 bg-yellow-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md uppercase tracking-wide">
                                    {program.duration}
                                </div>
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300"></div>
                            </div>
                            <div className="p-8 flex flex-col flex-grow">
                                <div className="mb-2">
                                    <span className="text-xs font-bold text-red-600 uppercase tracking-wider">{program.tag}</span>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-red-600 transition-colors">
                                    {program.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed mb-6 flex-grow text-sm">
                                    {program.description}
                                </p>
                                <a
                                    href={`https://wa.me/51962353202?text=${encodeURIComponent(`¡Hola! Perú Traditional Travel. Quisiera información para el viaje escolar: ${program.title}`)}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full inline-flex items-center justify-center px-6 py-3 bg-red-600 text-white font-semibold rounded-xl hover:bg-yellow-600 transition-colors duration-300 shadow-md group-hover:shadow-lg"
                                >
                                    Cotizar Ahora
                                    <i className="fa-brands fa-whatsapp ml-2 text-lg"></i>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Recomendation;