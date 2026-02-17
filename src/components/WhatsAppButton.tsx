"use client";

import { useState, useEffect } from "react";
import { FaWhatsapp, FaTimes } from "react-icons/fa";

export const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  // Phone number - Replace with actual WhatsApp number
  const phoneNumber = "528445841876"; // Format: country code + number (no + or spaces)
  const message = encodeURIComponent(
    "¡Hola! Me interesa obtener información sobre las casas en renta disponibles."
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  useEffect(() => {
    // Show button after scrolling
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    
    // Show tooltip after 5 seconds on first load
    const tooltipTimer = setTimeout(() => {
      setShowTooltip(true);
      setTimeout(() => setShowTooltip(false), 5000); // Hide after 5 seconds
    }, 5000);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(tooltipTimer);
    };
  }, []);

  return (
    <>
      {/* WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0 pointer-events-none"
        }`}
        aria-label="Contactar por WhatsApp"
      >
        <div className="relative group">
          {/* Tooltip */}
          <div
            className={`absolute bottom-full right-0 mb-3 w-64 bg-white rounded-2xl shadow-2xl p-4 transition-all duration-300 ${
              showTooltip
                ? "opacity-100 visible translate-y-0"
                : "opacity-0 invisible translate-y-2"
            }`}
          >
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setShowTooltip(false);
              }}
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
              aria-label="Cerrar"
            >
              <FaTimes className="text-sm" />
            </button>
            <div className="flex items-start gap-3">
              <div className="bg-green-100 p-2 rounded-xl flex-shrink-0">
                <FaWhatsapp className="text-2xl text-green-500" />
              </div>
              <div>
                <h4 className="font-bold text-slate-800 mb-1 text-sm">
                  ¿Necesitas ayuda?
                </h4>
                <p className="text-xs text-gray-600">
                  Chatea con nosotros en WhatsApp para obtener asesoría personalizada
                </p>
              </div>
            </div>
            {/* Arrow */}
            <div className="absolute bottom-0 right-6 transform translate-y-full">
              <div className="w-3 h-3 bg-white transform rotate-45 -translate-y-1.5" />
            </div>
          </div>

          {/* Main Button */}
          <div className="relative">
            {/* Pulse Animation */}
            <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-75" />
            
            {/* Button */}
            <div className="relative bg-green-500 hover:bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl hover:shadow-green-500/50 transition-all duration-300 hover:scale-110">
              <FaWhatsapp className="text-3xl" />
            </div>
          </div>

          {/* Hover Tooltip */}
          <div className="absolute bottom-full right-0 mb-3 w-48 bg-slate-800 text-white px-4 py-2 rounded-lg text-sm opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap">
            Chatea con nosotros
            <div className="absolute bottom-0 right-6 transform translate-y-full">
              <div className="w-2 h-2 bg-slate-800 transform rotate-45 -translate-y-1" />
            </div>
          </div>
        </div>
      </a>
    </>
  );
};
