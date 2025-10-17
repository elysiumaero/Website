import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Careers() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Why />
      <Roles />
      <Culture />
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
            Join Elysium Aerotech
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Be part of a student-driven team pioneering the future of autonomous aerospace systems.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function Why() {
  return (
    <section>
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Why Join Elysium?
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Real-World Impact",
              desc: "Work on cutting-edge UAV technology with immediate application in aerospace and research.",
              icon: "🎯",
            },
            {
              title: "Learn from Experts",
              desc: "Mentorship from industry professionals and experienced engineers in the aerospace field.",
              icon: "👨‍🏫",
            },
            {
              title: "Hands-On Engineering",
              desc: "Direct involvement in design, fabrication, integration, and flight testing.",
              icon: "🔧",
            },
            {
              title: "Startup Environment",
              desc: "Fast-paced, dynamic culture with rapid iteration and learning opportunities.",
              icon: "⚡",
            },
            {
              title: "Career Growth",
              desc: "Build a portfolio of aerospace projects and gain recognition in the industry.",
              icon: "📈",
            },
            {
              title: "Collaborative Team",
              desc: "Work with talented peers across mechanical, electrical, and software engineering.",
              icon: "🤝",
            },
          ].map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
              className="group rounded-xl border border-white/10 bg-black/30 p-6 text-center"
            >
              <div className="pointer-events-none absolute -inset-px rounded-xl bg-gradient-to-br from-cyan-500/20 to-violet-500/20 opacity-0 blur-[2px] transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative">
                <div className="text-4xl">{item.icon}</div>
                <h3 className="mt-3 font-semibold">{item.title}</h3>
                <p className="mt-2 text-xs text-muted-foreground">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Roles() {
  const positions = [
    {
      title: "Aerospace Engineer (Internship/Full-time)",
      team: "Airframe & Structures",
      description: "Design and optimize UAV airframe structures using CAD and FEA. Responsible for composite fabrication oversight and structural testing.",
      qualifications: ["Knowledge of CAD (CATIA/SolidWorks)", "Understanding of materials science", "Interest in aerospace design"],
      type: "Full-time / Internship",
    },
    {
      title: "Avionics Engineer (Internship/Full-time)",
      team: "Flight Systems",
      description: "Design flight controllers, sensor integration, and telemetry systems. Work on embedded C/C++ firmware for mission-critical flight logic.",
      qualifications: ["Embedded systems knowledge", "PCB design experience", "Microcontroller programming (ARM/STM32)"],
      type: "Full-time / Internship",
    },
    {
      title: "Software Engineer - Autonomy (Internship/Full-time)",
      team: "Autonomous Systems",
      description: "Develop on-board autonomy stack including path planning, obstacle avoidance, and navigation algorithms using Python/C++.",
      qualifications: ["ROS or robotics experience", "Python/C++ proficiency", "Understanding of control systems"],
      type: "Full-time / Internship",
    },
    {
      title: "Mechanical Engineer (Internship)",
      team: "Systems Integration",
      description: "Support integration of subsystems, mechanical testing, and field operations. Assist with prototyping and design iterations.",
      qualifications: ["CAD proficiency", "Problem-solving mindset", "Interest in manufacturing"],
      type: "Internship",
    },
    {
      title: "Ground Control Station Developer (Internship)",
      team: "Operations",
      description: "Build mission planning and monitoring software for the ground station using Python/PyQt or web technologies.",
      qualifications: ["Python or web development", "GUI design experience", "Interest in real-time systems"],
      type: "Internship",
    },
    {
      title: "Research Assistant (Internship)",
      team: "Innovation",
      description: "Conduct research on autonomous algorithms, sensor fusion, or novel UAV applications. Publish findings and contribute to technical documentation.",
      qualifications: ["Research interest", "Writing skills", "MATLAB/Python", "Literature review capability"],
      type: "Internship",
    },
  ];

  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Open Positions
          </h2>
          <p className="mt-3 text-muted-foreground">
            Currently accepting applications for internships and full-time roles.
          </p>
        </div>

        <div className="grid gap-6">
          {positions.map((position, idx) => (
            <motion.div
              key={position.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="group rounded-xl border border-white/10 bg-black/30 p-6 hover:border-cyan-500/50 transition-colors"
            >
              <div className="pointer-events-none absolute -inset-px rounded-xl bg-gradient-to-br from-cyan-500/20 to-violet-500/20 opacity-0 blur-[2px] transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
                  <div>
                    <h3 className="text-lg font-semibold">{position.title}</h3>
                    <div className="mt-1 flex gap-3 flex-wrap">
                      <span className="text-xs rounded-full bg-cyan-500/20 text-cyan-400 px-2 py-1">
                        {position.team}
                      </span>
                      <span className="text-xs rounded-full bg-violet-500/20 text-violet-400 px-2 py-1">
                        {position.type}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-muted-foreground text-sm mb-3">{position.description}</p>

                <div>
                  <div className="text-xs font-semibold text-cyan-400 mb-2">Qualifications:</div>
                  <ul className="space-y-1">
                    {position.qualifications.map((qual) => (
                      <li key={qual} className="text-xs text-muted-foreground flex items-center gap-2">
                        <span className="h-1 w-1 rounded-full bg-violet-400" />
                        {qual}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-4">
                  <a
                    href="/contact"
                    className="text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors flex items-center gap-1"
                  >
                    Apply Now
                    <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Culture() {
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
              Our Culture
            </h2>
            <p className="mt-4 text-muted-foreground">
              Elysium thrives on a culture of innovation, collaboration, and learning. We value:
            </p>
            <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                Ownership and accountability in your work
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
                Continuous learning and skill development
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
                Open communication and feedback
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-fuchsia-400" />
                Experimentation and learning from failures
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                Teamwork across disciplines
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-white/10 bg-gradient-to-br from-cyan-500/10 to-violet-500/10 p-8"
          >
            <div className="space-y-4">
              <div>
                <div className="text-4xl font-bold text-cyan-400">100%</div>
                <div className="text-sm text-muted-foreground">Student-led initiative</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-violet-400">10+</div>
                <div className="text-sm text-muted-foreground">Dedicated team members</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-sky-400">2024+</div>
                <div className="text-sm text-muted-foreground">Years of aerospace R&D</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900 via-slate-950 to-black p-8 sm:p-10 text-center"
        >
          <div className="absolute inset-0 bg-[radial-gradient(30rem_12rem_at_20%_-20%,rgba(56,189,248,.15),transparent),radial-gradient(24rem_10rem_at_100%_0%,rgba(168,85,247,.18),transparent)]" />
          <div className="relative">
            <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Ready to build the future of aerospace?
            </h3>
            <p className="mt-2 text-muted-foreground">
              Send us your resume and a brief note about why you're excited to join Elysium.
            </p>
            <div className="mt-6">
              <a
                href="/contact"
                className="inline-flex items-center rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm ring-1 ring-inset ring-white/10 transition hover:brightness-110 hover:scale-[1.03] active:scale-[0.98]"
              >
                Apply to Elysium
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
