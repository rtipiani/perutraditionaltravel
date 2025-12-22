import React, { useEffect, useRef, useState } from "react";

import slide1 from "../assets/images/slide1.png";
import slide2 from "../assets/images/slide2.png";
import slide3 from "../assets/images/slide3.png";

const slides = [
    {
        src: slide1.src,
        alt: "Disfruta del paraíso caribeño, sus playas y arena blanca.",
        title: "Punta Cana",
        description: "Disfruta del paraíso caribeño, sus playas y arena blanca.",
        whatsappLink: `https://wa.me/51962353202?text=${encodeURIComponent("¡Hola! Perú Traditional Travel. Estoy interesad@ en el paquete Punta Cana.")}`
    },
    {
        src: slide2.src,
        alt: "Descubre la ciudad amurallada de arquitectura colonial y sus playas.",
        title: "Cartagena",
        description: "Descubre la ciudad amurallada de arquitectura colonial y sus playas.",
        whatsappLink: `https://wa.me/51962353202?text=${encodeURIComponent("¡Hola! Perú Traditional Travel. Estoy interesad@ en el paquete Cartagena.")}`
    },
    {
        src: slide3.src,
        alt: "Famosa por su increíble fusión de arquitectura inca y colonial.",
        title: "Cusco",
        description: "Famosa por su increíble fusión de arquitectura inca y colonial.",
        whatsappLink: `https://wa.me/51962353202?text=${encodeURIComponent("¡Hola! Perú Traditional Travel. Estoy interesad@ en el paquete Cusco.")}`
    }
];

const Slider: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const sliderRef = useRef<HTMLDivElement>(null);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    const updateSlide = (index: number) => {
        if (!sliderRef.current) return;
        const totalSlides = slides.length;
        const newIndex = (index + totalSlides) % totalSlides;
        setCurrentSlide(newIndex);
    };

    useEffect(() => {
        startAutoSlide();
        return stopAutoSlide;
    }, []);

    const startAutoSlide = () => {
        stopAutoSlide();
        intervalRef.current = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
    };

    const stopAutoSlide = () => {
        if (intervalRef.current) clearInterval(intervalRef.current);
    };

    useEffect(() => {
        if (sliderRef.current) {
            sliderRef.current.style.transform = `translateX(-${currentSlide * 100}%)`;
        }
    }, [currentSlide]);

    return (
        <section className="relative w-full h-screen overflow-hidden">
            <div ref={sliderRef} className="flex transition-transform duration-700 ease-in-out h-full">
                {slides.map((slide, i) => (
                    <div key={i} className="relative flex shrink-0 w-full h-full">
                        <img
                            src={slide.src}
                            alt={slide.alt}
                            className="w-full h-full object-cover contrast-[1.1] brightness-[1.05] saturate-[1.1]"
                            loading={i === 0 ? "eager" : "lazy"}
                            style={{ imageRendering: "auto" }} // Ensure browser uses best interpolation
                        />
                        <div className="absolute inset-0 bg-black/45 flex flex-col justify-center items-center text-center px-4 md:px-8 lg:px-12 text-white">
                            <h1 className="text-3xl sm:text-6xl md:text-7xl font-semibold leading-tight tracking-wide mb-1">
                                {slide.title}
                            </h1>
                            <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed mb-3 max-w-[90%] lg:max-w-[70%]">
                                {slide.description}
                            </p>
                            <a
                                href={slide.whatsappLink}
                                className="inline-flex items-center bg-red-600 text-white hover:bg-yellow-600 px-4 py-2 sm:px-6 sm:py-3 rounded-full text-sm sm:text-base font-semibold hover:scale-95 transition duration-300"
                                target="_blank"
                                aria-label={`Consulta sobre ${slide.title} vía whatsapp`}
                            >
                                Consultar ahora
                                <i className="fa-brands fa-whatsapp"></i>
                            </a>
                        </div>
                    </div>
                ))}
            </div>

            <button
                onClick={() => {
                    stopAutoSlide();
                    updateSlide(currentSlide - 1);
                    startAutoSlide();
                }}
                className="bg-black/40 absolute top-1/2 left-4 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 flex justify-center items-center rounded-full text-white transition transform cursor-pointer"
                title="Slide anterior"
                aria-label="Anterior"
            >
                <i className="fa-solid fa-chevron-left"></i>
            </button>

            <button
                onClick={() => {
                    stopAutoSlide();
                    updateSlide(currentSlide + 1);
                    startAutoSlide();
                }}
                className="bg-black/40 absolute top-1/2 right-4 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 flex justify-center items-center rounded-full text-white transition transform cursor-pointer"
                title="Slide siguiente"
                aria-label="Siguiente"
            >
                <i className="fa-solid fa-chevron-right"></i>
            </button>

            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
                {slides.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => {
                            stopAutoSlide();
                            updateSlide(i);
                            startAutoSlide();
                        }}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${i === currentSlide
                            ? "bg-white scale-110"
                            : "bg-gray-300 opacity-70 hover:opacity-100"
                            }`}
                        aria-label={`Ir al slide ${i + 1}`}
                    ></button>
                ))}
            </div>
        </section>
    )
};

export default Slider;