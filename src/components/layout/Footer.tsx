"use client";

import {
  FaHome,
  FaPhone,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-12">
        {/* Main Content - Centered and Minimal */}
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Logo/Title */}
          <div className="flex items-center justify-center gap-3">
            <FaHome className="text-3xl text-blue-400" />
            <h3 className="text-2xl font-bold">Renta de Casas</h3>
          </div>

          {/* Quick Links */}
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-gray-400">
            <a href="#inicio" className="hover:text-white transition-colors">Inicio</a>
            <a href="#propiedades" className="hover:text-white transition-colors">Propiedades</a>
            <a href="#proceso" className="hover:text-white transition-colors">Proceso</a>
            <a href="#contacto" className="hover:text-white transition-colors">Contacto</a>
          </nav>

          {/* Contact Info - Minimal */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-gray-400 text-sm">
            <a href="tel:+528445841876" className="flex items-center gap-2 hover:text-white transition-colors">
              <FaPhone className="text-blue-400" />
              <span>844 584 1876</span>
            </a>
            <a href="mailto:contacto@rentacasas.com" className="flex items-center gap-2 hover:text-white transition-colors">
              <FaEnvelope className="text-blue-400" />
              <span>contacto@rentacasas.com</span>
            </a>
            <a href="https://wa.me/528445841876" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
              <FaWhatsapp className="text-green-400" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-800 pt-6">
            <p className="text-gray-500 text-sm">
              © {currentYear} Renta de Casas - Propiedades disponibles para ti
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
