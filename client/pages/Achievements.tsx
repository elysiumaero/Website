import { motion } from "framer-motion";

export default function Achievements() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Timeline />
      <Highlights />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-32 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-gradient-to-tr from-cyan-400/30 via-sky-500/20 to-violet-500/30 blur-3xl" />
      </div>
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-5xl font-extrabold leading-tight tracking-tight sm:text-6xl">
            Achievements & Milestones
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Key wins, recognitions, and breakthroughs on our journey to operational flight.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function Timeline() {
  const milestones = [
    {
      date: "Q2 2024",
      title: "Project Inception",
      description: "Elysium Aerotech formally launched as a student-driven aerospace initiative under Krrypto Edutech partnership with VIPS - TC.",
      achievements: ["Core team assembled", "Initial design concept approved", "Partnership with VIPS - TC finalized"],
    },
    {
      date: "Q3 2024",
      title: "Design Phase Completion",
      description: "Comprehensive airframe design and component selection process concluded with aerodynamic validation.",
      achievements: ["CAD design finalized", "Material selection completed", "Aerodynamic simulations run"],
    },
    {
      date: "Q4 2024",
      title: "Manufacturing & Fabrication",
      description: "Began composite airframe fabrication with modular subsystem integration.",
      achievements: ["Fuselage fabrication started", "Wing box construction", "Control surface manufacturing"],
    },
    {
      date: "Q1 2025",
      title: "Avionics Integration",
      description: "Flight controller bring-up, sensor calibration, and telemetry link testing.",
      achievements: ["Flight controller programmed", "Sensor suite integrated", "Ground control station configured"],
    },
    {
      date: "Q2 2025",
      title: "Structural Testing",
      description: "Load testing and airframe validation to ensure safety margins and structural integrity.",
      achievements: ["Static load tests passed", "Structural margins verified", "Material certifications obtained"],
    },
    {
      date: "Q3-Q4 2025",
      title: "Flight Readiness",
      description: "Hardware-in-loop simulation, pre-flight checks, and maiden flight preparation.",
      achievements: ["HIL testing completed", "Safety protocols established", "First flight imminent"],
    },
  ];

  return (
    <section>
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="space-y-8">
          {milestones.map((milestone, idx) => (
            <motion.div
              key={milestone.date}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="group relative"
            >
              <div className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="h-12 w-12 rounded-full border-2 border-cyan-500 bg-black flex items-center justify-center">
                    <div className="h-3 w-3 rounded-full bg-cyan-500" />
                  </div>
                  {idx < milestones.length - 1 && (
                    <div className="mt-2 h-16 w-1 bg-gradient-to-b from-cyan-500/50 to-cyan-500/10" />
                  )}
                </div>

                <div className="flex-1 pb-8">
                  <div className="rounded-xl border border-white/10 bg-black/30 p-6">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <div>
                        <h3 className="text-sm font-semibold text-cyan-400">{milestone.date}</h3>
                        <h2 className="mt-1 text-2xl font-bold">{milestone.title}</h2>
                      </div>
                    </div>
                    <p className="mt-3 text-muted-foreground">{milestone.description}</p>
                    <div className="mt-4 grid gap-2 sm:grid-cols-3">
                      {milestone.achievements.map((achievement) => (
                        <div key={achievement} className="flex items-start gap-2">
                          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-violet-400 flex-shrink-0" />
                          <span className="text-xs text-muted-foreground">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Highlights() {
  const highlights = [
    {
      title: "Student-Led Innovation",
      description: "Entirely conceived and executed by VIPS students with mentorship from industry experts.",
      icon: "🚀",
    },
    {
      title: "Aerospace-Grade Engineering",
      description: "Composite airframe and systems design meeting professional aerospace standards.",
      icon: "✈️",
    },
    {
      title: "Academic Partnership",
      description: "Formal collaboration with VIPS - Technology Campus providing institutional support.",
      icon: "🎓",
    },
    {
      title: "Technology Leadership",
      description: "Pioneering autonomous UAV capabilities in edge computing and GPS-denied navigation.",
      icon: "🛰️",
    },
  ];

  return (
    <section>
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Why Elysium Stands Out
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((highlight, idx) => (
            <motion.div
              key={highlight.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
              className="group rounded-xl border border-white/10 bg-black/30 p-6 text-center"
            >
              <div className="pointer-events-none absolute -inset-px rounded-xl bg-gradient-to-br from-cyan-500/20 to-violet-500/20 opacity-0 blur-[2px] transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative">
                <div className="text-4xl">{highlight.icon}</div>
                <h3 className="mt-3 font-semibold">{highlight.title}</h3>
                <p className="mt-2 text-xs text-muted-foreground">{highlight.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
