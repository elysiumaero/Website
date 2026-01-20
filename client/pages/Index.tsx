import { AppLayout } from "@/layouts/AppLayout";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Shield, Cpu, Radio, Target, Lightbulb } from "lucide-react";

export default function Index() {
  const navigate = useNavigate();

  const features = [
    {
      icon: Zap,
      title: "Autonomous Flight",
      description: "Advanced autonomous navigation systems for precision flight operations",
      highlight: true,
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Military-grade encryption and secure communication protocols",
      highlight: false,
    },
    {
      icon: Cpu,
      title: "AI Intelligence",
      description: "Machine learning-powered navigation and threat detection",
      highlight: false,
    },
    {
      icon: Radio,
      title: "Secure Communication",
      description: "Redundant, encrypted communication architecture (SAMVAD)",
      highlight: true,
    },
    {
      icon: Target,
      title: "Precision Systems",
      description: "KAVACH security framework with fail-safe protection",
      highlight: false,
    },
    {
      icon: Lightbulb,
      title: "Innovation Lab",
      description: "Cutting-edge R&D in autonomous systems and AI",
      highlight: true,
    },
  ];

  const stats = [
    { number: "10+", label: "Core Technologies" },
    { number: "3", label: "Flagship Systems" },
    { number: "50+", label: "Team Members" },
    { number: "24/7", label: "R&D Operations" },
  ];

  return (
    <AppLayout>
      {/* Hero Section */}
      <section className="relative min-h-screen pt-32 pb-20 px-6 overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card/20 pointer-events-none" />
        <div className="absolute top-40 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-20 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl opacity-10 pointer-events-none" />

        <div className="relative max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block mb-6">
              <span className="text-xs uppercase tracking-widest font-orbitron text-primary bg-primary/10 px-4 py-2 rounded-full">
                Next Generation Aerospace
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold font-orbitron text-foreground mb-6 leading-tight">
              Autonomous Flight{" "}
              <span className="bg-gradient-to-r from-primary via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Redefined
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
              Precision engineering meets autonomous excellence. Elysium Aerotech is pioneering the future of
              intelligent aerial systems with industry-leading innovation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button
                onClick={() => navigate("/technologies")}
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 text-lg font-semibold rounded-lg transition-all shadow-lg hover:shadow-xl hover:shadow-primary/20 group"
              >
                Explore Our Technology
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                onClick={() => navigate("/contact")}
                variant="outline"
                className="px-8 py-4 text-lg font-semibold rounded-lg border-primary text-primary hover:bg-primary/10 transition-all"
              >
                Partner With Us
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 border-t border-border">
              {stats.map((stat, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-primary font-orbitron mb-2">
                    {stat.number}
                  </div>
                  <p className="text-sm md:text-base text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="relative py-24 px-6 bg-card/50 border-y border-border">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-orbitron text-foreground mb-4">
              Advanced Capabilities
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Engineered for excellence, designed for the future
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div
                  key={idx}
                  className={`group relative p-8 rounded-lg border transition-all duration-300 ${
                    feature.highlight
                      ? "border-primary bg-primary/5 hover:bg-primary/10 hover:shadow-lg hover:shadow-primary/20"
                      : "border-border bg-background/50 hover:border-primary/50 hover:bg-background/80"
                  }`}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div
                      className={`p-3 rounded-lg ${
                        feature.highlight
                          ? "bg-primary/20 text-primary"
                          : "bg-secondary text-secondary-foreground"
                      } group-hover:scale-110 transition-transform`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    {feature.highlight && (
                      <span className="text-xs uppercase tracking-widest font-orbitron text-primary">Featured</span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-2 font-orbitron">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Highlighted Systems */}
      <section className="relative py-24 px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-orbitron text-foreground mb-4">
              Flagship Systems
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Proven solutions for advanced aerial operations
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "GARUD",
                subtitle: "Surveillance & Detection",
                description:
                  "Comprehensive aerial surveillance and threat detection system with advanced sensor fusion capabilities.",
                features: ["360° Coverage", "AI Detection", "Real-time Processing"],
              },
              {
                name: "SAMVAD",
                subtitle: "Communication Framework",
                description:
                  "Secure, redundant communication platform ensuring reliable data transmission across all systems.",
                features: ["Encrypted", "Redundant", "Low-Latency"],
              },
              {
                name: "KAVACH",
                subtitle: "Security & Protection",
                description:
                  "Multi-layered security architecture protecting against threats and ensuring operational integrity.",
                features: ["Military-Grade", "Fail-Safe", "Autonomous Response"],
              },
            ].map((system, idx) => (
              <div
                key={idx}
                className="group relative border border-border rounded-lg p-8 bg-card/50 hover:border-primary hover:bg-card transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
              >
                <div className="mb-4">
                  <h3 className="text-3xl font-bold font-orbitron text-primary mb-2">{system.name}</h3>
                  <p className="text-sm uppercase tracking-widest text-muted-foreground">{system.subtitle}</p>
                </div>

                <p className="text-foreground mb-6">{system.description}</p>

                <div className="flex flex-wrap gap-2">
                  {system.features.map((feature, fidx) => (
                    <span
                      key={fidx}
                      className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/30"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t border-border">
                  <button
                    onClick={() => navigate("/systems")}
                    className="text-primary hover:text-primary/80 font-semibold text-sm flex items-center gap-2 transition-colors"
                  >
                    Learn More <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-6 bg-gradient-to-r from-primary/10 to-primary/5 border-y border-border/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-orbitron text-foreground mb-6">
            Ready to Advance Your Aerial Operations?
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            Join industry leaders who trust Elysium Aerotech for next-generation autonomous flight solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => navigate("/contact")}
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 text-lg font-semibold"
            >
              Get Started Today
            </Button>
            <Button
              onClick={() => navigate("/about")}
              variant="outline"
              className="px-8 py-4 text-lg font-semibold"
            >
              Learn More About Us
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="relative py-16 px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { title: "Technologies", path: "/technologies" },
              { title: "R&D Lab", path: "/rnd-lab" },
              { title: "Our Team", path: "/team" },
              { title: "Academic Partners", path: "/academic" },
            ].map((link, idx) => (
              <button
                key={idx}
                onClick={() => navigate(link.path)}
                className="p-6 rounded-lg border border-border hover:border-primary/50 bg-card/30 hover:bg-card transition-all text-center group"
              >
                <p className="font-semibold text-foreground group-hover:text-primary transition-colors">{link.title}</p>
                <ArrowRight className="w-4 h-4 mx-auto mt-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
            ))}
          </div>
        </div>
      </section>
    </AppLayout>
  );
}
