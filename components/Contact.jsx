import React, { useState } from 'react';

const Contact = () => {
  const [form, setForm] = useState({ nombre: '', email: '', mensaje: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  const payload = {
    ...form,
    fecha: new Date().toISOString(), // <-- aquí generamos la fecha actual
  };

  try {
    const res = await fetch('/api/enviar-mensaje', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      alert('Mensaje enviado con éxito 🚀');
      setForm({ nombre: '', email: '', mensaje: '' });
    } else {
      alert('Error al enviar mensaje ❌');
    }
  } catch (error) {
    alert('Error de red: ' + error.message);
  }
};

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto p-4 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Contáctanos</h2>

      <input
        type="text"
        name="nombre"
        placeholder="Tu nombre"
        value={form.nombre}
        onChange={handleChange}
        className="w-full mb-3 p-2 border rounded"
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Tu correo"
        value={form.email}
        onChange={handleChange}
        className="w-full mb-3 p-2 border rounded"
        required
      />
      <textarea
        name="mensaje"
        placeholder="Tu mensaje"
        value={form.mensaje}
        onChange={handleChange}
        className="w-full mb-3 p-2 border rounded"
        required
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Enviar
      </button>
    </form>
  );
};

export default Contact;
