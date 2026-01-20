import { AppLayout } from "@/layouts/AppLayout";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { CheckCircle, Shield, Radio, BarChart3 } from "lucide-react";

export default function Systems() {
  const navigate = useNavigate();

  const systems = [
    {
      name: "GARUD",
      tagline: "Surveillance & Detection",
      icon: "🛰️",
      color: "from-blue-500 to-cyan-400",
      overview:
        "GARUD is an advanced aerial surveillance and detection system designed to provide comprehensive environmental awareness with real-time threat analysis and precision target acquisition.",
      description:
        "GARUD integrates cutting-edge sensor fusion technology with AI-powered analysis to deliver actionable intelligence. The system combines multiple sensor modalities including optical, infrared, and synthetic aperture radar for comprehensive coverage.",
      specs: [
        { label: "Coverage Range", value: "360° Panoramic" },
        { label: "Detection Accuracy", value: "99.2%" },
        { label: "Processing Latency", value: "<50ms" },
        { label: "Operational Altitude", value: "500m - 5000m" },
      ],
      features: [
        "360° environmental surveillance",
        "Advanced AI threat detection algorithms",
        "Real-time data processing and analysis",
        "Autonomous target acquisition and tracking",
        "High-precision imagery and 3D mapping",
        "Multi-spectral imaging capabilities",
        "Cloud-based analytics and reporting",
        "Autonomous mission planning",
      ],
      capabilities: [
        "Real-time threat detection and classification",
        "Autonomous route planning and optimization",
        "Precision landing and takeoff guidance",
        "Environmental hazard detection",
        "Moving target detection and tracking",
        "Pattern-of-life analysis",
        "Change detection mapping",
      ],
      useCases: [
        "Border surveillance and monitoring",
        "Critical infrastructure protection",
        "Urban development and planning",
        "Environmental monitoring",
        "Disaster assessment",
        "Search and rescue operations",
      ],
    },
    {
      name: "SAMVAD",
      tagline: "Communication Framework",
      icon: "📡",
      color: "from-green-500 to-emerald-400",
      overview:
        "SAMVAD is a secure, redundant communication framework ensuring reliable command and data transfer with military-grade security protocols and ultra-low latency.",
      description:
        "SAMVAD provides the backbone for all system communications, implementing end-to-end encryption, automatic relay networks, and anti-jamming capabilities. The framework supports autonomous relay operations when primary channels are unavailable.",
      specs: [
        { label: "Encryption Standard", value: "Military-Grade AES-256" },
        { label: "Communication Latency", value: "<10ms" },
        { label: "Bandwidth", value: "1-100 Mbps" },
        { label: "Range", value: "50km - 200km+" },
      ],
      features: [
        "Military-grade AES-256 encryption",
        "Low-latency real-time communication",
        "Redundant transmission channels",
        "Autonomous relay station deployment",
        "Anti-jamming and frequency hopping",
        "Multi-vehicle coordination protocols",
        "Emergency broadcast capabilities",
        "Encrypted data logging",
      ],
      capabilities: [
        "Real-time command and control",
        "High-bandwidth data transmission",
        "Autonomous relay operations",
        "Secure data streaming",
        "Multi-vehicle coordination",
        "Network topology adaptation",
        "Automatic failover protocols",
      ],
      useCases: [
        "Real-time command and control of autonomous systems",
        "High-bandwidth data transmission",
        "Multi-vehicle coordination and swarm operations",
        "Emergency communication networks",
        "Military and defense applications",
        "Remote operational control",
      ],
    },
    {
      name: "KAVACH",
      tagline: "Security & Protection",
      icon: "⚔️",
      color: "from-red-500 to-orange-400",
      overview:
        "KAVACH is a multi-layered security framework providing autonomous protection, threat response, and fail-safe mechanisms to ensure operational integrity and mission assurance.",
      description:
        "KAVACH implements defense-in-depth architecture with multiple redundant protection systems. The framework includes automatic threat detection, real-time response protocols, and autonomous evasion capabilities designed to protect systems under all operational conditions.",
      specs: [
        { label: "Threat Detection", value: "Real-time" },
        { label: "Response Time", value: "<5ms" },
        { label: "Redundancy Level", value: "Triple-Redundant" },
        { label: "Security Certifications", value: "Military Grade" },
      ],
      features: [
        "Multi-layered security protocols",
        "Real-time threat detection and classification",
        "Automatic threat response systems",
        "Triple-redundant control architecture",
        "Autonomous evasion capabilities",
        "Fail-safe protection mechanisms",
        "Self-diagnostic security monitoring",
        "Encrypted threat logs and reporting",
      ],
      capabilities: [
        "Real-time threat detection",
        "Autonomous threat response",
        "Fail-safe emergency protocols",
        "System integrity verification",
        "Intrusion detection systems",
        "Autonomous defensive maneuvers",
        "Mission abort procedures",
      ],
      useCases: [
        "Military and defense operations",
        "Critical infrastructure protection",
        "High-value asset security",
        "Autonomous system protection",
        "Network security assurance",
        "Mission-critical operations",
      ],
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
                Flagship <span className="bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">Systems</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Integrated platforms delivering autonomous flight capabilities at the highest level
              </p>
            </div>
          </div>
        </section>

        {/* Systems Detail */}
        <div className="space-y-20 px-6">
          {systems.map((system, idx) => (
            <section key={idx} className="relative">
              <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="mb-12">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="text-6xl">{system.icon}</div>
                    <div>
                      <h2 className={`text-5xl font-bold font-orbitron bg-gradient-to-r ${system.color} bg-clip-text text-transparent`}>
                        {system.name}
                      </h2>
                      <p className="text-lg text-muted-foreground">{system.tagline}</p>
                    </div>
                  </div>
                  <p className="text-xl text-foreground leading-relaxed">{system.overview}</p>
                </div>

                {/* Main Grid */}
                <div className="grid md:grid-cols-3 gap-8 mb-12">
                  {/* Description */}
                  <div className="md:col-span-2">
                    <h3 className="text-2xl font-bold font-orbitron text-primary mb-4">System Overview</h3>
                    <p className="text-foreground leading-relaxed mb-8">{system.description}</p>

                    {/* Capabilities */}
                    <div className="mb-8">
                      <h4 className="text-lg font-bold font-orbitron text-primary mb-4">Key Capabilities</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {system.capabilities.map((cap, cidx) => (
                          <div key={cidx} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-muted-foreground">{cap}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Specs Box */}
                  <div className="bg-card border border-border rounded-lg p-8 h-fit">
                    <h4 className="text-lg font-bold font-orbitron text-primary mb-6">Specifications</h4>
                    <div className="space-y-6">
                      {system.specs.map((spec, sidx) => (
                        <div key={sidx}>
                          <p className="text-xs uppercase tracking-widest text-primary/60 mb-2">{spec.label}</p>
                          <p className="text-lg font-semibold text-foreground">{spec.value}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Features Section */}
                <div className="mb-12 bg-card/50 border border-border rounded-lg p-8">
                  <h4 className="text-2xl font-bold font-orbitron text-primary mb-8">Advanced Features</h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    {system.features.map((feature, fidx) => (
                      <div key={fidx} className="flex items-start gap-4">
                        <div className="text-primary">✓</div>
                        <div>
                          <p className="font-semibold text-foreground">{feature}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Use Cases */}
                <div className="mb-12">
                  <h4 className="text-2xl font-bold font-orbitron text-primary mb-8">Primary Use Cases</h4>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {system.useCases.map((useCase, ucidx) => (
                      <div key={ucidx} className="p-4 rounded-lg border border-primary/30 bg-primary/5 hover:border-primary/50 transition-colors">
                        <p className="text-foreground font-medium">{useCase}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Divider */}
                {idx < systems.length - 1 && (
                  <div className="my-16 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
                )}
              </div>
            </section>
          ))}
        </div>

        {/* Integration Benefits */}
        <section className="relative py-20 px-6 bg-card/30 border-y border-border mt-20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold font-orbitron text-foreground mb-12 text-center">
              Integration Benefits
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Shield,
                  title: "Comprehensive Security",
                  description: "Multi-layered protection ensuring maximum safety and integrity across all operations",
                },
                {
                  icon: Radio,
                  title: "Reliable Communication",
                  description: "Military-grade encryption and redundant channels for always-on connectivity",
                },
                {
                  icon: BarChart3,
                  title: "Actionable Intelligence",
                  description: "Real-time analysis and insights enabling smart decision-making",
                },
              ].map((benefit, idx) => {
                const Icon = benefit.icon;
                return (
                  <div key={idx} className="p-8 bg-background border border-border rounded-lg hover:border-primary transition-colors group">
                    <Icon className="w-12 h-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
                    <h3 className="text-xl font-bold font-orbitron text-foreground mb-3">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-orbitron text-foreground mb-6">
              Ready to Deploy?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Contact our team to discuss how these systems can meet your specific operational requirements.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => navigate("/contact")}
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 text-lg"
              >
                Get in Touch
              </Button>
              <Button
                onClick={() => navigate("/rnd-lab")}
                variant="outline"
                className="px-8 py-4 text-lg"
              >
                Explore R&D
              </Button>
            </div>
          </div>
        </section>
      </div>
    </AppLayout>
  );
}
