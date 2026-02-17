"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
  FaBed,
  FaBath,
  FaRulerCombined,
  FaMapMarkerAlt,
  FaHome,
  FaWhatsapp,
} from "react-icons/fa";

interface Property {
  id: number;
  title: string;
  location: string;
  price: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  images: string[];
  featured: boolean;
  description?: string;
}

interface PropertyGalleryProps {
  property: Property | null;
  isOpen: boolean;
  onClose: () => void;
}

export const PropertyGallery = ({
  property,
  isOpen,
  onClose,
}: PropertyGalleryProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Reset image index when property changes
  useEffect(() => {
    setCurrentImageIndex(0);
  }, [property]);

  // Close on ESC key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!property || !isOpen) return null;

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === property.images.length - 1 ? 0 : prev + 1
    );
  };

  const previousImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? property.images.length - 1 : prev - 1
    );
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-0 md:p-4 animate-in fade-in duration-300"
      onClick={handleBackdropClick}
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-2 right-2 md:top-4 md:right-4 z-[110] w-10 h-10 md:w-12 md:h-12 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
        aria-label="Cerrar galería"
      >
        <FaTimes className="text-xl md:text-2xl" />
      </button>

      {/* Main Content */}
      <div className="w-full h-full md:h-auto max-w-[1600px] mx-auto md:p-0">
        <div className="grid lg:grid-cols-5 gap-0 md:gap-6 h-full md:h-auto">
          {/* Gallery Section - 3 columns */}
          <div className="lg:col-span-3 flex flex-col h-full md:h-auto">
            {/* Main Image */}
            <div className="relative h-[75vh] md:h-auto md:aspect-[16/10] bg-gradient-to-br from-gray-800 to-gray-900 md:rounded-2xl overflow-hidden mb-0 md:mb-4 group">
              {/* Property Image */}
              <Image
                src={property.images[currentImageIndex]}
                alt={`${property.title} - Imagen ${currentImageIndex + 1}`}
                fill
                className="object-contain md:object-cover"
                sizes="(max-width: 768px) 100vw, 66vw"
                priority
              />

              {/* Image Counter */}
              <div className="absolute top-2 left-2 md:top-4 md:left-4 bg-black/60 backdrop-blur-sm text-white px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium z-10">
                {currentImageIndex + 1} / {property.images.length}
              </div>

              {/* Navigation Arrows */}
              {property.images.length > 1 && (
                <>
                  <button
                    onClick={previousImage}
                    className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 w-12 h-12 md:w-12 md:h-12 bg-white/90 md:bg-white/10 hover:bg-white md:hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-800 md:text-white transition-all duration-300 shadow-lg md:shadow-none md:opacity-0 md:group-hover:opacity-100 z-10"
                    aria-label="Imagen anterior"
                  >
                    <FaChevronLeft className="text-xl" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-3 md:right-4 top-1/2 -translate-y-1/2 w-12 h-12 md:w-12 md:h-12 bg-white/90 md:bg-white/10 hover:bg-white md:hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-800 md:text-white transition-all duration-300 shadow-lg md:shadow-none md:opacity-0 md:group-hover:opacity-100 z-10"
                    aria-label="Imagen siguiente"
                  >
                    <FaChevronRight className="text-xl" />
                  </button>
                </>
              )}
            </div>

            {/* Mobile Info Section - Below image */}
            <div className="md:hidden bg-gradient-to-br from-gray-900 to-black text-white p-4 flex-shrink-0">
              <h3 className="font-bold text-xl mb-2">
                {property.title}
              </h3>
              <div className="flex items-center gap-2 text-white/80 text-sm mb-3">
                <FaMapMarkerAlt />
                <span>{property.location}</span>
              </div>
              <div className="flex items-center justify-between mb-3 pb-3 border-b border-white/10">
                <p className="font-bold text-2xl">
                  {property.price}<span className="text-sm font-normal text-white/70">/mes</span>
                </p>
                <div className="flex items-center gap-4 text-sm">
                  <span className="flex items-center gap-1">
                    <FaBed className="text-base" />
                    {property.bedrooms}
                  </span>
                  <span className="flex items-center gap-1">
                    <FaBath className="text-base" />
                    {property.bathrooms}
                  </span>
                  <span className="flex items-center gap-1">
                    <FaRulerCombined className="text-base" />
                    {property.area}m²
                  </span>
                </div>
              </div>
              <a
                href={`https://wa.me/528445841876?text=${encodeURIComponent(
                  `¡Hola! Me interesa obtener más información sobre esta propiedad:\n\n*${property.title}*\nUbicación: ${property.location}\nPrecio: ${property.price}/mes\nRecámaras: ${property.bedrooms}\nBaños: ${property.bathrooms}\nÁrea: ${property.area} m²\n\n¿Podrían brindarme más detalles y agendar una visita?`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-green-500 hover:bg-green-600 text-white rounded-xl font-semibold transition-all duration-300"
              >
                <FaWhatsapp className="text-lg" />
                <span>Contactar por WhatsApp</span>
              </a>
            </div>

            {/* Thumbnails - Hidden on mobile */}
            <div className="hidden md:grid grid-cols-3 lg:grid-cols-5 gap-2">
              {property.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`relative aspect-video bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg overflow-hidden transition-all duration-300 ${
                    currentImageIndex === index
                      ? "ring-4 ring-primary scale-105"
                      : "hover:scale-105 opacity-60 hover:opacity-100"
                  }`}
                >
                  <Image
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 20vw, 15vw"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Property Details - 2 columns - Hidden on mobile, full panel on desktop */}
          <div className="hidden md:block lg:col-span-2 bg-white rounded-2xl p-6 lg:p-8 max-h-[90vh] overflow-y-auto">
            {/* Title */}
            <h2 className="text-2xl lg:text-3xl font-bold text-slate-800 mb-3">
              {property.title}
            </h2>

            {/* Location */}
            <div className="flex items-center gap-2 text-gray-600 mb-6">
              <FaMapMarkerAlt className="text-primary" />
              <span>{property.location}</span>
            </div>

            {/* Price */}
            <div className="mb-6 pb-6 border-b border-gray-200">
              <p className="text-sm text-gray-500 mb-1">Precio mensual</p>
              <p className="text-3xl font-bold text-primary">
                {property.price}
                <span className="text-sm text-gray-500 font-normal">/mes</span>
              </p>
            </div>

            {/* Specs */}
            <div className="grid grid-cols-3 gap-4 mb-6 pb-6 border-b border-gray-200">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-2">
                  <FaBed className="text-2xl text-primary" />
                </div>
                <p className="text-sm text-gray-500">Recámaras</p>
                <p className="text-lg font-bold text-slate-800">
                  {property.bedrooms}
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-2">
                  <FaBath className="text-2xl text-primary" />
                </div>
                <p className="text-sm text-gray-500">Baños</p>
                <p className="text-lg font-bold text-slate-800">
                  {property.bathrooms}
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-2">
                  <FaRulerCombined className="text-2xl text-primary" />
                </div>
                <p className="text-sm text-gray-500">Área</p>
                <p className="text-lg font-bold text-slate-800">
                  {property.area} m²
                </p>
              </div>
            </div>

            {/* Description */}
            {property.description && (
              <div className="mb-6">
                <h3 className="text-lg font-bold text-slate-800 mb-3">
                  Descripción
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {property.description}
                </p>
              </div>
            )}

            {/* CTA Buttons */}
            <div className="space-y-3">
              <a
                href="#contacto"
                onClick={onClose}
                className="block w-full px-6 py-4 bg-gradient-to-r from-primary to-secondary text-white text-center rounded-lg font-semibold hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                Agendar Visita
              </a>
              <a
                href={`https://wa.me/528445841876?text=${encodeURIComponent(
                  `¡Hola! Me interesa obtener más información sobre esta propiedad:\n\n*${property.title}*\nUbicación: ${property.location}\nPrecio: ${property.price}/mes\nRecámaras: ${property.bedrooms}\nBaños: ${property.bathrooms}\nÁrea: ${property.area} m²\n\n¿Podrían brindarme más detalles y agendar una visita?`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full px-6 py-4 bg-green-500 text-white text-center rounded-lg font-semibold hover:bg-green-600 transition-all duration-300 hover:scale-105"
              >
                Contactar por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
