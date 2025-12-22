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
        <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-semibold mb-12 px-4 sm:px-8">
                    Tours más vendidos
                </h2>
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                    {tours.map((tour, index) => {
                        const message = `¡Hola! Angel Aventura Tours. Estoy interesado en el paquete ${tour.days} - ${tour.title}.`;
                        const waLink = `https://wa.me/51918024860?text=${encodeURIComponent(message)}`;
                        return (
                            <div key={index} className="bg-white rounded-lg shadow-md">
                                <img src={tour.image.src} alt={tour.title} className="w-full h-56 object-cover rounded-t-lg" />
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold mb-2">
                                        {tour.title}
                                    </h3>
                                    <p className="font-medium mb-2">
                                        {tour.days}
                                    </p>
                                    <p className="text-red-600 font-bold mb-3">

                                    </p>
                                    <p className="font-light mb-4">
                                        {tour.description}
                                    </p>
                                    <a href={waLink} target="_blank" className="inline-block px-4 py-2 bg-red-600 text-white rounded-md hover:bg-yellow-600">
                                        Consultar ahora
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