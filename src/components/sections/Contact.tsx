"use client";

import { useState } from "react";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaWhatsapp,
  FaPaperPlane,
} from "react-icons/fa";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "Información General",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // You can add your form submission logic here
    alert("¡Gracias por contactarnos! Nos pondremos en contacto pronto.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "Información General",
      message: "",
    });
  };

  const contactInfo = [
    {
      icon: FaPhone,
      title: "Teléfono",
      content: "+52 844 584 1876",
      link: "tel:+528445841876",
      color: "text-blue-500",
      bg: "bg-blue-100",
    },
    {
      icon: FaWhatsapp,
      title: "WhatsApp",
      content: "+52 844 584 1876",
      link: "https://wa.me/528445841876",
      color: "text-green-500",
      bg: "bg-green-100",
    },
    {
      icon: FaEnvelope,
      title: "Email",
      content: "info@rentadecasas.com",
      link: "mailto:info@rentadecasas.com",
      color: "text-purple-500",
      bg: "bg-purple-100",
    },
    {
      icon: FaMapMarkerAlt,
      title: "Dirección",
      content: "Calle Principal #123, Col. Centro, CDMX",
      link: "#",
      color: "text-orange-500",
      bg: "bg-orange-100",
    },
  ];

  return (
    <section id="contacto" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider bg-blue-100 px-4 py-2 rounded-full">
              Contáctame
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
            ¿Te Interesa Alguna{" "}
            <span className="text-primary">Propiedad?</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Escríbeme o llámame directamente. Con gusto te muestro las propiedades
            y resuelvo todas tus dudas.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-bold text-slate-800 mb-6">
              Envíanos un Mensaje
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Nombre Completo *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                  placeholder="Tu nombre"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Teléfono *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                    placeholder="55 1234 5678"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Asunto *
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                >
                  <option>Información General</option>
                  <option>Agendar Visita</option>
                  <option>Consulta de Propiedad</option>
                  <option>Proceso de Renta</option>
                  <option>Otro</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Mensaje *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Cuéntanos en qué podemos ayudarte..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
              >
                Enviar Mensaje
                <FaPaperPlane />
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="grid gap-6">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  target={info.title === "WhatsApp" ? "_blank" : undefined}
                  rel={info.title === "WhatsApp" ? "noopener noreferrer" : undefined}
                  className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex items-center gap-4 group"
                >
                  <div
                    className={`${info.bg} w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <info.icon className={`text-2xl ${info.color}`} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-500 text-sm mb-1">
                      {info.title}
                    </h4>
                    <p className="text-slate-800 font-medium">{info.content}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Business Hours */}
            <div className="bg-gradient-to-br from-primary to-secondary p-8 rounded-2xl text-white shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <FaClock className="text-3xl" />
                <h3 className="text-2xl font-bold">Horarios de Atención</h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center pb-3 border-b border-white/20">
                  <span>Lunes - Viernes</span>
                  <span className="font-semibold">9:00 - 18:00</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-white/20">
                  <span>Sábado</span>
                  <span className="font-semibold">10:00 - 14:00</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Domingo</span>
                  <span className="font-semibold">Cerrado</span>
                </div>
              </div>
              <p className="mt-6 text-sm text-blue-100">
                * También disponemos de visitas con cita previa fuera de horario
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
