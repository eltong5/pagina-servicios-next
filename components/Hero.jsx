import React from 'react';

export default function Hero() {
  return (
    <section className="bg-white py-20 text-center">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Soluciones Tecnológicas a tu medida
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-6">
          Mantenimiento, asesorías y automatización para que tu tecnología trabaje a tu favor.
        </p>
        <a
          href="#contacto"
          className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg hover:bg-blue-700 transition"
        >
          Contáctanos
        </a>
      </div>
    </section>
  );
}


