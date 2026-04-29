"use client";

import { useState } from "react";

export default function ApplicationForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    edad: "",
    situacion: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="text-center py-12">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
          <svg width="32" height="32" fill="none" stroke="#8C6AE6" strokeWidth="2.5">
            <path d="M6 16l6 6L26 10" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold mb-3">¡Gracias por tu interés!</h3>
        <p className="text-foreground/60 max-w-md mx-auto">
          Hemos recibido tu aplicación. Nos pondremos en contacto contigo pronto para los
          próximos pasos.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-5">
      <div>
        <label htmlFor="nombre" className="block text-sm font-medium mb-1.5">
          Nombre completo
        </label>
        <input
          id="nombre"
          name="nombre"
          type="text"
          required
          value={form.nombre}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-xl border border-secondary/50 bg-white focus:outline-none focus:ring-2 focus:ring-primary/40 transition"
          placeholder="Tu nombre"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-1.5">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={form.email}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-xl border border-secondary/50 bg-white focus:outline-none focus:ring-2 focus:ring-primary/40 transition"
          placeholder="tu@email.com"
        />
      </div>
      <div>
        <label htmlFor="edad" className="block text-sm font-medium mb-1.5">
          Edad
        </label>
        <select
          id="edad"
          name="edad"
          required
          value={form.edad}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-xl border border-secondary/50 bg-white focus:outline-none focus:ring-2 focus:ring-primary/40 transition"
        >
          <option value="">Selecciona tu rango</option>
          <option value="25-29">25–29 años</option>
          <option value="30-34">30–34 años</option>
          <option value="35-38">35–38 años</option>
          <option value="39-42">39–42 años</option>
          <option value="43+">43+ años</option>
        </select>
      </div>
      <div>
        <label htmlFor="situacion" className="block text-sm font-medium mb-1.5">
          Cuéntanos brevemente tu situación
        </label>
        <textarea
          id="situacion"
          name="situacion"
          required
          rows={4}
          value={form.situacion}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-xl border border-secondary/50 bg-white focus:outline-none focus:ring-2 focus:ring-primary/40 transition resize-none"
          placeholder="¿Qué te trae aquí? ¿Cuánto tiempo llevas en tu proceso?"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-primary text-white font-semibold py-3.5 rounded-full hover:bg-primary-dark transition-colors text-lg"
      >
        Enviar mi aplicación
      </button>
      <p className="text-xs text-foreground/40 text-center">
        Tu información es confidencial. No compartiremos tus datos con terceros.
      </p>
    </form>
  );
}
