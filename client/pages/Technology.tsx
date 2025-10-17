import { motion } from "framer-motion";

export default function Technology() {
  const features = [
    {
      title: "Autonomous Flight",
      desc: "On‑board perception, guidance, and control for GPS‑denied environments with robust failsafes and mission logic.",
    },
    {
      title: "Mid‑Flight On‑Board Path Rerouting",
      desc: "Real‑time trajectory replanning on edge computers enables dynamic rerouting around threats and changing objectives.",
    },
    {
      title: "Secure Avionics",
      desc: "Encrypted telemetry, redundant links, and safe‑state behaviors for assured command and control.",
    },
    {
      title: "Lightweight Composite Airframe",
      desc: "Advanced materials and modular design optimized for maximum endurance, payload capacity, and field repair.",
    },
    {
      title: "Redundant Power Systems",
      desc: "Multi‑battery architecture with automatic failover and extended flight time through efficient power distribution.",
    },
    {
      title: "Edge Computing Platform",
      desc: "Onboard compute stack running inference and decision‑making algorithms without cloud dependency.",
    },
    {
      title: "Precision Navigation",
      desc: "Multi‑sensor fusion (IMU, magnetometer, barometer) for accurate positioning and attitude control.",
    },
    {
      title: "Long‑Range Communication",
      desc: "Encrypted RF links with extended range and anti‑jamming capabilities for tactical operations.",
    },
    {
      title: "Modular Payload Bay",
      desc: "Quick‑swap sensor integration supporting cameras, LIDAR, and custom mission equipment.",
    },
  ];

  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Technology
          </h1>
          <p className="mt-4 text-base text-muted-foreground">
            Our flight stack fuses aerospace engineering with dependable
            autonomy—built to adapt mid‑mission without cloud dependency.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          {features.map((f) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group relative rounded-xl border border-white/10 bg-black/30 p-6"
            >
              <div className="pointer-events-none absolute -inset-px rounded-xl bg-gradient-to-br from-cyan-500/20 to-violet-500/20 opacity-0 blur-[2px] transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative">
                <h3 className="text-lg font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
