"use client";

import { useState } from "react";

const faqs = [
  {
    q: "¿Este programa sustituye un tratamiento médico de fertilidad?",
    a: "No. The Bump Guru es un programa de acompañamiento emocional y mental. No somos un servicio médico, no realizamos diagnósticos ni tratamientos, y no sustituimos la atención de profesionales de la salud. Recomendamos siempre mantener tu seguimiento médico.",
  },
  {
    q: "¿Garantizan el embarazo?",
    a: "No. Ningún programa puede garantizar un embarazo. Lo que ofrecemos es un espacio para trabajar los aspectos emocionales y mentales de tu proceso, que según muchas mujeres han marcado una diferencia significativa en su bienestar y experiencia.",
  },
  {
    q: "¿Cómo son las sesiones grupales?",
    a: "Son sesiones en vivo por videollamada, una vez por semana, con un grupo reducido e íntimo. Cada sesión aborda un tema específico del programa y hay espacio para compartir y recibir apoyo.",
  },
  {
    q: "¿Puedo tomar el programa si ya estoy en un tratamiento de fertilidad?",
    a: "¡Absolutamente! De hecho, muchas mujeres en tratamientos como FIV o inseminación encuentran en este acompañamiento un complemento valioso para sostener el proceso emocionalmente.",
  },
  {
    q: "¿Cuánto tiempo debo dedicar a la semana?",
    a: "Aproximadamente 2–3 horas semanales: 1 hora de sesión grupal en vivo + tiempo para los audios guiados (15–20 min diarios) y trabajo personal del Bump Book.",
  },
  {
    q: "¿Qué pasa si no puedo asistir a una sesión en vivo?",
    a: "Todas las sesiones quedan grabadas y disponibles en tu plataforma para que puedas verlas a tu ritmo.",
  },
  {
    q: "¿Puedo pagar en cuotas?",
    a: "Sí. Ofrecemos un plan de 6 pagos mensuales además del pago único con descuento.",
  },
  {
    q: "¿El programa es en español?",
    a: "Sí. Todo el contenido, las sesiones y la comunidad están en español.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="max-w-3xl mx-auto space-y-3">
      {faqs.map((faq, i) => (
        <div
          key={i}
          className="bg-white rounded-2xl border border-secondary/30 overflow-hidden"
        >
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full flex items-center justify-between px-6 py-5 text-left"
          >
            <span className="font-medium pr-4">{faq.q}</span>
            <svg
              width="20"
              height="20"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className={`shrink-0 transition-transform duration-200 ${
                openIndex === i ? "rotate-180" : ""
              }`}
            >
              <path d="M5 8l5 5 5-5" />
            </svg>
          </button>
          {openIndex === i && (
            <div className="px-6 pb-5 text-foreground/60 leading-relaxed">
              {faq.a}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
