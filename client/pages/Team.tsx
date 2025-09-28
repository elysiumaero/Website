import { motion } from "framer-motion";
import { useState } from "react";

type Member = {
  role: string;
  name: string;
  blurb?: string;
  contact?: string;
};

function slugify(s: string) {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function AvatarImg({ slug, name }: { slug: string; name: string }) {
  const sources = [
    `/team/${slug}/avatar.webp`,
    `/team/${slug}/avatar.png`,
    `/team/${slug}/avatar.jpg`,
    `/team/${slug}/avatar.jpeg`,
    `/team/${slug}/avatar.svg`,
    "/placeholder.svg",
  ];
  const [idx, setIdx] = useState(0);
  return (
    <img
      src={sources[idx]}
      alt={`${name} portrait`}
      onError={() => setIdx((i) => Math.min(i + 1, sources.length - 1))}
      className="mx-auto mb-3 h-16 w-16 rounded-full object-cover ring-1 ring-white/10"
      loading="lazy"
      decoding="async"
    />
  );
}

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
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group perspective"
            >
              <div className="relative preserve-3d rounded-xl border border-white/10 bg-black/30 p-6 text-center transition-transform duration-500 group-hover:rotate-y-180">
                <div className="pointer-events-none absolute -inset-px rounded-xl bg-gradient-to-b from-cyan-500/30 to-transparent opacity-0 blur-[2px] transition-opacity duration-300 group-hover:opacity-100" />
                {/* Front */}
                <div className="relative backface-hidden">
                  <AvatarImg slug={slugify(m.name)} name={m.name} />
                  <div className="text-sm text-muted-foreground">{m.role}</div>
                  <div className="mt-1 text-base font-semibold">{m.name}</div>
                </div>
                {/* Back */}
                <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-xl p-6">
                  {m.blurb && (
                    <p className="mt-2 text-xs text-muted-foreground">{m.blurb}</p>
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
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
