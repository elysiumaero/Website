import { motion } from "framer-motion";
import { useState } from "react";

export default function Gallery() {
  return (
    <div className="flex flex-col">
      <Hero />
      <GalleryGrid />
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
            Gallery & Media
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Visual journey through Elysium's design, fabrication, and testing phases.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function GalleryGrid() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const galleryItems = [
    {
      id: 1,
      title: "Airframe Assembly",
      category: "fabrication",
      description: "Composite wing section being assembled",
      image: "🏗️",
      color: "from-cyan-500/20 to-sky-500/20",
    },
    {
      id: 2,
      title: "CAD Design",
      category: "design",
      description: "3D CAD model of the complete airframe",
      image: "📐",
      color: "from-violet-500/20 to-fuchsia-500/20",
    },
    {
      id: 3,
      title: "Avionics Integration",
      category: "electronics",
      description: "Flight controller and sensor suite installation",
      image: "⚙️",
      color: "from-sky-500/20 to-cyan-500/20",
    },
    {
      id: 4,
      title: "Structural Testing",
      category: "testing",
      description: "Load testing of wing structures",
      image: "🧪",
      color: "from-fuchsia-500/20 to-violet-500/20",
    },
    {
      id: 5,
      title: "Team Working Session",
      category: "behind-scenes",
      description: "Engineering team collaborating on design refinements",
      image: "👥",
      color: "from-cyan-500/20 to-violet-500/20",
    },
    {
      id: 6,
      title: "Prototype Testing",
      category: "testing",
      description: "Ground testing before maiden flight",
      image: "🔬",
      color: "from-sky-500/20 to-fuchsia-500/20",
    },
    {
      id: 7,
      title: "Flight Simulation",
      category: "simulation",
      description: "Hardware-in-loop flight simulation setup",
      image: "💻",
      color: "from-violet-500/20 to-cyan-500/20",
    },
    {
      id: 8,
      title: "Propulsion System",
      category: "electronics",
      description: "Motor and battery configuration",
      image: "⚡",
      color: "from-fuchsia-500/20 to-sky-500/20",
    },
    {
      id: 9,
      title: "Quality Assurance",
      category: "testing",
      description: "Pre-flight system checks and validation",
      image: "✅",
      color: "from-cyan-500/20 to-fuchsia-500/20",
    },
    {
      id: 10,
      title: "Sensor Calibration",
      category: "electronics",
      description: "IMU and magnetometer calibration procedure",
      image: "📡",
      color: "from-sky-500/20 to-violet-500/20",
    },
    {
      id: 11,
      title: "Aerodynamic Analysis",
      category: "design",
      description: "CFD simulation results and validation",
      image: "💨",
      color: "from-violet-500/20 to-sky-500/20",
    },
    {
      id: 12,
      title: "Field Operations",
      category: "behind-scenes",
      description: "Preparing for outdoor flight tests",
      image: "🌍",
      color: "from-fuchsia-500/20 to-cyan-500/20",
    },
  ];

  const categories = [
    { id: "all", label: "All" },
    { id: "design", label: "Design" },
    { id: "fabrication", label: "Fabrication" },
    { id: "electronics", label: "Electronics" },
    { id: "testing", label: "Testing" },
    { id: "simulation", label: "Simulation" },
    { id: "behind-scenes", label: "Behind the Scenes" },
  ];

  const filtered =
    selectedCategory === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

  return (
    <section>
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 flex flex-wrap gap-3 justify-center"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === cat.id
                  ? "bg-cyan-500 text-black ring-2 ring-cyan-400"
                  : "border border-white/10 text-muted-foreground hover:border-cyan-500/50 hover:text-foreground"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="group rounded-xl overflow-hidden border border-white/10 bg-black/30 hover:border-cyan-500/50 transition-colors"
            >
              <div className={`pointer-events-none absolute -inset-px rounded-xl bg-gradient-to-br ${item.color} opacity-0 blur-[2px] transition-opacity duration-300 group-hover:opacity-100`} />

              <div className="relative">
                {/* Image Area */}
                <div className={`bg-gradient-to-br ${item.color} h-48 flex items-center justify-center text-6xl overflow-hidden`}>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {item.image}
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="text-xs font-semibold text-cyan-400 uppercase tracking-wide">
                    {categories.find((c) => c.id === item.category)?.label}
                  </div>
                  <h3 className="mt-2 text-lg font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Video Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 rounded-2xl border border-white/10 bg-black/30 overflow-hidden"
        >
          <div className="aspect-video bg-gradient-to-br from-cyan-500/10 to-violet-500/10 flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl mb-4">🎬</div>
              <h3 className="text-2xl font-semibold mb-2">Flight Test Videos</h3>
              <p className="text-muted-foreground">
                Maiden flight footage and test flight compilations coming soon
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
