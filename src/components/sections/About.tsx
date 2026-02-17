"use client";

import { FaHome, FaAward, FaUsers, FaShieldAlt } from "react-icons/fa";

export const About = () => {
  const features = [
    {
      icon: FaHome,
      title: "Propiedades de Calidad",
      description: "Todas mis propiedades están bien mantenidas y listas para habitar",
      color: "text-blue-500",
      bg: "bg-blue-100",
    },
    {
      icon: FaAward,
      title: "Trato Directo",
      description: "Sin intermediarios, hablas directamente conmigo en todo momento",
      color: "text-green-500",
      bg: "bg-green-100",
    },
    {
      icon: FaUsers,
      title: "Atención Personal",
      description: "Te acompaño personalmente en todo el proceso de renta",
      color: "text-purple-500",
      bg: "bg-purple-100",
    },
    {
      icon: FaShieldAlt,
      title: "Proceso Transparente",
      description: "Contratos claros y sin letra pequeña, todo es transparente",
      color: "text-orange-500",
      bg: "bg-orange-100",
    },
  ];

  return (
    <section id="nosotros" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider bg-blue-100 px-4 py-2 rounded-full">
              Conóceme
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
            ¿Por qué rentar{" "}
            <span className="text-primary">conmigo?</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Tengo varias propiedades en renta y me encargo personalmente de todo.
            Trato directo, sin intermediarios, para que tengas una experiencia
            tranquila y confiable.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              <div
                className={`${feature.bg} w-16 h-16 rounded-2xl flex items-center justify-center mb-6`}
              >
                <feature.icon className={`text-3xl ${feature.color}`} />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-primary to-secondary p-8 md:p-10 rounded-2xl text-white shadow-xl">
            <h3 className="text-2xl font-bold mb-4">Mi Compromiso</h3>
            <p className="text-blue-100 leading-relaxed">
              Ofrecerte propiedades en excelente estado y un proceso de renta
              sencillo y transparente. Me aseguro de que tengas toda la información
              que necesitas y de estar disponible cuando me necesites.
            </p>
          </div>

          <div className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 md:p-10 rounded-2xl text-white shadow-xl">
            <h3 className="text-2xl font-bold mb-4">Mi Experiencia</h3>
            <p className="text-gray-300 leading-relaxed">
              Llevo años rentando mis propiedades y he aprendido lo importante que
              es la comunicación directa y la confianza. Por eso manejo todo
              personalmente, para que tengas la mejor experiencia posible.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
