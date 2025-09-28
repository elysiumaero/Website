import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Index() {
  return (
    <div className="flex flex-col">
      <Hero />
      <TrustedBy />
      <Features />
      <Prototype />
      <Progress />
      <Applications />
      <Roadmap />
      <CTA />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-32 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-gradient-to-tr from-cyan-400/30 via-sky-500/20 to-violet-500/30 blur-3xl" />
        <div className="absolute -bottom-20 left-10 h-72 w-72 rounded-full bg-cyan-500/20 blur-2xl" />
        <div className="absolute -right-10 top-10 h-40 w-40 rounded-full bg-violet-500/20 blur-2xl" />
      </div>
      <div className="mx-auto max-w-7xl px-4 pt-20 pb-28 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 md:grid-cols-2">
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
              Prototype in progress
            </div>
            <h1 className="mt-4 text-5xl font-extrabold leading-tight tracking-tight sm:text-6xl">
              Elysium Aerotech
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              A Krrypto Edutech venture shaping the future of UAVs. We craft
              unmanned aerial systems that merge aerospace‑grade engineering
              with autonomous intelligence.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/technology"
                className="inline-flex items-center rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm ring-1 ring-inset ring-white/10 transition hover:brightness-110 hover:scale-[1.03] active:scale-[0.98]"
              >
                Explore our tech
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center rounded-md px-6 py-3 text-sm font-semibold ring-1 ring-inset ring-white/15 text-foreground/90 hover:bg-white/5 transition hover:scale-[1.03] active:scale-[0.98]"
              >
                Get updates
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            <UAVIllustration />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function UAVIllustration() {
  return (
    <div className="relative mx-auto aspect-[4/3] w-full max-w-lg">
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/15 to-violet-500/15" />
      <div className="absolute inset-0 rounded-2xl ring-1 ring-white/10" />
      <svg viewBox="0 0 400 300" className="absolute inset-0 h-full w-full">
        <defs>
          <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#22d3ee" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>
        </defs>
        <g fill="none" stroke="url(#grad)" strokeWidth="2">
          <path d="M50 160 L180 140 L220 140 L350 160" opacity="0.7" />
          <path d="M140 140 L120 110 L90 100" opacity="0.7" />
          <path d="M260 140 L280 110 L310 100" opacity="0.7" />
          <ellipse cx="200" cy="160" rx="40" ry="16" opacity="0.8" />
          <circle cx="200" cy="150" r="6" />
        </g>
      </svg>
      <div className="absolute -inset-6 -z-10 animate-pulse rounded-[28px] bg-gradient-to-br from-cyan-500/10 to-violet-500/10 blur-2xl" />
    </div>
  );
}

function TrustedBy() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-3 text-sm text-muted-foreground">
          <span className="h-px w-10 bg-white/10" />A brand of{" "}
          <span className="font-semibold text-foreground">Krrypto Edutech</span>
          <span className="h-px w-10 bg-white/10" />
        </div>
      </div>
    </section>
  );
}

function Features() {
  const items = [
    {
      title: "Aerospace‑grade design",
      desc: "Lightweight composites and modular airframe built for endurance.",
    },
    {
      title: "Autonomous flight stack",
      desc: "Perception‑guided navigation with resilient mission control.",
    },
    {
      title: "Secure avionics",
      desc: "Redundant links, encrypted telemetry, and fail‑safe systems.",
    },
  ];

  return (
    <section>
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Engineering that inspires confidence
          </h2>
          <p className="mt-3 text-muted-foreground">
            We obsess over every gram and line of code to deliver a UAV you can
            trust.
          </p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((i) => (
            <motion.div
              key={i.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group relative rounded-xl border border-white/10 bg-black/30 p-6"
            >
              <div className="pointer-events-none absolute -inset-px rounded-xl bg-gradient-to-br from-cyan-500/20 to-violet-500/20 opacity-0 blur-[2px] transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative">
                <h3 className="text-lg font-semibold">{i.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{i.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Prototype() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Prototype in development
            </h2>
            <p className="mt-3 text-muted-foreground">
              We are actively building our first prototype airframe and avionics
              stack. Follow our journey as we validate aerodynamics, propulsion
              efficiency, and autonomous flight.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />{" "}
                Airframe v0.2 undergoing structural tests
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />{" "}
                Flight controller bring‑up with HIL simulation
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />{" "}
                Long‑range telemetry link evaluation
              </li>
            </ul>
          </motion.div>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { k: "Airframe", v: 72 },
              { k: "Avionics", v: 64 },
              { k: "Autonomy", v: 58 },
            ].map((s) => (
              <motion.div
                key={s.k}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45 }}
                className="rounded-lg border border-white/10 bg-black/30 p-4"
              >
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">{s.k}</span>
                  <span className="font-semibold">{s.v}%</span>
                </div>
                <div className="mt-2 h-2 w-full rounded-full bg-white/10">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${s.v}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="h-2 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Progress() {
  const stages = [
    { k: "Research", v: 80, color: "from-cyan-400 to-sky-500" },
    { k: "Prototype", v: 60, color: "from-violet-400 to-fuchsia-500" },
    { k: "Testing", v: 20, color: "from-blue-400 to-indigo-500" },
  ];
  return (
    <section>
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Project Stages</h2>
          <p className="mt-2 text-muted-foreground">Transparent progress across our build lifecycle.</p>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {stages.map((s) => (
            <motion.div
              key={s.k}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-xl border border-white/10 bg-black/30 p-5"
            >
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">{s.k}</span>
                <span className="font-semibold">{s.v}%</span>
              </div>
              <div className="mt-2 h-2 w-full rounded-full bg-white/10">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${s.v}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9 }}
                  className={`h-2 rounded-full bg-gradient-to-r ${s.color}`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Applications() {
  const apps = [
    {
      title: "Loitering Munition (Kamikaze)",
      desc: "Precision strike with operator oversight and strict engagement logic.",
    },
    {
      title: "Reconnaissance",
      desc: "Silent ISR with enduring flight time and stabilized payloads.",
    },
    {
      title: "Perimeter Security",
      desc: "Automated patrols with on‑board replanning and alerts.",
    },
  ];
  return (
    <section>
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Applications
          </h2>
          <p className="mt-3 text-muted-foreground">
            Built for real missions—from ISR to precision effects—with safety
            and control at the core.
          </p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {apps.map((a) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group relative rounded-xl border border-white/10 bg-black/30 p-6"
            >
              <div className="pointer-events-none absolute -inset-px rounded-xl bg-gradient-to-br from-cyan-500/20 to-violet-500/20 opacity-0 blur-[2px] transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative">
                <h3 className="text-lg font-semibold">{a.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{a.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Roadmap() {
  const items = [
    { title: "Q4 2025", text: "Prototype airframe flight‑ready" },
    { title: "Q1 2026", text: "Autonomous navigation milestones" },
    { title: "Q2 2026", text: "Field trials and data collection" },
  ];
  return (
    <section>
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Roadmap
          </h2>
          <p className="mt-3 text-muted-foreground">
            Transparent milestones as we turn ideas into flight.
          </p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {items.map((i) => (
            <motion.div
              key={i.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              className="group relative rounded-xl border border-white/10 bg-black/30 p-6 text-center"
            >
              <div className="pointer-events-none absolute -inset-px rounded-xl bg-gradient-to-b from-cyan-500/30 to-transparent opacity-0 blur-[2px] transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative">
                <div className="text-sm text-muted-foreground">{i.title}</div>
                <div className="mt-1 text-lg font-semibold">{i.text}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900 via-slate-950 to-black p-8 sm:p-10">
          <div className="absolute inset-0 bg-[radial-gradient(30rem_12rem_at_20%_-20%,rgba(56,189,248,.15),transparent),radial-gradient(24rem_10rem_at_100%_0%,rgba(168,85,247,.18),transparent)]" />
          <div className="relative grid items-center gap-6 sm:grid-cols-2">
            <div>
              <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">
                Be first to know when we fly
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Join our early updates and we will share key milestones,
                behind‑the‑scenes, and flight test results.
              </p>
            </div>
            <div className="flex justify-end">
              <Link
                to="/contact"
                className="inline-flex items-center rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm ring-1 ring-inset ring-white/10 transition hover:brightness-110 hover:scale-[1.03] active:scale-[0.98]"
              >
                Contact Elysium Aerotech
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
