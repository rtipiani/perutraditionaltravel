import React from "react";
import logo from "../assets/logo.png";

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-900 text-white pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand Section */}
                    <div>
                        <div className="bg-white p-2 rounded-lg inline-block mb-6">
                            <img src={logo.src} alt="Perú Traditional Travel" className="h-12 object-contain" />
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6">
                            Descubre la magia del Perú con nosotros. Experiencias auténticas, guías expertos y destinos inolvidables te esperan.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-red-600 transition-colors duration-300">
                                <i className="fab fa-facebook-f text-white"></i>
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-pink-600 transition-colors duration-300">
                                <i className="fab fa-instagram text-white"></i>
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-black transition-colors duration-300 border border-gray-700">
                                <i className="fab fa-tiktok text-white"></i>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-bold mb-6 text-white border-b-2 border-red-600 inline-block pb-1">Menú Principal</h3>
                        <ul className="space-y-3">
                            <li><a href="/" className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-300 inline-block">Inicio</a></li>
                            <li><a href="/nosotros" className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-300 inline-block">Nosotros</a></li>
                            <li><a href="/programas-escolares" className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-300 inline-block">Programas Escolares</a></li>
                            <li><a href="/full-day" className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-300 inline-block">Full Day</a></li>
                            <li><a href="/galeria" className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-300 inline-block">Galería</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-xl font-bold mb-6 text-white border-b-2 border-red-600 inline-block pb-1">Contacto</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <i className="fas fa-map-marker-alt text-red-600 mt-1 mr-3"></i>
                                <span className="text-gray-400 text-sm">Oxapampa, Pasco, Perú</span>
                            </li>
                            <li className="flex items-center">
                                <i className="fas fa-phone-alt text-red-600 mr-3"></i>
                                <a href="tel:+51962353202" className="text-gray-400 hover:text-white transition-colors">962 353 202</a>
                            </li>
                            <li className="flex items-center">
                                <i className="fab fa-whatsapp text-red-600 mr-3"></i>
                                <a href="https://wa.me/51962353202" target="_blank" className="text-gray-400 hover:text-white transition-colors">WhatsApp Directo</a>
                            </li>
                            <li className="flex items-center">
                                <i className="fas fa-envelope text-red-600 mr-3"></i>
                                <span className="text-gray-400 text-sm">informes@perutraditionaltravel.com</span>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter or CTA */}
                    <div>
                        <h3 className="text-xl font-bold mb-6 text-white border-b-2 border-red-600 inline-block pb-1">Reserva tu viaje</h3>
                        <p className="text-gray-400 text-sm mb-4">¿Listo para la aventura? Contáctanos hoy mismo y planifica tu próxima experiencia.</p>
                        <a
                            href="https://wa.me/51962353202?text=¡Hola!%20Perú%20Traditional%20Travel.%20Quisiera%20más%20información%20sobre%20sus%20tours."
                            target="_blank"
                            className="w-full block bg-red-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors shadow-lg hover:shadow-red-900/50"
                        >
                            <i className="fab fa-whatsapp mr-2"></i> Chatea con nosotros
                        </a>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 text-center">
                    <p className="text-gray-500 text-sm">
                        © {new Date().getFullYear()} Perú Traditional Travel. Todos los reservchos reservados.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
