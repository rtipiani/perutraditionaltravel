import cajamarca from "../assets/images/recomendations/cajamarca.png";
import arequipa from "../assets/images/recomendations/arequipa.png";
import puntaSal from "../assets/images/recomendations/punta-sal.png";
import tarapoto from "../assets/images/recomendations/tarapoto.png";
import huacachina from "../assets/images/recomendations/huacachina.png";
import chancay from "../assets/images/recomendations/chancay.png";
import trujillo from "../assets/images/recomendations/trujillo.png";
import oxapampa from "../assets/images/recomendations/oxapampa.png";
import cusco from "../assets/images/recomendations/cusco.png";

const tours = [
    {
        title: "TOUR PERENÉ",
        days: "FULL DAY",
        image: cajamarca,
        description:
            "Aventura total: puente Kimiri, miradores, cataratas, pozas naturales y experiencia Asháninca. Salida 10:00 a.m. — Retorno 7:00 p.m."
    },
    {
        title: "TOUR OXAPAMPA",
        days: "FULL DAY",
        image: arequipa,
        description:
            "Aventura en Oxapampa: manantial La Virgen, casa museo, bailes tiroleses, artesanías, cueva Tunki y degustación en El Wharapo. Salida 9:00 a.m. — Retorno 7:30 p.m."
    },
    {
        title: "TOUR VILLA RICA",
        days: "FULL DAY",
        image: puntaSal,
        description:
            "Aventura en Villa Rica: laguna El Oconal, ictioterapia, cascada El León, mirador La Cumbre y experiencia en fundo cafetalero con degustación. Salida 9:00 a.m. — Retorno 7:00 p.m."
    },
    {
        title: "TOUR POZUZO Y OXAPAMPA",
        days: "FULL DAY",
        image: tarapoto,
        description:
            "Aventura en Pozuzo: catarata Rayantambo, Portal de Bienvenida, colonia Austro-Alemana, pozas de Agua Salada, cervecería Dorcher Bier y puente Emperador Guillermo I. Salida 6:00 a.m. — Retorno 8:30 p.m."
    },
    {
        title: "TOUR INDIANA JONES",
        days: "FULL DAY",
        image: huacachina,
        description:
            "Aventura Indiana Jones: puente colgante Kimiri, caminata selvática, ruta por el río con rocas, lianas, toboganes naturales y pozas para un refrescante baño hasta las cataratas finales. Salida 11:00 a.m. — Retorno 5:00 p.m."
    },
    {
        title: "TOUR CHANCHAMAYO",
        days: "FULL DAY",
        image: chancay,
        description:
            "Aventura en San Ramón: caminata a la catarata Tirol, visita a la plaza, mariposario Zhaveta Yard con orquideario y mini zoológico, más degustación de licores y helados artesanales. Salida 10:30 a.m. — Retorno 6:00 p.m."
    },
    {
        title: "TOUR LA FORTUNA",
        days: "FULL DAY",
        image: trujillo,
        description:
            "Aventura en La Fortuna: caminata a su jacuzzi natural, pozas ecológicas y cascada, visita a la plaza de San Ramón, mariposario Zhaveta Yard, almuerzo típico y mirador de la Cruz. Salida 10:30 a.m. — Retorno 6:00 p.m."
    },
    {
        title: "Oxapampa",
        days: "FULL DAY",
        image: oxapampa,
        description:
            "Aventura en La Fortuna: caminata a su jacuzzi natural, pozas ecológicas y cascada, visita a la plaza de San Ramón, mariposario Zhaveta Yard, almuerzo típico y mirador de la Cruz. Salida 10:30 a.m. — Retorno 6:00 p.m."
    },
    {
        title: "Cusco",
        days: "FULL DAY",
        image: cusco,
        description:
            "Aventura en La Fortuna: caminata a su jacuzzi natural, pozas ecológicas y cascada, visita a la plaza de San Ramón, mariposario Zhaveta Yard, almuerzo típico y mirador de la Cruz. Salida 10:30 a.m. — Retorno 6:00 p.m."
    }
];

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
                    {tours.map((tour, index) => {
                        const message = `¡Hola! Angel Aventura Tours. Estoy interesado en el paquete ${tour.days} - ${tour.title}.`;
                        const waLink = `https://wa.me/51918024860?text=${encodeURIComponent(message)}`;
                        return (
                            <div key={index} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden flex flex-col h-full border border-gray-100">
                                <div className="relative overflow-hidden h-64">
                                    <img
                                        src={tour.image.src}
                                        alt={tour.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute top-4 right-4 bg-yellow-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md uppercase tracking-wide">
                                        {tour.days}
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
            </div>
        </section>
    );
};

export default Recomendation;