import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            About Elysium Aerotech
          </h1>
          <p className="mt-4 text-base text-muted-foreground">
            Elysium Aerotech, under Krrypto Edutech, designs and builds
            next‑generation unmanned aerial vehicles. Our mission is to deliver
            reliable, intelligent, and elegant UAV systems—from reconnaissance
            platforms to loitering munitions—tailored to mission realities.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            {
              t: "Engineering Discipline",
              d: "Aerospace‑grade airframes, high‑efficiency propulsion, and modular avionics built for endurance and maintainability.",
            },
            {
              t: "Mission‑Ready Software",
              d: "Our in‑house autonomy stack powers navigation, guidance, and resilient communications—battle‑tested in simulation.",
            },
            {
              t: "Operational Use‑Cases",
              d: "From ISR to precision strike (kamikaze/loitering) capabilities, we prioritize safety, control, and clear rules of use.",
            },
          ].map((i) => (
            <motion.div
              key={i.t}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group relative rounded-xl border border-white/10 bg-black/30 p-6"
            >
              <div className="pointer-events-none absolute -inset-px rounded-xl bg-gradient-to-br from-cyan-500/20 to-violet-500/20 opacity-0 blur-[2px] transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative">
                <h3 className="text-lg font-semibold">{i.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{i.d}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto mt-12 max-w-4xl overflow-hidden rounded-2xl border border-white/10 bg-black/40 p-8"
        >
          <div className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-br from-cyan-500/20 to-violet-500/20 opacity-60" />
          <div className="relative">
            <div className="mb-3 text-sm font-semibold tracking-wide text-muted-foreground">
              Message from the Project Director
            </div>
            <blockquote className="space-y-4 text-sm leading-relaxed text-foreground/90">
              <p>
                At Elysium Aerotech, we are driven by a singular vision — to
                build, innovate, and transform the future of aerospace and smart
                autonomy. What started as a student-led initiative has grown
                into a platform where creativity meets technology, and where
                passion fuels progress.
              </p>
              <p>
                As the Project Director, I firmly believe that innovation is not
                just about ideas, but about the courage to bring them to life.
                Our mission is to provide aspiring minds with the resources,
                mentorship, and environment to engineer solutions that push
                boundaries and inspire change.
              </p>
              <p>
                Elysium Aerotech is not only about aircrafts, drones, or
                autonomous systems — it is about building a culture of
                excellence, leadership, and teamwork. Every member of our team
                contributes towards shaping a future where technology serves
                humanity with precision and purpose.
              </p>
              <p>
                Together, we aim to make Elysium Aerotech a benchmark in
                aerospace innovation, driven by knowledge, discipline, and an
                unyielding commitment to progress.
              </p>
              <p className="pt-2 text-right text-xs text-muted-foreground">
                – Project Director Elysium Aerotech
              </p>
            </blockquote>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
