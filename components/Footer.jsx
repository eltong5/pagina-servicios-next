import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-10">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} ServiciosTech. Todos los derechos reservados
        </p>
      </div>
    </footer>
  );
}

