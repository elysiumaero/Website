import { motion } from "framer-motion";

type Member = {
  role: string;
  name: string;
  blurb?: string;
  contact?: string;
};

export default function Team() {
  const members: Member[] = [
    {
      role: "Project Director",
      name: "Prerit Roshan",
      blurb:
        "Leads program execution, partnerships, and mission requirements. Primary point of contact.",
      contact: "ProjectDirector.Elysium@krrypto.com",
    },
    {
      role: "Technical Director",
      name: "Vivaan Punhani",
      blurb:
        "Oversees the engineering roadmap, systems architecture, and cross‑team technical execution.",
    },
    {
      role: "Technical Project Manager",
      name: "Sanvi Vig",
      blurb:
        "Drives planning, delivery, and cross‑functional coordination across avionics and airframe workstreams.",
    },
    {
      role: "Assistant Project Manager",
      name: "Palak Deswal",
      blurb:
        "Supports project tracking, documentation, and operational workflows for engineering teams.",
    },
    {
      role: "Deputy Technical Director",
      name: "Vishwas Khandelwal",
      blurb:
        "Guides subsystem design reviews and ensures quality standards across hardware and software.",
    },
    {
      role: "Avionics Engineer",
      name: "Abdullah Munawwar Khan",
      blurb:
        "Designs and integrates flight‑critical avionics, telemetry, and on‑board compute.",
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
    {
      role: "Assistant Finance Executive",
      name: "Riya Agarwal",
      blurb: "Manages accounts operations, invoices, and reporting cadence.",
    },
    {
      role: "Sr. Advisor",
      name: "Harsh Juneja",
      blurb: "Advises on strategy, partnerships, and program governance.",
    },
    {
      role: "Advisor",
      name: "Ankita Bansal",
      blurb: "Guides organizational processes and stakeholder engagement.",
    },
  ];

  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Team
          </h1>
          <p className="mt-4 text-base text-muted-foreground">
            A focused team of engineers, operators, and advisors building
            dependable UAV systems.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {members.map((m) => (
            <motion.div
              key={`${m.role}-${m.name}`}
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
                <div className="mt-1 text-base font-semibold">{m.name}</div>
                {m.blurb && (
                  <p className="mt-2 text-xs text-muted-foreground">
                    {m.blurb}
                  </p>
                )}
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
