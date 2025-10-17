import { motion } from "framer-motion";

export default function ElysiumProject() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Overview />
      <Specifications />
      <DesignPhilosophy />
      <Development />
      <Capabilities />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-32 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-gradient-to-tr from-cyan-400/30 via-sky-500/20 to-violet-500/30 blur-3xl" />
        <div className="absolute -bottom-20 left-10 h-72 w-72 rounded-full bg-cyan-500/20 blur-2xl" />
      </div>
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-muted-foreground">
            <span className="relative inline-flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-500"></span>
            </span>
            Flagship Project
          </div>
          <h1 className="mt-6 text-5xl font-extrabold leading-tight tracking-tight sm:text-6xl">
            Elysium UAV System
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            A student-engineered, autonomous unmanned aerial system combining aerospace-grade design with resilient edge computing and secure command and control.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function Overview() {
  return (
    <section>
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Project Overview
            </h2>
            <p className="mt-4 text-muted-foreground">
              Elysium represents a multi-year engineering initiative to develop a tactical unmanned system capable of autonomous operations in GPS-denied and contested environments. Built by students at Vivekananda Institute of Professional Studies (VIPS) - Technology Campus, the project bridges academic research with real-world aerospace challenges.
            </p>
            <div className="mt-6 space-y-3">
              <div className="flex gap-3">
                <div className="h-5 w-5 flex-shrink-0 rounded-full bg-cyan-500/30 ring-1 ring-cyan-400" />
                <p className="text-sm text-muted-foreground">Built by students with mentorship from industry experts</p>
              </div>
              <div className="flex gap-3">
                <div className="h-5 w-5 flex-shrink-0 rounded-full bg-violet-500/30 ring-1 ring-violet-400" />
                <p className="text-sm text-muted-foreground">Modular architecture for rapid iteration and customization</p>
              </div>
              <div className="flex gap-3">
                <div className="h-5 w-5 flex-shrink-0 rounded-full bg-sky-500/30 ring-1 ring-sky-400" />
                <p className="text-sm text-muted-foreground">Field-proven design philosophy with safety-first approach</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-cyan-500/10 to-violet-500/10 p-8">
              <div className="space-y-4 text-sm">
                <div>
                  <div className="text-xs font-medium text-cyan-400">Status</div>
                  <div className="mt-1 text-foreground">Prototype in Development</div>
                </div>
                <div>
                  <div className="text-xs font-medium text-cyan-400">First Flight Target</div>
                  <div className="mt-1 text-foreground">Q4 2025</div>
                </div>
                <div>
                  <div className="text-xs font-medium text-cyan-400">Institution</div>
                  <div className="mt-1 text-foreground">VIPS - Technology Campus, New Delhi</div>
                </div>
                <div>
                  <div className="text-xs font-medium text-cyan-400">Core Team</div>
                  <div className="mt-1 text-foreground">Multi-disciplinary engineers and researchers</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Specifications() {
  const specs = [
    { category: "Airframe", items: ["Composite construction (carbon fiber/epoxy)", "Modular wing and fuselage design", "Dimensions: ~1.8m wingspan, 1.2m fuselage", "Empty weight: <5 kg"] },
    { category: "Power & Propulsion", items: ["Electric motor propulsion system", "Dual battery architecture with hot-swap capability", "Endurance: 45–60+ minutes (subject to payload)", "Cruise speed: 18–25 m/s"] },
    { category: "Autonomy Stack", items: ["On-board flight controller (ARM Cortex-M4)", "Perception system (cameras, IMU, barometer)", "Real-time path planning and obstacle avoidance", "Fallback to GPS-denied navigation"] },
    { category: "Avionics & Control", items: ["Encrypted telemetry link (500+ m range)", "Redundant RC failsafe with geofencing", "Mission planning via ground control station", "Automated diagnostics and health monitoring"] },
    { category: "Payloads", items: ["Modular sensor integration", "Thermal/RGB camera support", "LIDAR and custom mission equipment", "Quick-change payload bay design"] },
    { category: "Testing & Validation", items: ["Structural load testing", "Aerodynamic wind-tunnel validation", "Hardware-in-loop (HIL) flight simulation", "Field trial regimen over 2025–2026"] },
  ];

  return (
    <section>
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Technical Specifications
          </h2>
          <p className="mt-3 text-muted-foreground">
            Detailed breakdown of Elysium's design and capabilities.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {specs.map((spec, idx) => (
            <motion.div
              key={spec.category}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.05 }}
              className="group rounded-xl border border-white/10 bg-black/30 p-6"
            >
              <div className="pointer-events-none absolute -inset-px rounded-xl bg-gradient-to-br from-cyan-500/20 to-violet-500/20 opacity-0 blur-[2px] transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative">
                <h3 className="text-sm font-semibold text-cyan-400">{spec.category}</h3>
                <ul className="mt-3 space-y-2">
                  {spec.items.map((item) => (
                    <li key={item} className="text-xs text-muted-foreground flex gap-2">
                      <span className="mt-1 h-1 w-1 rounded-full bg-violet-400 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function DesignPhilosophy() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Design Philosophy
            </h2>
            <p className="mt-4 text-muted-foreground">
              Elysium's design prioritizes reliability, modularity, and student-driven innovation. Every subsystem is engineered to be maintainable by the core team while supporting future research and customization.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                Airframe optimized for weight and structural integrity
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
                Autonomous stack designed for GPS-denied operations
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
                Redundancy and failsafe mechanisms at every critical layer
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-fuchsia-400" />
                Modular payload bay for rapid mission adaptation
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="rounded-2xl border border-white/10 bg-black/30 p-8">
              <h3 className="font-semibold">Key Milestones</h3>
              <div className="mt-6 space-y-4">
                {[
                  { phase: "Phase 1", desc: "Airframe design and fabrication (2024–2025)" },
                  { phase: "Phase 2", desc: "Avionics integration and testing (2025)" },
                  { phase: "Phase 3", desc: "Autonomous flight validation (Q4 2025–Q1 2026)" },
                  { phase: "Phase 4", desc: "Field trials and deployment prep (2026)" },
                ].map((m) => (
                  <div key={m.phase} className="border-l border-cyan-500/30 pl-4">
                    <div className="text-xs font-medium text-cyan-400">{m.phase}</div>
                    <div className="mt-1 text-xs text-muted-foreground">{m.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Development() {
  return (
    <section>
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Development Roadmap
          </h2>
          <p className="mt-3 text-muted-foreground">
            Our transparent path from concept to operational flight.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { q: "Q3 2025", title: "Airframe Ready", desc: "Structural tests complete, ready for integration" },
            { q: "Q4 2025", title: "First Flight", desc: "Maiden flight under autonomous control" },
            { q: "Q1 2026", title: "Extended Trials", desc: "Multi-flight validation across payloads" },
            { q: "Q2 2026", title: "Field Deployment", desc: "Mission-ready system with operational data" },
          ].map((item, idx) => (
            <motion.div
              key={item.q}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.1 }}
              className="rounded-xl border border-white/10 bg-black/30 p-6"
            >
              <div className="text-xs font-semibold text-cyan-400">{item.q}</div>
              <div className="mt-2 text-lg font-semibold">{item.title}</div>
              <p className="mt-2 text-xs text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Capabilities() {
  return (
    <section>
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Mission Capabilities
          </h2>
          <p className="mt-3 text-muted-foreground">
            Versatile platform ready for diverse operational scenarios.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { title: "Autonomous Patrol", desc: "Predefined waypoint navigation with real-time replanning" },
            { title: "Target Search", desc: "Sweep patterns and area coverage with efficient battery use" },
            { title: "Reconnaissance", desc: "High-resolution imaging and ISR data collection" },
            { title: "Obstacle Avoidance", desc: "On-board perception and dynamic path adjustment" },
            { title: "Loiter Operations", desc: "Extended hover with multi-sensor payload" },
            { title: "Failsafe RTH", desc: "Return-to-home with geofencing and safety zones" },
          ].map((cap, idx) => (
            <motion.div
              key={cap.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.05 }}
              className="group rounded-xl border border-white/10 bg-black/30 p-6"
            >
              <div className="pointer-events-none absolute -inset-px rounded-xl bg-gradient-to-br from-cyan-500/20 to-violet-500/20 opacity-0 blur-[2px] transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative">
                <h3 className="font-semibold">{cap.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{cap.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
