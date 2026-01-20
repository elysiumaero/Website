import { AppLayout } from "@/layouts/AppLayout";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";

export default function Technologies() {
  const navigate = useNavigate();

  const technologies = [
    {
      title: "Autonomous Flight Systems",
      description:
        "Advanced navigation and control systems that enable fully autonomous flight operations with precision and reliability.",
      features: [
        "Real-time path planning and optimization",
        "Obstacle detection and avoidance",
        "Precision landing and takeoff",
        "Multi-mode flight operations",
      ],
      icon: "✈️",
    },
    {
      title: "AI & Machine Learning",
      description:
        "Intelligent algorithms that learn from operational data to improve decision-making and system performance.",
      features: [
        "Adaptive navigation learning",
        "Predictive threat analysis",
        "Pattern recognition systems",
        "Continuous system optimization",
      ],
      icon: "🧠",
    },
    {
      title: "Sensor Fusion",
      description:
        "Integration of multiple sensor types for comprehensive environmental awareness and situational understanding.",
      features: [
        "Multi-sensor data integration",
        "Real-time environment mapping",
        "Threat detection systems",
        "High-precision positioning",
      ],
      icon: "📡",
    },
    {
      title: "Secure Communication",
      description:
        "Military-grade encrypted communication protocols ensuring secure data transmission and system control.",
      features: [
        "End-to-end encryption",
        "Low-latency communication",
        "Redundant transmission channels",
        "Anti-jamming capabilities",
      ],
      icon: "🔐",
    },
    {
      title: "Software Architecture",
      description:
        "Enterprise-grade software platform designed for scalability, reliability, and continuous improvement.",
      features: [
        "Modular system design",
        "Real-time processing",
        "Autonomous learning capabilities",
        "Cloud-based analytics",
      ],
      icon: "💻",
    },
    {
      title: "Redundancy & Fail-Safe",
      description:
        "Multiple redundant systems and automatic fail-safe mechanisms ensuring maximum operational safety.",
      features: [
        "Triple-redundant controls",
        "Automatic failover systems",
        "Emergency protocols",
        "Self-diagnostic capabilities",
      ],
      icon: "🛡️",
    },
  ];

  const flagshipSystems = [
    {
      name: "GARUD",
      subtitle: "Surveillance & Detection System",
      description:
        "Advanced aerial surveillance and detection platform with comprehensive sensor fusion and real-time threat analysis.",
      capabilities: [
        "360° environmental surveillance",
        "Advanced threat detection algorithms",
        "Real-time data processing and analysis",
        "Autonomous target acquisition",
        "High-precision imagery and mapping",
      ],
      applications: ["Border surveillance", "Infrastructure monitoring", "Threat assessment", "Search & rescue operations"],
    },
    {
      name: "SAMVAD",
      subtitle: "Communication Framework",
      description:
        "Secure, redundant communication system ensuring reliable command and data transfer with military-grade security.",
      capabilities: [
        "Military-grade encryption",
        "Low-latency communication",
        "Redundant transmission channels",
        "Autonomous relay stations",
        "Anti-jamming architecture",
      ],
      applications: ["Command & control", "Real-time data transmission", "Multi-vehicle coordination", "Emergency communications"],
    },
    {
      name: "KAVACH",
      subtitle: "Security & Protection System",
      description:
        "Multi-layered security framework with automatic threat response and fail-safe protection mechanisms.",
      capabilities: [
        "Multi-layered security protocols",
        "Automatic threat detection",
        "Real-time threat response",
        "Fail-safe protection mechanisms",
        "Autonomous evasion capabilities",
      ],
      applications: ["System protection", "Threat neutralization", "Autonomous defense", "Mission assurance"],
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
                Core <span className="bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">Technologies</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Advanced systems and algorithms powering the next generation of autonomous aircraft
              </p>
            </div>
          </div>
        </section>

        {/* Technology Grid */}
        <section className="relative py-20 px-6 bg-card/30 border-y border-border">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold font-orbitron text-foreground mb-4">Our Technology Stack</h2>
              <p className="text-lg text-muted-foreground">
                Integrated systems enabling intelligent, autonomous flight operations
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {technologies.map((tech, idx) => (
                <div
                  key={idx}
                  className="group relative border border-border rounded-lg p-8 bg-background hover:border-primary/50 hover:bg-card/50 transition-all"
                >
                  <div className="text-5xl mb-6 group-hover:scale-110 transition-transform origin-left">{tech.icon}</div>

                  <h3 className="text-xl font-bold font-orbitron text-foreground mb-3 group-hover:text-primary transition-colors">
                    {tech.title}
                  </h3>

                  <p className="text-muted-foreground mb-6">{tech.description}</p>

                  <div className="space-y-3">
                    {tech.features.map((feature, fidx) => (
                      <div key={fidx} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Flagship Systems Section */}
        <section className="relative py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold font-orbitron text-foreground mb-4">Flagship Systems</h2>
              <p className="text-lg text-muted-foreground">
                Proven solutions integrating core technologies into complete systems
              </p>
            </div>

            <div className="space-y-16">
              {flagshipSystems.map((system, idx) => (
                <div key={idx} className="grid md:grid-cols-2 gap-12 items-start">
                  {/* Content */}
                  <div className={idx % 2 === 1 ? "md:order-2" : ""}>
                    <h3 className="text-4xl font-bold font-orbitron text-primary mb-3">{system.name}</h3>
                    <p className="text-sm uppercase tracking-widest text-muted-foreground mb-6">{system.subtitle}</p>

                    <p className="text-lg text-foreground leading-relaxed mb-8">{system.description}</p>

                    <div>
                      <h4 className="text-sm uppercase tracking-widest font-orbitron text-primary/80 mb-4">
                        Key Capabilities
                      </h4>
                      <ul className="space-y-3 mb-8">
                        {system.capabilities.map((cap, cidx) => (
                          <li key={cidx} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-muted-foreground">{cap}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-sm uppercase tracking-widest font-orbitron text-primary/80 mb-4">
                        Applications
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {system.applications.map((app, aidx) => (
                          <span key={aidx} className="px-3 py-1 rounded-full text-sm bg-primary/10 text-primary border border-primary/30">
                            {app}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Visual */}
                  <div
                    className={`relative h-80 bg-gradient-to-br from-primary/20 via-background to-secondary/10 rounded-lg border border-border flex items-center justify-center ${
                      idx % 2 === 1 ? "md:order-1" : ""
                    }`}
                  >
                    <div className="text-7xl opacity-50">{["✈️", "📡", "⚔️"][idx]}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Integration Section */}
        <section className="relative py-20 px-6 bg-card/30 border-y border-border">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold font-orbitron text-foreground mb-12 text-center">
              System Integration
            </h2>

            <div className="relative">
              {/* Flow Diagram */}
              <div className="grid md:grid-cols-4 gap-6 mb-8">
                {[
                  { name: "Sensors", icon: "📡" },
                  { name: "AI Engine", icon: "🧠" },
                  { name: "Decision Logic", icon: "⚙️" },
                  { name: "Actuation", icon: "✈️" },
                ].map((step, idx) => (
                  <div key={idx}>
                    <div className="text-center p-6 rounded-lg border border-primary/30 bg-primary/5 hover:border-primary/50 transition-colors">
                      <div className="text-4xl mb-3">{step.icon}</div>
                      <p className="font-semibold text-foreground">{step.name}</p>
                    </div>
                    {idx < 3 && (
                      <div className="hidden md:flex justify-center mt-6 mb-6">
                        <ArrowRight className="w-6 h-6 text-primary/50" />
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <p className="text-center text-muted-foreground max-w-2xl mx-auto">
                Real-time sensor fusion → Intelligent processing → Autonomous decision-making → Precise aircraft control
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-orbitron text-foreground mb-6">
              Advanced Technology, Proven Results
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Explore how our integrated systems deliver next-generation autonomous flight capabilities.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => navigate("/systems")}
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 text-lg gap-2"
              >
                View Flagship Systems
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button
                onClick={() => navigate("/rnd-lab")}
                variant="outline"
                className="px-8 py-4 text-lg"
              >
                R&D Lab
              </Button>
            </div>
          </div>
        </section>
      </div>
    </AppLayout>
  );
}
