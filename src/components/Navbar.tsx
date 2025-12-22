import logo from "../assets/logo.png";
import React, { useState, useEffect } from "react";

const menu = [
    { label: "Inicio", href: "/" },
    { label: "Nosotros", href: "/nosotros" },
    { label: "Programas Escolares", href: "/programas-escolares" },
    { label: "Full Day", href: "/full-day" },
    { label: "Galería", href: "/galeria" },
];

const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activePath, setActivePath] = useState(window.location.pathname);

    // Detecta navegación entre páginas en Astro
    useEffect(() => {
        const updatePath = () => setActivePath(window.location.pathname);

        // Detectar navegación usando botones del navegador
        window.addEventListener("popstate", updatePath);

        // Detectar clicks en enlaces
        document.body.addEventListener("click", (e) => {
            const target = e.target as HTMLElement;
            const link = target.closest("a");
            if (link && link.href.startsWith(window.location.origin)) {
                setTimeout(updatePath, 50); // esperar a que Astro cambie la página
            }
        });

        return () => {
            window.removeEventListener("popstate", updatePath);
        };
    }, []);

    const linkClass = (path: string) =>
        `transition duration-200 ${activePath === path
            ? "text-red-600 font-bold border-b-2 border-red-600"
            : "text-orange-800 hover:text-red-600"
        }`;

    return (
        <nav className="bg-white py-4 shadow-md relative z-50">
            <div className="container mx-auto flex justify-between items-center px-4 lg:px-6">
                <a href="/" className="flex items-center z-50 relative">
                    <img
                        src={logo.src}
                        alt="Angela Aventura Tours"
                        className="h-12 lg:h-16 object-contain"
                    />
                </a>

                {/* MENU DESKTOP */}
                <ul className="hidden lg:flex items-center space-x-6 text-lg font-medium">
                    {menu.map((item, i) => (
                        <li key={i}>
                            <a href={item.href} className={linkClass(item.href)}>
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* BOTÓN MOBILE */}
                <button
                    type="button"
                    title="Abrir menú"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="lg:hidden text-3xl text-red-600 z-50 relative focus:outline-none"
                >
                    <i
                        className={`fas ${isMenuOpen ? "fa-times" : "fa-bars"
                            } transition-transform duration-300 ${isMenuOpen ? "rotate-90" : ""}`}
                    />
                </button>
            </div>

            {/* BACKDROP MOBILE */}
            <div
                className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 lg:hidden ${isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
                    }`}
                onClick={() => setIsMenuOpen(false)}
            />

            {/* MENU MOBILE */}
            <div
                className={`fixed top-0 right-0 h-full w-[80%] max-w-sm bg-white shadow-2xl z-50 transform transition-all duration-500 ease-in-out lg:hidden ${isMenuOpen
                        ? "translate-x-0 opacity-100 scale-100"
                        : "translate-x-full opacity-0 scale-95"
                    }`}
            >
                <div className="flex flex-col h-full pt-6 pb-6 px-6 overflow-y-auto">
                    <button
                        type="button"
                        className="self-end text-3xl text-red-600 mb-6 focus:outline-none"
                        onClick={() => setIsMenuOpen(false)}
                        aria-label="Cerrar menú"
                    >
                        <i className="fas fa-times" />
                    </button>

                    <ul className="flex flex-col space-y-4 text-lg font-medium text-orange-900">
                        {menu.map((item, i) => (
                            <li key={i} className="border-b border-orange-100 pb-2">
                                <a
                                    href={item.href}
                                    className={`block py-2 hover:text-red-600 transition-colors ${activePath === item.href ? "text-red-600 font-bold" : "text-orange-800"
                                        }`}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <div className="mt-auto pt-8">
                        <a
                            href="/contactanos"
                            className="block w-full text-center bg-red-600 text-white font-bold py-3 rounded-lg shadow-lg hover:bg-red-700 transition-transform transform hover:scale-105"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Reserva Ahora
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
