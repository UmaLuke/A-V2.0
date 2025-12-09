import React from "react";

const Hero = () => {
  return (
    <section 
      className="relative w-full h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('my-project/public/Gemini_Generated_Image_womqu8womqu8womq.png')" }} // Cambiá la ruta acá
    >

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Contenido */}
      <div className="relative z-10 max-w-4xl mx-auto text-center px-6 text-white">
        
        <h1 className="text-5xl font-bold mb-6">
          Sabor auténtico, entregado caliente.
        </h1>

        <p className="text-lg mb-8">
          Hamburguesas jugosas, sándwiches artesanales y pizzas de masa crujiente. Pedí fácil, pagá al recibir o en el local.
        </p>

        <div className="flex items-center justify-center gap-4">
          <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition">
            Menu
          </button>

          <button className="px-6 py-3 border border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition">
            Sobre Nosotros
          </button>
        </div>

      </div>
    </section>
  );
};

export default Hero;
