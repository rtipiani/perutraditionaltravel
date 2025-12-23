import React, { useState } from 'react';

// Images
import arequipa from "../assets/images/recomendations/arequipa.png";
import cajamarca from "../assets/images/recomendations/cajamarca.png";
import chancay from "../assets/images/recomendations/chancay.png";
import cusco from "../assets/images/recomendations/cusco.png";
import huacachina from "../assets/images/recomendations/huacachina.png";
import oxapampa from "../assets/images/recomendations/oxapampa.png";
import puntaSal from "../assets/images/recomendations/punta-sal.png";
import tarapoto from "../assets/images/recomendations/tarapoto.png";
import trujillo from "../assets/images/recomendations/trujillo.png";

import slide1 from "../assets/images/slide1.png";
import slide2 from "../assets/images/slide2.png";
import slide3 from "../assets/images/slide3.png";

type Category = 'Todos' | 'Costa' | 'Sierra' | 'Selva';

interface GalleryItem {
    id: number;
    title: string;
    category: Category;
    image: ImageMetadata;
    description: string;
}

const galleryItems: GalleryItem[] = [
    { id: 1, title: 'Cusco Imperial', category: 'Sierra', image: cusco, description: 'La capital histórica del Perú.' },
    { id: 2, title: 'Playas de Punta Sal', category: 'Costa', image: puntaSal, description: 'Sol y playa en el norte.' },
    { id: 3, title: 'Oxapampa', category: 'Selva', image: oxapampa, description: 'Naturaleza y cultura austro-alemana.' },
    { id: 4, title: 'Huacachina', category: 'Costa', image: huacachina, description: 'El oasis de América.' },
    { id: 5, title: 'Tarapoto', category: 'Selva', image: tarapoto, description: 'La ciudad de las palmeras.' },
    { id: 6, title: 'Arequipa', category: 'Sierra', image: arequipa, description: 'La ciudad blanca.' },
    { id: 7, title: 'Chan Chan - Trujillo', category: 'Costa', image: trujillo, description: 'Historia pre-incaica.' },
    { id: 8, title: 'Cajamarca', category: 'Sierra', image: cajamarca, description: 'Carnavales y baños del inca.' },
    { id: 9, title: 'Castillo de Chancay', category: 'Costa', image: chancay, description: 'Cultura y diversión cerca de Lima.' }
];

const Gallery = () => {
    const [filter, setFilter] = useState<Category>('Todos');
    const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

    // Lock body scroll when modal is open
    React.useEffect(() => {
        if (selectedImage) {
            document.body.style.overflow = 'hidden';
            const handleEsc = (e: KeyboardEvent) => {
                if (e.key === 'Escape') setSelectedImage(null);
            };
            window.addEventListener('keydown', handleEsc);
            return () => {
                document.body.style.overflow = 'unset';
                window.removeEventListener('keydown', handleEsc);
            };
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [selectedImage]);

    const filteredItems = filter === 'Todos'
        ? galleryItems
        : galleryItems.filter(item => item.category === filter);

    const filters: Category[] = ['Todos', 'Costa', 'Sierra', 'Selva'];

    return (
        <div className="bg-gray-50 min-h-screen py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
                        Nuestra Galería
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
                        Descubre los paisajes más impresionantes del Perú a través de nuestra lente.
                    </p>

                    {/* Filters */}
                    <div className="flex flex-wrap justify-center gap-4">
                        {filters.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`
                                    px-8 py-3 rounded-full text-sm sm:text-base font-semibold transition-all duration-300 transform hover:scale-105 shadow-sm
                                    ${filter === cat
                                        ? 'bg-red-600 text-white shadow-red-500/30 shadow-lg ring-2 ring-red-600 ring-offset-2'
                                        : 'bg-white text-gray-600 hover:bg-gray-100 hover:text-gray-900 border border-gray-200'}
                                `}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 auto-rows-fr">
                    {filteredItems.map((item) => (
                        <div
                            key={item.id}
                            className="group relative h-80 overflow-hidden rounded-2xl cursor-pointer shadow-md hover:shadow-2xl transition-all duration-500 bg-gray-200"
                            onClick={() => setSelectedImage(item)}
                        >
                            <img
                                src={item.image.src}
                                alt={item.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                loading="lazy"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                <span className="inline-block px-3 py-1 bg-red-600 text-white text-xs font-bold rounded-full mb-2 w-fit transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                                    {item.category}
                                </span>
                                <h3 className="text-white text-xl font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                                    {item.title}
                                </h3>
                                <p className="text-gray-200 text-sm mt-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-150">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Empty State */}
                {filteredItems.length === 0 && (
                    <div className="text-center py-20">
                        <p className="text-gray-500 text-lg">No hay imágenes disponibles en esta categoría.</p>
                    </div>
                )}
            </div>

            {/* Lightbox / Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 transition-opacity duration-300"
                    onClick={() => setSelectedImage(null)}
                >
                    <button
                        onClick={() => setSelectedImage(null)}
                        className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors duration-200 focus:outline-none"
                    >
                        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    <div
                        className="relative max-w-7xl w-full max-h-[90vh] flex flex-col items-center"
                        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking content
                    >
                        <img
                            src={selectedImage.image.src}
                            alt={selectedImage.title}
                            className="max-h-[85vh] w-auto max-w-full object-contain rounded-lg shadow-2xl"
                        />
                        <div className="mt-4 text-center">
                            <h3 className="text-white text-2xl font-bold">{selectedImage.title}</h3>
                            <p className="text-gray-300 mt-2">{selectedImage.description}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Gallery;
