"use client";

import { FaArrowRight, FaWhatsapp, FaCheckCircle } from "react-icons/fa";

export const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen bg-gradient-to-br from-blue-900 via-blue-600 to-cyan-500 overflow-hidden flex items-center"
    >
      {/* Modern Background Pattern */}
      <div className="absolute inset-0">
        {/* Layered Gradients */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(59,130,246,0.4),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(34,211,238,0.4),transparent_50%)]" />
        
        {/* Diagonal Lines Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.3)_25%,rgba(255,255,255,0.3)_50%,transparent_50%,transparent_75%,rgba(255,255,255,0.3)_75%,rgba(255,255,255,0.3))] bg-[length:60px_60px]"></div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-20 w-64 h-64 bg-cyan-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 py-32 md:py-36 lg:py-40">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-white">Propiedades disponibles ahora</span>
              </div>

              {/* Title */}
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.1]">
                Tu próxima
                <br />
                <span className="bg-gradient-to-r from-cyan-200 via-blue-200 to-sky-300 bg-clip-text text-transparent">
                  casa te espera
                </span>
              </h1>

              {/* Description */}
              <p className="text-xl text-blue-100 leading-relaxed max-w-xl">
                Rento mis casas directamente, sin intermediarios. 
                Trato personal, proceso sencillo y casas en excelente estado.
              </p>

              {/* Features List */}
              <div className="space-y-3">
                {[
                  "Trato directo con el propietario",
                  "Contratos claros y transparentes",
                  "Respuesta rápida a tus mensajes"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center flex-shrink-0">
                      <FaCheckCircle className="text-cyan-300 text-sm" />
                    </div>
                    <span className="text-white/90">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a
                  href="#propiedades"
                  className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-white hover:bg-gray-50 text-blue-700 font-semibold text-lg rounded-xl transition-all duration-300 hover:scale-105 shadow-2xl"
                >
                  <span>Ver Casas Disponibles</span>
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="https://wa.me/528445841876"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-semibold text-lg rounded-xl transition-all duration-300 hover:scale-105 shadow-xl border-2 border-white/20"
                >
                  <FaWhatsapp />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Right Visual */}
            <div className="relative">
              {/* Decorative Cards */}
              <div className="relative">
                {/* Main Card */}
                <div className="bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-white/20">
                  <div className="space-y-6">
                    <div className="aspect-video bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/20">
                      <div className="text-center">
                        <div className="text-6xl font-black text-white mb-2">6+</div>
                        <div className="text-blue-100 font-medium">Casas disponibles</div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20">
                        <div className="text-2xl font-bold text-white">100%</div>
                        <div className="text-sm text-blue-100 mt-1">Trato Directo</div>
                      </div>
                      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20">
                        <div className="text-2xl font-bold text-white">0</div>
                        <div className="text-sm text-blue-100 mt-1">Comisiones</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Badge */}
                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-6 py-3 rounded-2xl shadow-2xl border-2 border-white/30">
                  <div className="text-sm font-bold">✓ Verificado</div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-cyan-300/20 rounded-full blur-3xl"></div>
                <div className="absolute -top-8 -right-8 w-32 h-32 bg-blue-400/20 rounded-full blur-3xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave for transition */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
};
