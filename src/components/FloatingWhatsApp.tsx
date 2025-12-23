
import React from 'react';

const FloatingWhatsApp: React.FC = () => {
    const phoneNumber = "51962353202";
    const message = "¡Hola! Perú Traditional Travel. Quisiera más información.";
    const waLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (

        <div className="fixed bottom-6 right-6 z-50">
            <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping duration-[3000ms]"></span>
            <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex items-center justify-center w-14 h-14 bg-green-500 rounded-full shadow-[0_0_15px_rgba(34,197,94,0.6)] hover:bg-green-600 hover:scale-110 transition-all duration-300"
                aria-label="Chatea con nosotros en WhatsApp"
            >
                <i className="fab fa-whatsapp text-white text-3xl"></i>
            </a>
        </div>
    );

};

export default FloatingWhatsApp;
