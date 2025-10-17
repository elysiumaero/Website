import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
  return (
    <div className="flex flex-col">
      <Hero />
      <FAQSection />
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
            Frequently Asked Questions
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Everything you need to know about Elysium Aerotech and our UAV systems.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function FAQSection() {
  const faqCategories = [
    {
      title: "About Elysium",
      questions: [
        {
          q: "What is Elysium Aerotech?",
          a: "Elysium Aerotech is a student-driven aerospace initiative under Krrypto Edutech, in partnership with Vivekananda Institute of Professional Studies (VIPS) - Technology Campus. We design and build autonomous unmanned aerial systems (UAVs) for tactical operations.",
        },
        {
          q: "Who runs the project?",
          a: "Elysium is led by a core team of engineering students and mentors from VIPS. Prerit Roshan is the Project Director, with specialized teams handling airframe design, avionics, autonomy, and operations.",
        },
        {
          q: "When is the first flight scheduled?",
          a: "We are targeting Q4 2025 for our maiden autonomous flight. This follows phases of airframe fabrication, avionics integration, and extensive ground testing.",
        },
        {
          q: "Is Elysium open-source?",
          a: "Currently, Elysium's design and software are proprietary to Elysium Aerotech. We are evaluating open-source contributions for select components in future phases.",
        },
      ],
    },
    {
      title: "Technical Details",
      questions: [
        {
          q: "What are the basic specs of the Elysium UAV?",
          a: "The Elysium UAV features a ~1.8m wingspan, composite airframe, electric propulsion, 45–60+ minute endurance, cruise speed of 18–25 m/s, and a modular payload bay. It integrates on-board autonomy, encrypted telemetry, and GPS-denied navigation.",
        },
        {
          q: "How does Elysium navigate without GPS?",
          a: "Elysium uses multi-sensor fusion (IMU, magnetometer, barometer, and on-board perception) combined with pre-programmed waypoints and on-board AI for autonomous flight in GPS-denied environments.",
        },
        {
          q: "What payloads can Elysium carry?",
          a: "The modular payload bay supports thermal cameras, RGB cameras, LIDAR, custom sensors, and mission-specific equipment. Payload swap is quick and field-serviceable.",
        },
        {
          q: "What is the range of the control link?",
          a: "The encrypted RF telemetry link provides control and telemetry over 500+ meters. The system is designed to autonomously execute missions and navigate to safety in case of link loss.",
        },
      ],
    },
    {
      title: "Operations & Capabilities",
      questions: [
        {
          q: "What can Elysium be used for?",
          a: "Elysium is designed for autonomous patrols, reconnaissance (ISR), perimeter security, obstacle avoidance, and precision operations. The modular design supports diverse mission profiles.",
        },
        {
          q: "How is safety ensured?",
          a: "Safety is built into every layer: redundant power systems, failsafe return-to-home, geofencing, encrypted command links, and extensive pre-flight checks. All systems are designed with fail-safe logic.",
        },
        {
          q: "Does Elysium require special certification to fly?",
          a: "Yes, like all UAV operations in India, Elysium requires compliance with DGCA regulations, airspace permissions, and operational approvals. We work with regulatory authorities for our test flights.",
        },
        {
          q: "Can Elysium fly in bad weather?",
          a: "Current design targets fair weather operations with robust failsafes for wind gusts and moderate environmental changes. Extreme weather operations are not part of the current scope.",
        },
      ],
    },
    {
      title: "Collaboration & Partnerships",
      questions: [
        {
          q: "How is VIPS - TC involved?",
          a: "Vivekananda Institute of Professional Studies - Technology Campus provides academic support, incubation environment, mentorship, and institutional resources. Many team members are VIPS students and alumni.",
        },
        {
          q: "Can other organizations partner with Elysium?",
          a: "Yes! We are open to partnerships for research, testing, payloads, and operational use cases. Contact us at collaborations for discussion.",
        },
        {
          q: "Are there internship opportunities?",
          a: "Yes, Elysium offers internship and research positions for engineering students. We are always looking for talented individuals in airframe, avionics, autonomy, and systems engineering.",
        },
      ],
    },
    {
      title: "Contact & Updates",
      questions: [
        {
          q: "How can I stay updated on Elysium?",
          a: "You can sign up for our newsletter on the contact page to receive updates on milestones, flight tests, and development progress.",
        },
        {
          q: "How do I contact Elysium for questions or partnerships?",
          a: "Please visit our Contact page or reach out to ProjectDirector.Elysium@krrypto.com for inquiries.",
        },
      ],
    },
  ];

  return (
    <section>
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {faqCategories.map((category, catIdx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIdx * 0.08 }}
            >
              <h2 className="text-2xl font-bold mb-6 text-cyan-400">{category.title}</h2>
              <div className="space-y-3">
                {category.questions.map((item, qIdx) => (
                  <FAQItem
                    key={item.q}
                    q={item.q}
                    a={item.a}
                    delay={qIdx * 0.05}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQItem({ q, a, delay }: { q: string; a: string; delay: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      className="group rounded-lg border border-white/10 bg-black/30 overflow-hidden transition-all duration-300"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
      >
        <h3 className="font-semibold text-foreground pr-4">{q}</h3>
        <ChevronDown
          size={20}
          className={`text-cyan-400 flex-shrink-0 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.2 }}
          className="border-t border-white/10 px-6 py-4 bg-black/50"
        >
          <p className="text-muted-foreground text-sm leading-relaxed">{a}</p>
        </motion.div>
      )}
    </motion.div>
  );
}
