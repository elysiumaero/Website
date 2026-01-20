import { AppLayout } from "@/layouts/AppLayout";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function About() {
  const navigate = useNavigate();

  const milestones = [
    { year: "2020", title: "Inception", description: "Elysium Aerotech founded with vision for autonomous flight" },
    { year: "2021", title: "First Flight", description: "Successful testing of autonomous navigation systems" },
    { year: "2022", title: "System Integration", description: "GARUD, SAMVAD, and KAVACH systems developed" },
    { year: "2023", title: "R&D Expansion", description: "Established dedicated research and development division" },
    { year: "2024", title: "Industry Recognition", description: "Partnerships with academic institutions and enterprises" },
    { year: "2025", title: "Scale & Innovation", description: "Advancing next-generation autonomous flight technology" },
  ];

  const capabilities = [
    {
      title: "Autonomous Navigation",
      description:
        "Advanced AI-powered navigation systems that enable autonomous flight in complex environments with precision positioning and real-time obstacle avoidance.",
      icon: "🧭",
    },
    {
      title: "Intelligent Surveillance",
      description:
        "GARUD system provides comprehensive aerial surveillance with advanced sensor fusion, threat detection, and real-time data processing capabilities.",
      icon: "📡",
    },
    {
      title: "Secure Communication",
      description:
        "SAMVAD framework ensures encrypted, redundant communication with military-grade security and low-latency data transmission across all systems.",
      icon: "🔒",
    },
    {
      title: "Security & Protection",
      description:
        "KAVACH system implements multi-layered security architecture with automatic threat response and fail-safe mechanisms for maximum operational integrity.",
      icon: "⚔️",
    },
    {
      title: "Sensor Integration",
      description:
        "Advanced sensor fusion technology combines data from multiple sources for enhanced situational awareness and decision-making.",
      icon: "🔍",
    },
    {
      title: "Software Architecture",
      description:
        "Enterprise-grade software architecture built for scalability, reliability, and continuous learning from operational data.",
      icon: "💻",
    },
  ];

  return (
    <AppLayout>
      <div className="pt-24 pb-24">
        {/* Hero Section */}
        <section className="relative py-16 px-6 mb-20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-bold font-orbitron text-foreground mb-6">
                About <span className="bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">Elysium</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Pioneering the future of autonomous flight through innovation, precision engineering, and unwavering
                commitment to excellence.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="relative py-20 px-6 bg-card/50 border-y border-border">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16">
              <div>
                <h2 className="text-3xl font-bold font-orbitron text-primary mb-6">Our Mission</h2>
                <p className="text-lg text-foreground leading-relaxed mb-4">
                  Elysium Aerotech is pioneering the future of autonomous flight and next-generation aerospace
                  technology. We develop cutting-edge solutions that combine advanced engineering with artificial
                  intelligence to create safer, smarter, and more efficient aerial systems.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our commitment to precision, innovation, and safety drives every decision we make. We believe that
                  the next frontier of technology lies in the autonomous systems that will shape the future of human
                  mobility and logistics.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold font-orbitron text-primary mb-6">Our Vision</h2>
                <p className="text-lg text-foreground leading-relaxed mb-4">
                  We envision a world where autonomous aircraft operate seamlessly in shared airspace, delivering goods,
                  providing services, and expanding human mobility beyond traditional boundaries.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Through continuous research and development, we're transforming aerospace theory into airborne
                  reality. Every system we build is a step toward a future where intelligent machines work in harmony
                  with human operators to achieve unprecedented capabilities.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="relative py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold font-orbitron text-foreground mb-4">Our Core Values</h2>
              <p className="text-lg text-muted-foreground">Principles that guide every decision and innovation</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: "⚡",
                  title: "Innovation",
                  description:
                    "Constantly pushing the boundaries of what's possible in aerospace technology and autonomous systems through cutting-edge research.",
                },
                {
                  icon: "🛡️",
                  title: "Safety",
                  description:
                    "Defense-grade reliability with redundant systems and fail-safe mechanisms ensuring maximum safety in all operations.",
                },
                {
                  icon: "🎯",
                  title: "Precision",
                  description:
                    "Meticulous attention to detail in design, development, and deployment creating reliable and efficient systems.",
                },
                {
                  icon: "🤝",
                  title: "Collaboration",
                  description:
                    "Working closely with partners, academic institutions, and industry leaders to advance aerospace innovation.",
                },
                {
                  icon: "🔬",
                  title: "Research",
                  description:
                    "Investing heavily in R&D to stay at the forefront of autonomous systems and aerospace technology.",
                },
                {
                  icon: "🌍",
                  title: "Impact",
                  description:
                    "Creating solutions that have meaningful, positive impact on society through intelligent technology.",
                },
              ].map((value, idx) => (
                <div key={idx} className="group p-8 bg-background border border-border rounded-lg hover:border-primary hover:bg-card/30 transition-all">
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{value.icon}</div>
                  <h3 className="text-xl font-bold font-orbitron text-foreground mb-3 group-hover:text-primary transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Capabilities */}
        <section className="relative py-20 px-6 bg-card/50 border-y border-border">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold font-orbitron text-foreground mb-4">Our Capabilities</h2>
              <p className="text-lg text-muted-foreground">Advanced technologies enabling autonomous flight</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {capabilities.map((cap, idx) => (
                <div key={idx} className="p-8 bg-background border border-border rounded-lg hover:border-primary/50 transition-all group">
                  <div className="text-4xl mb-4 group-hover:scale-125 transition-transform origin-left">{cap.icon}</div>
                  <h3 className="text-xl font-bold font-orbitron text-foreground mb-3">{cap.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{cap.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="relative py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold font-orbitron text-foreground mb-4">Our Journey</h2>
              <p className="text-lg text-muted-foreground">Milestones in advancing autonomous flight technology</p>
            </div>

            <div className="space-y-8">
              {milestones.map((milestone, idx) => (
                <div key={idx} className="flex gap-8 items-start">
                  <div className="relative flex flex-col items-center">
                    <div className="w-4 h-4 rounded-full bg-primary mt-2" />
                    {idx < milestones.length - 1 && (
                      <div className="w-1 h-24 bg-gradient-to-b from-primary to-primary/20 my-2" />
                    )}
                  </div>
                  <div className="pb-8 flex-1">
                    <p className="text-sm font-orbitron text-primary uppercase tracking-widest mb-2">{milestone.year}</p>
                    <h3 className="text-2xl font-bold font-orbitron text-foreground mb-2">{milestone.title}</h3>
                    <p className="text-muted-foreground">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-16 px-6 bg-gradient-to-r from-primary/10 to-primary/5">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-orbitron text-foreground mb-6">
              Want to Learn More?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Explore our cutting-edge technologies, meet our team, and discover how Elysium Aerotech is shaping the
              future of aerospace.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => navigate("/technologies")}
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 text-lg"
              >
                Explore Technology
              </Button>
              <Button
                onClick={() => navigate("/team")}
                variant="outline"
                className="px-8 py-4 text-lg"
              >
                Meet Our Team
              </Button>
            </div>
          </div>
        </section>
      </div>
    </AppLayout>
  );
}
