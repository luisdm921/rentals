"use client";

import {
  FaSearch,
  FaCalendarCheck,
  FaFileSignature,
  FaKey,
  FaArrowRight,
} from "react-icons/fa";

export const Process = () => {
  const steps = [
    {
      number: "01",
      icon: FaSearch,
      title: "Mira las Casas",
      description:
        "Revisa las fotos de mis propiedades disponibles y elige las que te gusten.",
      color: "from-blue-500 to-cyan-500",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      number: "02",
      icon: FaCalendarCheck,
      title: "Agenda tu Visita",
      description:
        "Contáctame y agendamos una cita. Yo mismo te muestro la casa y resuelvo todas tus dudas.",
      color: "from-green-500 to-emerald-500",
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
    },
    {
      number: "03",
      icon: FaFileSignature,
      title: "Firma el Contrato",
      description:
        "Si te gusta la casa, revisamos juntos el contrato. Todo es claro y directo, sin sorpresas.",
      color: "from-purple-500 to-violet-500",
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600",
    },
    {
      number: "04",
      icon: FaKey,
      title: "¡Múdate!",
      description:
        "Recibes las llaves y listo. Cualquier cosa que necesites, me hablas directamente.",
      color: "from-orange-500 to-amber-500",
      iconBg: "bg-orange-100",
      iconColor: "text-orange-600",
    },
  ];

  return (
    <section id="proceso" className="py-12 md:py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10 md:mb-16">
          <div className="inline-block mb-3 md:mb-4">
            <span className="text-primary font-semibold text-xs md:text-sm uppercase tracking-wider bg-blue-100 px-3 md:px-4 py-1.5 md:py-2 rounded-full">
              Proceso de Renta
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-slate-800 mb-4 md:mb-6 px-4">
            Así de simple en{" "}
            <span className="text-primary">4 Pasos</span>
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto px-4">
            Es muy fácil. Solo sigue estos pasos y en poco tiempo estarás en tu nuevo hogar.
          </p>
        </div>

        {/* Process Steps */}
        <div className="max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div
                className={`flex flex-col md:flex-row gap-6 md:gap-8 items-center ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                } mb-8 md:mb-12`}
              >
                {/* Content */}
                <div className="flex-1 space-y-3 md:space-y-4 text-center md:text-left">
                  <div className="flex items-center gap-3 md:gap-4 justify-center md:justify-start">
                    <span
                      className={`text-4xl md:text-6xl font-bold bg-gradient-to-br ${step.color} bg-clip-text text-transparent`}
                    >
                      {step.number}
                    </span>
                    <div
                      className={`${step.iconBg} w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl flex items-center justify-center`}
                    >
                      <step.icon className={`text-xl md:text-2xl ${step.iconColor}`} />
                    </div>
                  </div>
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-slate-800">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Visual Element - Hidden on mobile */}
                <div className="hidden md:flex flex-1 justify-center">
                  <div
                    className={`w-full max-w-sm h-64 rounded-3xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-2xl transform hover:scale-105 transition-transform duration-300`}
                  >
                    <step.icon className="text-8xl text-white/30" />
                  </div>
                </div>
              </div>

              {/* Connector Arrow */}
              {index < steps.length - 1 && (
                <div className="flex justify-center my-6 md:my-8">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white shadow-lg">
                    <FaArrowRight className="transform rotate-90 md:rotate-0 text-sm md:text-base" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-12 md:mt-16 bg-gradient-to-r from-primary to-secondary p-6 md:p-8 lg:p-12 rounded-2xl md:rounded-3xl text-white text-center">
          <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-3 md:mb-4">
            ¿Te interesa alguna casa?
          </h3>
          <p className="text-blue-100 mb-5 md:mb-6 text-base md:text-lg max-w-2xl mx-auto">
            Escríbeme o llámame, con gusto te muestro las propiedades disponibles.
          </p>
          <a
            href="#contacto"
            className="inline-block px-6 md:px-8 py-3 md:py-4 bg-white text-primary font-bold rounded-lg hover:bg-blue-50 transition-all duration-300 shadow-2xl hover:scale-105"
          >
            Contactarme
          </a>
        </div>
      </div>
    </section>
  );
};
