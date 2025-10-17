import { motion } from "framer-motion";

export default function Collaborators() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="flex items-center justify-center gap-6">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2Fb7cfa890298e4417b2c764b6d4f2183e%2F3c80e911b0ff4190961f2744d5f0e49e?format=webp&width=300"
              alt="Elysium Aerotech logo"
              className="h-16 w-auto thruster-glow"
              loading="eager"
              decoding="async"
            />
            <svg className="h-6 w-6 text-muted-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14"/></svg>
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2Fb7cfa890298e4417b2c764b6d4f2183e%2Fa79366ccd98c45218d292c9ffd31789e?format=webp&width=300"
              alt="Vivekananda Institute of Professional Studies (VIPS) - Technology Campus logo"
              className="h-16 w-auto"
              loading="eager"
              decoding="async"
            />
          </div>
          <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
            Elysium Aerotech – Pioneering the Future of Student-Driven Aerospace
            Innovation
          </h1>
          <p className="mt-3 text-sm font-medium text-primary">
            In academic collaboration with Vivekananda Institute of Professional
            Studies (VIPS) - Technology Campus, New Delhi
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
              Vivekananda Institute of Professional Studies (VIPS) - Technology Campus, New Delhi is associated with Elysium Aerotech as our academic partner, playing a vital role in nurturing student innovation and providing institutional guidance for our aerospace initiatives.
            </p>
            <p>
              Our flagship project, Elysium, has been nurtured with the academic
              support and incubation environment provided by VIPS - TC. Students and
              mentors from VIPS - TC have contributed to research, discussions, and
              innovation pathways that make our aerospace projects a reality.
            </p>
            <p>
              Elysium Aerotech believes in the power of collaboration and
              knowledge-sharing. We are proud to be associated with Vivekananda
              Institute of Professional Studies (VIPS) - Technology Campus, New Delhi, a premier
              institute that supports innovation and entrepreneurship.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
