import React from "react";

const Hero = () => {
  return (
    <section className="w-full h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-4xl mx-auto text-center px-6">
        
        {/* Título principal */}
        <h1 className="text-5xl font-bold mb-6">
          Gestioná tus gastos de manera simple y eficiente
        </h1>

        {/* Subtítulo */}
        <p className="text-lg text-gray-600 mb-8">
          Controlá tus ingresos, egresos y visualizá tu información con gráficos claros.
        </p>

        {/* Botones */}
        <div className="flex items-center justify-center gap-4">
          <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition">
            Empezar ahora
          </button>

          <button className="px-6 py-3 border border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition">
            Ver más
          </button>
        </div>

      </div>
    </section>
  );
};

export default Hero;
