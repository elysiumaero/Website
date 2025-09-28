import { motion } from "framer-motion";

export default function Collaborators() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2Fb7cfa890298e4417b2c764b6d4f2183e%2F3c80e911b0ff4190961f2744d5f0e49e?format=webp&width=800"
            alt="Elysium Aerotech logo"
            className="mx-auto mb-6 h-20 w-auto drop-shadow"
            loading="eager"
            decoding="async"
          />
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Elysium Aerotech – Pioneering the Future of Student-Driven Aerospace
            Innovation
          </h1>
          <p className="mt-3 text-sm font-medium text-primary">
            In academic collaboration with Vivekananda Institute of Professional
            Studies (VIPS), New Delhi
          </p>
          <p className="mt-4 text-base text-muted-foreground">
            Elysium Aerotech proudly collaborates with forward-thinking
            institutes and organizations.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto mt-10 max-w-4xl overflow-hidden rounded-2xl border border-white/10 bg-black/40 p-8"
        >
          <div className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-br from-cyan-500/20 to-violet-500/20 opacity-60" />
          <div className="relative space-y-4 text-sm leading-relaxed text-foreground/90">
            <p>
              Our academic partner, Vivekananda Institute of Professional
              Studies (VIPS), New Delhi, plays a vital role in nurturing student
              innovation and providing institutional guidance for our aerospace
              initiatives.
            </p>
            <p>
              Our flagship project, Elysium, has been nurtured with the academic
              support and incubation environment provided by VIPS. Students and
              mentors from VIPS have contributed to research, discussions, and
              innovation pathways that make our aerospace projects a reality.
            </p>
            <p>
              Elysium Aerotech believes in the power of collaboration and
              knowledge-sharing. We are proud to be associated with Vivekananda
              Institute of Professional Studies (VIPS), New Delhi, a premier
              institute that supports innovation and entrepreneurship.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
