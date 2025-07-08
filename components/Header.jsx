import React from 'react';

export default function Header() {
  return (
    <header className="bg-white shadow-md py-4">
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">Servicios TIC</h1>
            <nav className="space-x-6 hidden md:flex">
              <a href="#servicios" className="text-gray-700 hover:text-blue-600">Servicios</a>
              <a href="#contacto" className="text-gray-700 hover:text-blue-600">contacto</a>
            </nav>
        </div>
      
    </header>
  );
}
