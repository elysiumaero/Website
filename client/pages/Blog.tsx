import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";

export default function Blog() {
  return (
    <div className="flex flex-col">
      <Hero />
      <BlogPosts />
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
            News & Updates
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Behind-the-scenes insights, technical deep-dives, and milestone announcements from the Elysium team.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function BlogPosts() {
  const posts = [
    {
      date: "November 15, 2024",
      category: "Engineering",
      title: "Composite Airframe Design: Materials & Methods",
      excerpt: "We break down our selection of carbon fiber and epoxy composites for the Elysium airframe, including manufacturing processes and quality assurance.",
      image: "📐",
    },
    {
      date: "November 8, 2024",
      category: "Milestone",
      title: "Elysium Aerotech Launches Officially",
      excerpt: "Today marks the official launch of Elysium Aerotech as a student-driven aerospace initiative in partnership with VIPS - TC and Krrypto Edutech.",
      image: "🚀",
    },
    {
      date: "October 28, 2024",
      category: "Technical",
      title: "GPS-Denied Navigation: Building Resilience",
      excerpt: "How we use IMU fusion and on-board perception to achieve accurate autonomous flight in environments where GPS is unavailable or unreliable.",
      image: "🛰️",
    },
    {
      date: "October 15, 2024",
      category: "Research",
      title: "Autonomous Path Planning in Real-Time",
      excerpt: "A deep dive into our on-board trajectory replanning algorithm, designed for dynamic obstacle avoidance and mission adaptation without cloud compute.",
      image: "🧭",
    },
    {
      date: "September 30, 2024",
      category: "Partnership",
      title: "Collaborating with VIPS - Technology Campus",
      excerpt: "Exploring how institutional partnerships accelerate innovation. Learn why VIPS - TC is the perfect home for student-driven aerospace R&D.",
      image: "🤝",
    },
    {
      date: "September 10, 2024",
      category: "Engineering",
      title: "Avionics Stack Design for Resilience",
      excerpt: "Redundancy, encryption, and failsafe mechanisms at the core of Elysium's avionics architecture. How we ensure mission-critical reliability.",
      image: "⚙️",
    },
  ];

  return (
    <section>
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, idx) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="group flex flex-col rounded-xl border border-white/10 bg-black/30 overflow-hidden hover:border-cyan-500/50 transition-colors"
            >
              <div className="pointer-events-none absolute -inset-px rounded-xl bg-gradient-to-br from-cyan-500/20 to-violet-500/20 opacity-0 blur-[2px] transition-opacity duration-300 group-hover:opacity-100" />

              <div className="relative flex-1 flex flex-col">
                <div className="flex items-center justify-center h-40 bg-gradient-to-br from-cyan-500/10 to-violet-500/10 text-6xl">
                  {post.image}
                </div>

                <div className="flex-1 p-6 flex flex-col">
                  <div className="flex items-center gap-2 text-xs">
                    <Calendar size={14} className="text-cyan-400" />
                    <span className="text-muted-foreground">{post.date}</span>
                  </div>
                  <div className="mt-2 inline-flex">
                    <span className="rounded-full bg-cyan-500/20 text-cyan-400 px-3 py-1 text-xs font-medium">
                      {post.category}
                    </span>
                  </div>

                  <h3 className="mt-4 text-lg font-semibold leading-tight text-foreground">
                    {post.title}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground flex-1">
                    {post.excerpt}
                  </p>

                  <div className="mt-4 flex items-center gap-2 text-sm font-medium text-cyan-400 group-hover:translate-x-1 transition-transform">
                    Read More
                    <ArrowRight size={16} />
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground mb-4">Subscribe to our newsletter for the latest updates</p>
          <a
            href="/contact"
            className="inline-flex items-center rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm ring-1 ring-inset ring-white/10 transition hover:brightness-110 hover:scale-[1.03] active:scale-[0.98]"
          >
            Stay Updated
          </a>
        </motion.div>
      </div>
    </section>
  );
}
