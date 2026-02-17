"use client";

import {
  FaCheckCircle,
  FaHeadset,
  FaFileContract,
  FaKey,
  FaHome,
  FaShieldAlt,
  FaClock,
  FaMoneyBillWave,
} from "react-icons/fa";

export const Features = () => {
  const features = [
    {
      icon: FaCheckCircle,
      title: "Propiedades Verificadas",
      description:
        "Todas nuestras propiedades pasan por un riguroso proceso de verificación y validación.",
      color: "from-green-500 to-emerald-600",
    },
    {
      icon: FaHeadset,
      title: "Atención 24/7",
      description:
        "Soporte y asesoría disponible en todo momento para resolver tus dudas y necesidades.",
      color: "from-blue-500 to-cyan-600",
    },
    {
      icon: FaFileContract,
      title: "Contratos Seguros",
      description:
        "Documentación legal completa y transparente para proteger tus derechos como inquilino.",
      color: "from-purple-500 to-violet-600",
    },
    {
      icon: FaKey,
      title: "Proceso Rápido",
      description:
        "Agilizamos todos los trámites para que puedas mudarte lo antes posible a tu nuevo hogar.",
      color: "from-orange-500 to-amber-600",
    },
    {
      icon: FaHome,
      title: "Visitas Virtuales",
      description:
        "Recorridos virtuales en 360° para conocer las propiedades desde la comodidad de tu hogar.",
      color: "from-pink-500 to-rose-600",
    },
    {
      icon: FaShieldAlt,
      title: "Seguro de Renta",
      description:
        "Opciones de seguro para proteger tu depósito y garantizar una renta sin preocupaciones.",
      color: "from-indigo-500 to-blue-600",
    },
    {
      icon: FaClock,
      title: "Flexibilidad",
      description:
        "Planes de renta adaptables a tus necesidades con opciones de corto y largo plazo.",
      color: "from-teal-500 to-green-600",
    },
    {
      icon: FaMoneyBillWave,
      title: "Sin Comisiones Ocultas",
      description:
        "Precios transparentes sin costos adicionales sorpresa. Lo que ves es lo que pagas.",
      color: "from-yellow-500 to-orange-600",
    },
  ];

  return (
    <section id="caracteristicas" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider bg-blue-100 px-4 py-2 rounded-full">
              Características
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
            ¿Por Qué <span className="text-primary">Elegirnos?</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Ofrecemos un servicio integral con las mejores garantías y beneficios
            para hacer de tu experiencia de renta algo excepcional.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              {/* Icon Container */}
              <div
                className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}
              >
                <feature.icon className="text-3xl text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-primary transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>

              {/* Decorative Element */}
              <div
                className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 rounded-bl-full transition-opacity duration-300`}
              />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-primary/10 to-secondary/10 p-8 md:p-12 rounded-3xl">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
              ¿Listo para encontrar tu hogar ideal?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Contáctanos ahora y recibe asesoría personalizada completamente
              gratuita. ¡Estamos aquí para ayudarte!
            </p>
            <a
              href="#contacto"
              className="inline-block px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              Contactar Ahora
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
