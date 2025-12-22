import React from "react";
import slide2 from "../assets/images/slide2.png";
import puntaCana from "../assets/images/package/punta-cana.png";
import cartagena from "../assets/images/package/cartagena.png";
import sanAndres from "../assets/images/package/sanAndres.png";
import decameron from "../assets/images/package/decameron.png";
import cusco from "../assets/images/package/cusco.png";
import tarapoto from "../assets/images/package/tarapoto.png";

const programs = [
    {
        title: "Punta Cana",
        duration: "5 Días / 4 Noches",
        image: puntaCana,
        description: "Vive unas vacaciones inolvidables en Punta Cana, uno de los destinos más paradisíacos del Caribe. Disfruta de playas de arena blanca, aguas cristalinas y resorts todo incluido diseñados para el descanso y la diversión.",
        tag: "Primaria y Secundaria"
    },
    {
        title: "Cartagena - Isla del Rosario",
        duration: "5 Días / 4 Noches",
        image: cartagena,
        description: "Descubre la magia de Cartagena de Indias, una ciudad llena de historia, cultura y encanto caribeño. Recorre su Ciudad Amurallada, calles coloridas, balcones coloniales y disfruta de una vibrante vida nocturna junto al mar.",
        tag: "Secundaria y Promociones"
    },
    {
        title: "Isla San Andrés",
        duration: "5 Días / 4 Noches",
        image: sanAndres,
        description: "Disfruta San Andrés, uno de los destinos más espectaculares del Caribe colombiano, famoso por su increíble mar de siete colores, playas de arena blanca. Disfrutaremos de actividades acuáticas, paseos en lancha, snorkeling.",
        tag: "Promociones"
    },
    {
        title: "Decameron - Punta Sal",
        duration: "5 Días / 4 Noches",
        image: decameron,
        description: "Vive una experiencia única en Decameron Punta Sal, uno de los resorts todo incluido más exclusivos del norte del Perú, ubicado frente a una de las playas más hermosas de la región, con clima cálido todo el año.",
        tag: "Promociones"
    },
    {
        title: "Cusco Imperial",
        duration: "5 Días / 4 Noches",
        image: cusco,
        description: "Descubre Cuscomagico, la capital histórica del Perú, llena de cultura, tradición y arquitectura ancestral. Recorre sus calles empedradas, plazas coloniales y restos arqueológicos que narran la grandeza del Imperio Inca. Dónde se encuentra Machu Picchu, una de las Siete Maravillas del Mundo Moderno, rodeada de montañas y misterio.",
        tag: "Promociones"
    },
    {
        title: "Tarapoto",
        duration: "5 Días / 4 Noches",
        image: tarapoto,
        description: "Vive experiencias únicas visitando Tarapoto destino de naturaleza, aventura de la Amazonía peruana. Disfruta de la Catarata de Ahuashiyacu, navegando por la famosa Laguna Azul, explorando comunidades nativas y disfrutando de la deliciosa gastronomía amazónica.",
        tag: "Promociones"
    }
];

const SchoolPrograms: React.FC = () => {
    return (
        <div className="bg-gray-50">
            {/* Hero Section - Matching Slider.tsx style */}
            <div className="relative w-full h-[70vh] overflow-hidden">
                <img
                    src={slide2.src}
                    alt="Programas Escolares"
                    className="w-full h-full object-cover contrast-[1.1] brightness-[1.05] saturate-[1.1]"
                />
                <div className="absolute inset-0 bg-black/45 flex flex-col justify-center items-center text-center px-4 md:px-8 lg:px-12 text-white">
                    <h1 className="text-4xl sm:text-6xl md:text-7xl font-semibold leading-tight tracking-wide mb-2">
                        Programas Escolares
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed mb-6 max-w-[90%] lg:max-w-[70%]">
                        Aprendizaje, aventura y seguridad para tu colegio
                    </p>
                    <div className="w-24 h-1 bg-white rounded-full mx-auto"></div>
                </div>
            </div>

            {/* Why Choose Us - Matching Recomendation.tsx Clean Style */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 tracking-tight">
                            ¿Por qué elegirnos?
                            <span className="block w-24 h-1 bg-red-600 mx-auto mt-4 rounded-full"></span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { icon: "fa-graduation-cap", title: "Valor Educativo", desc: "Aprendizaje vivencial integrando historia y naturaleza." },
                            { icon: "fa-shield-alt", title: "Seguridad Total", desc: "Monitoreo 24/7 y asistencia permanente durante el viaje." },
                            { icon: "fa-utensils", title: "Alimentación", desc: "Menús nutritivos y balanceados para estudiantes." },
                            { icon: "fa-ticket-alt", title: "Liberados", desc: "1 libre por cada 15 alumnos pagantes." }
                        ].map((feature, idx) => (
                            <div key={idx} className="group p-6 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-300 border border-gray-100 text-center">
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

            {/* Packages - Matching Recomendation.tsx Card Style EXACTLY */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 tracking-tight">
                            Nuestros Paquetes
                            <span className="block w-24 h-1 bg-red-600 mx-auto mt-4 rounded-full"></span>
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Diseñados pedagógicamente para niveles de primaria y secundaria.
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
        </div>
    );
};

export default SchoolPrograms;
