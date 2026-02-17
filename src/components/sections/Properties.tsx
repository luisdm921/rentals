"use client";

import { useState } from "react";
import Image from "next/image";
import { FaBed, FaBath, FaRulerCombined, FaMapMarkerAlt, FaImages } from "react-icons/fa";
import { PropertyGallery } from "../ui/PropertyGallery";

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
  description: string;
}

export const Properties = () => {
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  const properties: Property[] = [
    {
      id: 1,
      title: "Casa Moderna en Residencial Premium",
      location: "Polanco, CDMX",
      price: "$25,000",
      bedrooms: 3,
      bathrooms: 2.5,
      area: 180,
      images: [
        "/images/casa1.webp",
        "/images/cocina.avif",
        "/images/baño.avif",
        "/images/recamara.avif",
        "/images/estancia.avif",
        "/images/comedor.avif",
      ],
      featured: true,
      description:
        "Hermosa casa moderna ubicada en uno de los residenciales más exclusivos de Polanco. Cuenta con acabados de lujo, cocina integral, sala amplia, comedor y estudio. Estacionamiento para 2 autos. Seguridad 24/7 y áreas comunes con gimnasio, alberca y jardines.",
    },
    {
      id: 2,
      title: "Amplia Casa con Jardín",
      location: "Coyoacán, CDMX",
      price: "$18,000",
      bedrooms: 4,
      bathrooms: 3,
      area: 220,
      images: [
        "/images/casa2.jpg",
        "/images/cocina2.avif",
        "/images/baño2.avif",
        "/images/recamara2.avif",
        "/images/estancia2.avif",
        "/images/comedor2.avif",
      ],
      featured: true,
      description:
        "Espaciosa casa con amplio jardín perfecto para familias. Ubicada en zona tranquila y segura de Coyoacán. Incluye sala, comedor, cocina integral, cuarto de servicio, y cochera para 2 autos. Cerca de escuelas, parques y centros comerciales.",
    },
    {
      id: 3,
      title: "Casa Minimalista Recién Remodelada",
      location: "Santa Fe, CDMX",
      price: "$22,000",
      bedrooms: 3,
      bathrooms: 2,
      area: 160,
      images: [
        "/images/casa3.jpg",
        "/images/cocina.avif",
        "/images/baño.avif",
        "/images/recamara.avif",
        "/images/comedor.avif",
      ],
      featured: false,
      description:
        "Casa de diseño minimalista completamente remodelada. Acabados modernos, iluminación natural, cocina equipada. Ideal para profesionistas o parejas jóvenes. Cerca de centros comerciales, corporativos y vías principales.",
    },
    {
      id: 4,
      title: "Casa Familiar con Alberca",
      location: "Interlomas, Edo. Méx.",
      price: "$30,000",
      bedrooms: 5,
      bathrooms: 4,
      area: 300,
      images: [
        "/images/casa4.jpg",
        "/images/cocina2.avif",
        "/images/baño2.avif",
        "/images/recamara2.avif",
        "/images/estancia.avif",
        "/images/comedor.avif",
        "/images/estancia2.avif",
      ],
      featured: true,
      description:
        "Espectacular casa familiar con alberca privada y jardín amplio. Recámaras con baño completo, estudio, cuarto de TV, cocina integral de lujo. Zona residencial premium con seguridad 24/7, áreas verdes y club deportivo. Estacionamiento para 3 autos.",
    },
    {
      id: 5,
      title: "Casa Acogedora en Zona Tranquila",
      location: "San Ángel, CDMX",
      price: "$16,000",
      bedrooms: 2,
      bathrooms: 2,
      area: 140,
      images: [
        "/images/casa5.jpg",
        "/images/cocina.avif",
        "/images/baño.avif",
        "/images/recamara.avif",
        "/images/comedor2.avif",
      ],
      featured: false,
      description:
        "Acogedora casa perfecta para pareja o persona sola. Ubicación privilegiada en San Ángel, cerca de museos, restaurantes y transporte público. Bien iluminada, con pequeño patio trasero. Incluye estacionamiento.",
    },
    {
      id: 6,
      title: "Casa de Lujo con Acabados Premium",
      location: "Bosques de las Lomas",
      price: "$45,000",
      bedrooms: 4,
      bathrooms: 4.5,
      area: 350,
      images: [
        "/images/casa1.webp",
        "/images/cocina2.avif",
        "/images/baño2.avif",
        "/images/recamara2.avif",
        "/images/estancia2.avif",
        "/images/comedor2.avif",
        "/images/cocina.avif",
        "/images/baño.avif",
      ],
      featured: true,
      description:
        "Casa de lujo con los mejores acabados premium. Arquitectura contemporánea, domótica integrada, cocina gourmet, wine cellar, home theater. Jardín con terraza techada y área BBQ. Residencial exclusivo con amenidades de primer nivel. Estacionamiento para 4 autos.",
    },
  ];

  const openGallery = (property: Property) => {
    setSelectedProperty(property);
    setIsGalleryOpen(true);
  };

  const closeGallery = () => {
    setIsGalleryOpen(false);
    setTimeout(() => setSelectedProperty(null), 300);
  };

  return (
    <section id="propiedades" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider bg-blue-100 px-4 py-2 rounded-full">
              Propiedades Destacadas
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
            Encuentra tu <span className="text-primary">Hogar Ideal</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explora nuestro catálogo de propiedades cuidadosamente seleccionadas y
            verificadas para garantizar tu satisfacción.
          </p>
        </div>

        {/* Properties Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <div
              key={property.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
            >
              {/* Image */}
              <div
                onClick={() => openGallery(property)}
                className="relative h-64 w-full bg-gradient-to-br from-gray-200 to-gray-300 overflow-hidden cursor-pointer"
              >
                {/* Photo count badge */}
                <div className="absolute bottom-4 right-4 z-10 bg-black/70 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                  <FaImages />
                  <span>{property.images.length} fotos</span>
                </div>
                {/* Property Image */}
                <Image
                  src={property.images[0]}
                  alt={property.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-semibold text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Ver Galería
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-slate-800 line-clamp-2 flex-1">
                    {property.title}
                  </h3>
                </div>

                <div className="flex items-center gap-2 text-gray-600 mb-4">
                  <FaMapMarkerAlt className="text-primary" />
                  <span className="text-sm">{property.location}</span>
                </div>

                <div className="flex items-center gap-4 mb-4 pb-4 border-b border-gray-200">
                  <div className="flex items-center gap-2 text-gray-600">
                    <FaBed className="text-primary" />
                    <span className="text-sm">{property.bedrooms} Rec</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <FaBath className="text-primary" />
                    <span className="text-sm">{property.bathrooms} Baños</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <FaRulerCombined className="text-primary" />
                    <span className="text-sm">{property.area} m²</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Precio mensual</p>
                    <p className="text-2xl font-bold text-primary">
                      {property.price}
                      <span className="text-sm text-gray-500 font-normal">/mes</span>
                    </p>
                  </div>
                  <button
                    onClick={() => openGallery(property)}
                    className="px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-secondary transition-colors duration-300 shadow-lg hover:shadow-xl"
                  >
                    Ver Galería
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="#contacto"
            className="inline-block px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
          >
            Ver Todas las Propiedades
          </a>
        </div>
      </div>

      {/* Property Gallery Modal */}
      <PropertyGallery
        property={selectedProperty}
        isOpen={isGalleryOpen}
        onClose={closeGallery}
      />
    </section>
  );
};
