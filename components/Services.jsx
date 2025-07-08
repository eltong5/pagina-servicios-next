import React from 'react';
import { Wrench, Monitor, Zap } from 'lucide-react';
export default function Services() {
  return (
    <section id="servicios" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-blue-700">
          Nuestros Servicios
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {/* Servicio 1 */}
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <Wrench className="mx-auto mb-4 text-blue-600" size={40} />
            <h3 className="text-xl font-semibold mb-2">Mantenimiento de equipos</h3>
            <p className="text-gray-600">Revisión, limpieza y optimización para que tus dispositivos funcionen al 100%.</p>
          </div>

          {/* Servicio 2 */}
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <Monitor className="mx-auto mb-4 text-blue-600" size={40} />
            <h3 className="text-xl font-semibold mb-2">Asesoría en TIC</h3>
            <p className="text-gray-600">Te guiamos para que tomes decisiones tecnológicas inteligentes y eficientes.</p>
          </div>

          {/* Servicio 3 */}
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <Zap className="mx-auto mb-4 text-blue-600" size={40} />
            <h3 className="text-xl font-semibold mb-2">Automatización de procesos</h3>
            <p className="text-gray-600">Reduce el trabajo manual y errores en tus sistemas con soluciones a medida.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

