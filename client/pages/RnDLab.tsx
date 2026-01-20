import { AppLayout } from "@/layouts/AppLayout";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Lightbulb, Zap, Target, TrendingUp } from "lucide-react";

export default function RnDLab() {
  const navigate = useNavigate();

  const researchAreas = [
    {
      icon: Lightbulb,
      title: "Autonomous Navigation Intelligence",
      description:
        "Developing advanced AI algorithms for real-time path planning, obstacle avoidance, and autonomous decision-making in complex environments.",
      focus: ["Deep learning models", "Real-time optimization", "Edge computing", "Adaptive algorithms"],
    },
    {
      icon: Zap,
      title: "Anti-Loop & Fail-Safe Path Planning",
      description:
        "Creating robust systems that prevent circular flight patterns and ensure safe operation even under sensor failures or communication loss.",
      focus: ["Redundancy architecture", "Safety verification", "Emergency protocols", "Autonomous recovery"],
    },
    {
      icon: Target,
      title: "Sensor Fusion & Threat Detection",
      description:
        "Integrating data from multiple sensors to create comprehensive environmental awareness and detect potential threats in real-time.",
      focus: ["Multi-sensor integration", "Threat classification", "Real-time processing", "Predictive analysis"],
    },
    {
      icon: TrendingUp,
      title: "Redundant Decision Architecture",
      description:
        "Implementing multiple independent decision-making systems that verify each other, ensuring mission-critical reliability.",
      focus: ["Triple redundancy", "Consensus algorithms", "Conflict resolution", "System integrity"],
    },
    {
      icon: Lightbulb,
      title: "Swarm Coordination Algorithms",
      description:
        "Developing protocols for autonomous systems to coordinate with each other, enabling complex multi-vehicle operations.",
      focus: ["Distributed computing", "Communication protocols", "Formation control", "Swarm behaviors"],
    },
    {
      icon: Zap,
      title: "Secure Embedded Communication",
      description:
        "Creating communication systems that are small, lightweight, and secure while maintaining high bandwidth and low latency.",
      focus: ["Miniaturization", "Encryption efficiency", "Low power design", "Autonomous relays"],
    },
  ];

  const projects = [
    {
      name: "Project EAGLE",
      status: "Active",
      description: "Autonomous flight testing and validation platform",
      progress: 75,
    },
    {
      name: "Project HORIZON",
      status: "Active",
      description: "Next-generation sensor fusion systems",
      progress: 60,
    },
    {
      name: "Project GUARDIAN",
      status: "Development",
      description: "Advanced security and threat detection",
      progress: 45,
    },
    {
      name: "Project NEXUS",
      status: "Development",
      description: "Multi-vehicle coordination platform",
      progress: 40,
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
                R&D <span className="bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">Laboratory</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Where aerospace theory becomes airborne reality through cutting-edge research and innovation
              </p>
            </div>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="relative py-20 px-6 bg-card/50 border-y border-border">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold font-orbitron text-foreground mb-6">Our Research Mission</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                The Elysium Research & Development Division is committed to pushing the boundaries of autonomous flight
                technology. Our team of expert researchers and engineers work on breakthrough innovations that will shape
                the future of aerial systems. We focus on solving the hardest problems in autonomous navigation,
                communication, security, and intelligent decision-making.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { number: "50+", label: "Active Researchers" },
                { number: "10+", label: "Research Projects" },
                { number: "24/7", label: "Lab Operations" },
              ].map((stat, idx) => (
                <div key={idx} className="text-center p-6 rounded-lg border border-primary/30 bg-primary/5">
                  <div className="text-4xl font-bold text-primary font-orbitron mb-2">{stat.number}</div>
                  <p className="text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Research Areas */}
        <section className="relative py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold font-orbitron text-foreground mb-4">Research Focus Areas</h2>
              <p className="text-lg text-muted-foreground">
                Core technology development driving autonomous flight innovation
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {researchAreas.map((area, idx) => {
                const Icon = area.icon;
                return (
                  <div key={idx} className="group relative p-8 bg-card border border-border rounded-lg hover:border-primary/50 hover:bg-background transition-all">
                    <Icon className="w-12 h-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
                    <h3 className="text-xl font-bold font-orbitron text-foreground mb-3 group-hover:text-primary transition-colors">
                      {area.title}
                    </h3>
                    <p className="text-muted-foreground mb-6">{area.description}</p>

                    <div className="space-y-2">
                      <p className="text-xs uppercase tracking-widest text-primary font-orbitron">Focus Areas</p>
                      {area.focus.map((item, fidx) => (
                        <div key={fidx} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                          <span className="text-sm text-muted-foreground">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Active Projects */}
        <section className="relative py-20 px-6 bg-card/30 border-y border-border">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold font-orbitron text-foreground mb-4">Active Projects</h2>
              <p className="text-lg text-muted-foreground">
                Current R&D initiatives advancing autonomous flight technology
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, idx) => (
                <div key={idx} className="p-8 bg-background border border-border rounded-lg hover:border-primary/50 transition-colors">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className="text-2xl font-bold font-orbitron text-foreground mb-2">{project.name}</h3>
                      <p className="text-primary text-sm font-orbitron uppercase tracking-widest">{project.status}</p>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-6">{project.description}</p>

                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <p className="text-xs uppercase tracking-widest text-primary font-orbitron">Progress</p>
                      <span className="text-lg font-bold text-primary">{project.progress}%</span>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-2 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-primary to-cyan-400 transition-all duration-500"
                        style={{ width: `${project.progress}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Collaboration Section */}
        <section className="relative py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold font-orbitron text-foreground mb-12 text-center">
              Industry Partnerships
            </h2>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold font-orbitron text-primary mb-6">Academic Collaboration</h3>
                <p className="text-lg text-foreground mb-6 leading-relaxed">
                  We partner with leading academic institutions including VIPS-TC (Delhi) to advance research in autonomous
                  systems, robotics, and aerospace engineering. These partnerships enable us to access cutting-edge research,
                  tap into talent pools, and contribute to the academic community.
                </p>

                <ul className="space-y-3 mb-8">
                  {[
                    "Joint research initiatives",
                    "Student internship programs",
                    "Technology transfer partnerships",
                    "Academic publication collaboration",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  onClick={() => navigate("/academic")}
                  className="bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  Learn About Partnerships
                </Button>
              </div>

              <div className="relative h-80 bg-gradient-to-br from-primary/20 to-background rounded-lg border border-border flex items-center justify-center">
                <div className="text-6xl opacity-50">🎓</div>
              </div>
            </div>
          </div>
        </section>

        {/* Innovation Process */}
        <section className="relative py-20 px-6 bg-card/30 border-y border-border">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold font-orbitron text-foreground mb-12 text-center">
              Our Innovation Process
            </h2>

            <div className="grid md:grid-cols-4 gap-6">
              {[
                { number: "1", title: "Ideation", description: "Exploring breakthrough concepts and innovations" },
                { number: "2", title: "Research", description: "Conducting in-depth technical research and analysis" },
                { number: "3", title: "Development", description: "Building and testing prototypes and systems" },
                { number: "4", title: "Deployment", description: "Integrating innovations into products" },
              ].map((step, idx) => (
                <div key={idx} className="relative">
                  <div className="p-6 text-center rounded-lg border border-primary/30 bg-primary/5 hover:border-primary/50 transition-colors h-full">
                    <div className="text-4xl font-bold text-primary font-orbitron mb-3">{step.number}</div>
                    <h4 className="text-lg font-bold font-orbitron text-foreground mb-2">{step.title}</h4>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                  {idx < 3 && (
                    <div className="hidden md:flex absolute -right-3 top-1/2 transform -translate-y-1/2">
                      <div className="w-6 h-1 bg-primary/50" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-orbitron text-foreground mb-6">
              Interested in Our Research?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Explore collaboration opportunities, join our team, or learn about partnerships.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => navigate("/team")}
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 text-lg"
              >
                Join Our Team
              </Button>
              <Button
                onClick={() => navigate("/contact")}
                variant="outline"
                className="px-8 py-4 text-lg"
              >
                Collaborate With Us
              </Button>
            </div>
          </div>
        </section>
      </div>
    </AppLayout>
  );
}
