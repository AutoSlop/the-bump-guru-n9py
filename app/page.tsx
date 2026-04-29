import Navbar from "./components/Navbar";
import FAQ from "./components/FAQ";
import ApplicationForm from "./components/ApplicationForm";

const pilares = [
  {
    icon: (
      <svg width="32" height="32" fill="none" stroke="#8C6AE6" strokeWidth="1.5" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" strokeLinecap="round" />
      </svg>
    ),
    title: "Reprogramación mental",
    desc: "Identifica y transforma las creencias limitantes que alimentan tu ansiedad y te desconectan de tu cuerpo.",
  },
  {
    icon: (
      <svg width="32" height="32" fill="none" stroke="#8C6AE6" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
    title: "Regulación emocional",
    desc: "Aprende herramientas concretas para manejar la frustración, la espera y la incertidumbre sin que te consuman.",
  },
  {
    icon: (
      <svg width="32" height="32" fill="none" stroke="#8C6AE6" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M12 2a7 7 0 0 1 7 7c0 5-7 13-7 13S5 14 5 9a7 7 0 0 1 7-7z" />
        <circle cx="12" cy="9" r="2.5" />
      </svg>
    ),
    title: "Conexión mente-cuerpo",
    desc: "Reconecta con tu cuerpo como aliado, no como enemigo. Ejercicios somáticos y de presencia para tu día a día.",
  },
  {
    icon: (
      <svg width="32" height="32" fill="none" stroke="#8C6AE6" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" strokeLinecap="round" />
        <path d="M22 4 12 14.01l-3-3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Acción consciente",
    desc: "Diseña un plan de acción personalizado que honre tu proceso y te permita avanzar sin presión ni agotamiento.",
  },
];

const incluye = [
  {
    title: "Sesiones grupales semanales en vivo",
    desc: "Encuentros íntimos por videollamada cada semana con mujeres que comparten tu camino.",
  },
  {
    title: "Seguimiento y accountability quincenal",
    desc: "Check-ins cada dos semanas para que no pierdas impulso y te sientas acompañada.",
  },
  {
    title: "Biblioteca de audios guiados",
    desc: "Audios para la mañana y la noche: meditaciones, visualizaciones y ejercicios de regulación.",
  },
  {
    title: "Bump Book digital",
    desc: "Tu cuaderno personal de trabajo interior con ejercicios, reflexiones y seguimiento de tu proceso.",
  },
  {
    title: "Onboarding de fertilidad emocional",
    desc: "Sesión inicial personalizada para entender tu punto de partida y diseñar tu camino.",
  },
  {
    title: "Comunidad privada",
    desc: "Un espacio seguro y confidencial para compartir, preguntar y sentirte sostenida entre sesiones.",
  },
];

const testimonios = [
  {
    text: "Después de años sintiéndome sola en este proceso, por fin encontré un espacio donde alguien entendía lo que sentía. Cambió mi relación conmigo misma.",
    name: "María L.",
    detail: "35 años",
  },
  {
    text: "Los audios guiados se convirtieron en mi ritual sagrado. Me ayudaron a soltar el control y confiar más en mi cuerpo.",
    name: "Carolina R.",
    detail: "38 años",
  },
  {
    text: "No sabía que cargaba tantos bloqueos emocionales. Este programa me dio herramientas que ningún médico me había dado.",
    name: "Valentina M.",
    detail: "32 años",
  },
];

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="pt-28 pb-20 md:pt-36 md:pb-28 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl">
            <p className="text-primary font-semibold text-sm tracking-wide uppercase mb-4">
              Programa de 6 meses · Acompañamiento premium
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Tu embarazo también empieza{" "}
              <span className="text-primary">en tu mente</span>
            </h1>
            <p className="text-lg md:text-xl text-foreground/60 leading-relaxed mb-10 max-w-xl">
              Reduce tu ansiedad, reprograma los bloqueos internos que te frenan y
              sostén tu proceso de fertilidad con acompañamiento emocional real.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#aplicar"
                className="inline-flex justify-center bg-primary text-white font-semibold px-8 py-4 rounded-full text-lg hover:bg-primary-dark transition-colors"
              >
                Aplicar al programa
              </a>
              <a
                href="#como-funciona"
                className="inline-flex justify-center border-2 border-secondary text-foreground font-semibold px-8 py-4 rounded-full text-lg hover:bg-secondary/20 transition-colors"
              >
                Conoce más
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Pain / Problem */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Sabemos lo que estás viviendo
          </h2>
          <div className="space-y-5 text-lg text-foreground/60 leading-relaxed max-w-3xl mx-auto">
            <p>
              Cada mes se convierte en una montaña rusa emocional. La espera, la
              incertidumbre, los resultados negativos… y la sensación de que tu cuerpo
              te falla.
            </p>
            <p>
              Intentas mantenerte positiva, pero por dentro cargas frustración, miedo y
              una soledad que nadie a tu alrededor parece entender del todo.
            </p>
            <p>
              Te han dicho que &quot;te relajes&quot;, que &quot;no pienses en eso&quot;, que &quot;ya
              llegará&quot;. Pero nadie te ha dado herramientas reales para transitar este
              camino sin perderte a ti misma en el proceso.
            </p>
          </div>
          <div className="mt-12 inline-block bg-background rounded-2xl px-8 py-6 border border-secondary/40">
            <p className="text-primary font-semibold text-lg">
              No estás sola. Y no tienes que hacerlo sola.
            </p>
          </div>
        </div>
      </section>

      {/* Cómo funciona – 4 Pilares */}
      <section id="como-funciona" className="py-20 px-6 scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Cómo funciona The Bump Guru
            </h2>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
              Un enfoque integral basado en 4 pilares que trabajan en sinergia para
              transformar tu experiencia de fertilidad.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {pilares.map((p, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-8 border border-secondary/30 hover:border-primary/30 transition-colors"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                  {p.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{p.title}</h3>
                <p className="text-foreground/60 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Qué incluye */}
      <section id="programa" className="py-20 px-6 bg-white scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Qué incluye el programa
            </h2>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
              6 meses de acompañamiento completo diseñado para sostener cada fase de tu
              proceso.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {incluye.map((item, i) => (
              <div key={i} className="bg-background rounded-2xl p-7 border border-secondary/30">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <span className="text-primary font-bold">{i + 1}</span>
                </div>
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-foreground/60 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Lo que dicen nuestras alumnas
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonios.map((t, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-7 border border-secondary/30"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <svg
                      key={j}
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="#8C6AE6"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <p className="text-foreground/70 leading-relaxed mb-5 italic">
                  &quot;{t.text}&quot;
                </p>
                <div>
                  <p className="font-semibold text-sm">{t.name}</p>
                  <p className="text-xs text-foreground/40">{t.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Para quién es / no es */}
      <section id="para-quien" className="py-20 px-6 bg-white scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
            ¿Es para ti?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-primary/5 rounded-2xl p-8 border border-primary/20">
              <h3 className="text-xl font-bold mb-6 text-primary">
                Este programa es para ti si…
              </h3>
              <ul className="space-y-4">
                {[
                  "Llevas meses o años buscando embarazo y sientes que la ansiedad te consume.",
                  "Quieres herramientas reales para manejar la espera sin perder tu paz mental.",
                  "Sientes que tu cuerpo y tu mente no están conectados en este proceso.",
                  "Estás en un tratamiento de fertilidad y necesitas apoyo emocional complementario.",
                  "Buscas un espacio seguro donde sentirte entendida por mujeres en tu misma situación.",
                  "Estás dispuesta a invertir en tu bienestar emocional como parte de tu camino a la maternidad.",
                ].map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <svg
                      width="22"
                      height="22"
                      fill="none"
                      stroke="#8C6AE6"
                      strokeWidth="2.5"
                      className="shrink-0 mt-0.5"
                    >
                      <path d="M5 11l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="text-foreground/70">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-foreground/[0.02] rounded-2xl p-8 border border-foreground/10">
              <h3 className="text-xl font-bold mb-6 text-foreground/60">
                No es para ti si…
              </h3>
              <ul className="space-y-4">
                {[
                  "Buscas un diagnóstico médico o tratamiento de fertilidad.",
                  "Esperas una garantía de embarazo.",
                  "No estás dispuesta a explorar tus emociones y patrones internos.",
                  "Prefieres un enfoque puramente clínico sin componente emocional.",
                  "No puedes comprometerte con el proceso de 6 meses.",
                ].map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <svg
                      width="22"
                      height="22"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="shrink-0 mt-0.5 text-foreground/30"
                    >
                      <path d="M6 6l12 12M6 18L18 6" strokeLinecap="round" />
                    </svg>
                    <span className="text-foreground/50">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="precio" className="py-20 px-6 scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Invierte en tu bienestar
            </h2>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
              Dos opciones para que elijas la que mejor se adapte a ti.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Founder */}
            <div className="bg-white rounded-2xl p-8 border-2 border-primary relative">
              <div className="absolute -top-4 left-8 bg-primary text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
                Founder Launch
              </div>
              <div className="mt-4 mb-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold">$3,000</span>
                  <span className="text-foreground/40">USD</span>
                </div>
                <p className="text-foreground/50 text-sm mt-1">
                  pago único · o 6 pagos de <span className="font-semibold text-foreground/70">$575 USD</span>
                </p>
              </div>
              <ul className="space-y-3 mb-8">
                {[
                  "Acceso completo al programa de 6 meses",
                  "Sesiones grupales semanales en vivo",
                  "Audios guiados mañana y noche",
                  "Bump Book digital",
                  "Comunidad privada",
                  "Seguimiento quincenal",
                  "Precio exclusivo de lanzamiento",
                ].map((item, i) => (
                  <li key={i} className="flex gap-2.5 text-sm">
                    <svg
                      width="18"
                      height="18"
                      fill="none"
                      stroke="#8C6AE6"
                      strokeWidth="2.5"
                      className="shrink-0 mt-0.5"
                    >
                      <path d="M4 9l3.5 3.5L14 6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="text-foreground/70">{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#aplicar"
                className="block text-center bg-primary text-white font-semibold py-3.5 rounded-full hover:bg-primary-dark transition-colors"
              >
                Aplicar ahora
              </a>
            </div>

            {/* Regular */}
            <div className="bg-white rounded-2xl p-8 border border-secondary/30">
              <div className="mt-4 mb-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold">$3,500</span>
                  <span className="text-foreground/40">USD</span>
                </div>
                <p className="text-foreground/50 text-sm mt-1">
                  pago único · o 6 pagos de <span className="font-semibold text-foreground/70">$650 USD</span>
                </p>
              </div>
              <p className="text-sm text-foreground/50 mb-6">
                Precio regular después del periodo de lanzamiento.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Acceso completo al programa de 6 meses",
                  "Sesiones grupales semanales en vivo",
                  "Audios guiados mañana y noche",
                  "Bump Book digital",
                  "Comunidad privada",
                  "Seguimiento quincenal",
                ].map((item, i) => (
                  <li key={i} className="flex gap-2.5 text-sm">
                    <svg
                      width="18"
                      height="18"
                      fill="none"
                      stroke="#8C6AE6"
                      strokeWidth="2.5"
                      className="shrink-0 mt-0.5"
                    >
                      <path d="M4 9l3.5 3.5L14 6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="text-foreground/70">{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#aplicar"
                className="block text-center border-2 border-primary text-primary font-semibold py-3.5 rounded-full hover:bg-primary/5 transition-colors"
              >
                Aplicar ahora
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 px-6 bg-white scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Preguntas frecuentes
            </h2>
          </div>
          <FAQ />
        </div>
      </section>

      {/* Application CTA */}
      <section id="aplicar" className="py-20 px-6 scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-3xl p-8 md:p-14 border border-secondary/30 shadow-sm">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Da el primer paso
              </h2>
              <p className="text-lg text-foreground/60 max-w-xl mx-auto">
                Completa tu aplicación y te contactaremos para una breve conversación
                antes de confirmar tu lugar en el programa.
              </p>
            </div>
            <ApplicationForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-foreground text-white/60">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10">
            <div>
              <p className="text-white font-bold text-xl mb-1">The Bump Guru</p>
              <p className="text-sm">Acompañamiento emocional para tu camino a la maternidad</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-sm">
              <a href="#como-funciona" className="hover:text-white transition-colors">
                Cómo funciona
              </a>
              <a href="#programa" className="hover:text-white transition-colors">
                El programa
              </a>
              <a href="#precio" className="hover:text-white transition-colors">
                Precio
              </a>
              <a href="#faq" className="hover:text-white transition-colors">
                FAQ
              </a>
              <a href="#aplicar" className="hover:text-white transition-colors">
                Aplicar
              </a>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8">
            <div className="text-xs leading-relaxed mb-4">
              <strong className="text-white/80">Aviso importante:</strong> The Bump Guru
              es un programa de acompañamiento emocional y mental. No es un servicio
              médico, no sustituye la atención de profesionales de la salud y no
              garantiza el embarazo. Consulta siempre con tu médico.
            </div>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-xs">
              <p>© 2025 The Bump Guru. Todos los derechos reservados.</p>
              <p>Contacto: info@example.com</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
