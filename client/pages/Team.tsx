import { motion } from "framer-motion";

export default function Team() {
  const members = [
    {
      role: "Project Director",
      name: "Prerit Roshan",
      blurb:
        "Leads program execution, partnerships, and mission requirements. Primary point of contact.",
      contact: "ProjectDirector.Elysium@krrypto.com",
    },
    {
      role: "Finance & Operations Head",
      name: "Raghav Jindal",
      blurb: "Oversees finance, operations, compliance, and vendor management.",
    },
    {
      role: "Deputy Finance Officer",
      name: "Dev Garg",
      blurb: "Supports budgeting, forecasting, and procurement workflows.",
    },
  ];

  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Core Team
          </h1>
          <p className="mt-4 text-base text-muted-foreground">
            A focused team of engineers and operators building dependable UAV
            systems.
          </p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {members.map((m) => (
            <motion.div
              key={m.role}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group relative rounded-xl border border-white/10 bg-black/30 p-6 text-center"
            >
              <div className="pointer-events-none absolute -inset-px rounded-xl bg-gradient-to-b from-cyan-500/30 to-transparent opacity-0 blur-[2px] transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative">
                <div className="mx-auto mb-3 h-16 w-16 rounded-full bg-gradient-to-br from-cyan-500/20 to-violet-500/20 ring-1 ring-white/10" />
                <div className="text-sm text-muted-foreground">{m.role}</div>
                <div className="mt-1 text-base font-semibold">
                  {m.name || m.role}
                </div>
                <p className="mt-2 text-xs text-muted-foreground">{m.blurb}</p>
                {m.contact && (
                  <a
                    href={`mailto:${m.contact}`}
                    className="mt-3 inline-block text-xs font-medium text-primary hover:underline"
                  >
                    {m.contact}
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
