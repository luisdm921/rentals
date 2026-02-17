"use client";

import { FaStar, FaQuoteLeft } from "react-icons/fa";

export const Testimonials = () => {
  const testimonials = [
    {
      name: "María González",
      role: "Madre de familia",
      image: "/images/testimonials/maria.jpg",
      rating: 5,
      text: "Excelente servicio. Encontré la casa perfecta para mi familia en menos de una semana. El proceso fue muy transparente y el equipo siempre estuvo disponible para ayudarnos. ¡Totalmente recomendado!",
      location: "Polanco, CDMX",
    },
    {
      name: "Carlos Ramírez",
      role: "Profesionista independiente",
      image: "/images/testimonials/carlos.jpg",
      rating: 5,
      text: "Profesionales de principio a fin. Me ayudaron a encontrar una propiedad que se ajustara a mi presupuesto y necesidades. El contrato fue claro y sin complicaciones. Muy satisfecho con el servicio.",
      location: "Santa Fe, CDMX",
    },
    {
      name: "Ana Martínez",
      role: "Ingeniera",
      image: "/images/testimonials/ana.jpg",
      rating: 5,
      text: "La mejor experiencia rentando una casa. El equipo fue muy atento y paciente, mostrándome varias opciones hasta encontrar la indicada. El proceso de firma fue rápido y sin problemas.",
      location: "Coyoacán, CDMX",
    },
    {
      name: "Roberto Sánchez",
      role: "Empresario",
      image: "/images/testimonials/roberto.jpg",
      rating: 5,
      text: "Servicio de primera. Necesitaba rentar una casa para mi familia urgentemente y ellos lo hicieron posible. Muy profesionales y confiables. Sin duda volveré a utilizar sus servicios.",
      location: "Bosques, Edo. Méx.",
    },
    {
      name: "Laura Torres",
      role: "Doctora",
      image: "/images/testimonials/laura.jpg",
      rating: 5,
      text: "Increíble atención personalizada. Me asesoraron en todo momento y me ayudaron a encontrar exactamente lo que buscaba. Todo el proceso fue muy profesional y eficiente.",
      location: "San Ángel, CDMX",
    },
    {
      name: "Diego Fernández",
      role: "Arquitecto",
      image: "/images/testimonials/diego.jpg",
      rating: 5,
      text: "Muy recomendable. La plataforma es fácil de usar y el catálogo de propiedades es excelente. El equipo de soporte fue muy eficiente resolviendo todas mis dudas. ¡Excelente experiencia!",
      location: "Interlomas, Edo. Méx.",
    },
  ];

  return (
    <section id="testimonios" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider bg-blue-100 px-4 py-2 rounded-full">
              Testimonios
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
            Lo Que Dicen{" "}
            <span className="text-primary">Nuestros Clientes</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Miles de familias satisfechas han encontrado su hogar ideal con
            nosotros. Lee sus experiencias y descubre por qué somos la mejor opción.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-5xl text-primary/10">
                <FaQuoteLeft />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400 text-lg" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-600 leading-relaxed mb-6 relative z-10">
                "{testimonial.text}"
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-4 pt-6 border-t border-gray-200">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-xl font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-slate-800">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                  <p className="text-xs text-primary">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: "2,000+", label: "Familias Felices" },
            { number: "98%", label: "Satisfacción" },
            { number: "500+", label: "Propiedades" },
            { number: "15+", label: "Años de Experiencia" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
