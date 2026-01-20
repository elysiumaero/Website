import { AppLayout } from "@/layouts/AppLayout";
import { TeamSection } from "@/components/TeamSection";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function Team() {
  const navigate = useNavigate();

  return (
    <AppLayout>
      <div className="pt-24 pb-24">
        {/* Hero Section */}
        <section className="relative py-16 px-6 mb-20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-bold font-orbitron text-foreground mb-6">
                Our <span className="bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">Team</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Exceptional talent from diverse backgrounds united by a mission to advance autonomous flight technology
              </p>
            </div>
          </div>
        </section>

        {/* Team Overview */}
        <section className="relative py-20 px-6 bg-card/50 border-y border-border">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold font-orbitron text-foreground mb-4">Driving Innovation</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our team consists of world-class engineers, researchers, and leaders with expertise spanning aerospace,
                software, AI, security, and autonomous systems. Together, we're creating the future of flight.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              {[
                { number: "50+", label: "Team Members" },
                { number: "15+", label: "Countries Represented" },
                { number: "100+", label: "Years Combined Experience" },
                { number: "4", label: "Executive Leaders" },
              ].map((stat, idx) => (
                <div key={idx} className="text-center p-6 rounded-lg border border-primary/30 bg-primary/5">
                  <div className="text-3xl font-bold text-primary font-orbitron mb-2">{stat.number}</div>
                  <p className="text-muted-foreground text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section Component */}
        <div>
          <TeamSection />
        </div>

        {/* Leadership Philosophy */}
        <section className="relative py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold font-orbitron text-foreground mb-12 text-center">
              Our Leadership Philosophy
            </h2>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-foreground leading-relaxed mb-6">
                  Our leadership team brings decades of experience in aerospace, technology, and innovation. They are
                  committed to fostering a culture of excellence, continuous learning, and breakthrough innovation.
                </p>

                <p className="text-lg text-foreground leading-relaxed mb-8">
                  We believe that great technology comes from great teams. That's why we invest heavily in our people,
                  providing opportunities for growth, collaboration, and making a meaningful impact on the future of
                  autonomous flight.
                </p>

                <div className="space-y-4">
                  {[
                    "Commitment to Excellence",
                    "Innovation-Driven Culture",
                    "Inclusive Collaboration",
                    "Continuous Learning",
                  ].map((value, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span className="text-foreground">{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative h-80 bg-gradient-to-br from-primary/20 to-background rounded-lg border border-border flex items-center justify-center">
                <div className="text-6xl opacity-50">👥</div>
              </div>
            </div>
          </div>
        </section>

        {/* Specializations */}
        <section className="relative py-20 px-6 bg-card/30 border-y border-border">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold font-orbitron text-foreground mb-12 text-center">
              Core Competencies
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: "✈️",
                  title: "Aerospace Engineering",
                  description: "Design and development of autonomous aircraft systems with focus on safety and efficiency",
                },
                {
                  icon: "🧠",
                  title: "AI & Machine Learning",
                  description:
                    "Advanced algorithms and neural networks enabling intelligent autonomous decision-making",
                },
                {
                  icon: "🔒",
                  title: "Security & Cryptography",
                  description: "Military-grade security architecture protecting critical systems and data",
                },
                {
                  icon: "📡",
                  title: "Communication Systems",
                  description: "Low-latency, encrypted communication frameworks for autonomous vehicle networks",
                },
                {
                  icon: "🧪",
                  title: "System Integration",
                  description: "Seamless integration of complex subsystems into reliable autonomous platforms",
                },
                {
                  icon: "📊",
                  title: "Data Analytics",
                  description: "Real-time processing and analysis of sensor data for actionable insights",
                },
              ].map((comp, idx) => (
                <div key={idx} className="p-8 bg-background border border-border rounded-lg hover:border-primary/50 transition-colors group">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform origin-left">{comp.icon}</div>
                  <h3 className="text-lg font-bold font-orbitron text-foreground mb-3">{comp.title}</h3>
                  <p className="text-muted-foreground text-sm">{comp.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Culture Section */}
        <section className="relative py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold font-orbitron text-foreground mb-12 text-center">
              Team Culture
            </h2>

            <div className="grid md:grid-cols-2 gap-12">
              {[
                {
                  title: "Innovation First",
                  description:
                    "We encourage bold thinking and creative problem-solving. Our team pushes boundaries and challenges the status quo to drive breakthrough innovations.",
                },
                {
                  title: "Collaboration",
                  description:
                    "Cross-functional teams work together seamlessly, combining diverse expertise to solve complex challenges in autonomous systems.",
                },
                {
                  title: "Excellence",
                  description:
                    "We maintain the highest standards in everything we do - from engineering excellence to operational precision and attention to detail.",
                },
                {
                  title: "Growth Mindset",
                  description:
                    "We invest in continuous learning and professional development, providing opportunities for team members to expand their skills and expertise.",
                },
              ].map((aspect, idx) => (
                <div key={idx} className="p-8 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors">
                  <h3 className="text-2xl font-bold font-orbitron text-primary mb-4">{aspect.title}</h3>
                  <p className="text-foreground leading-relaxed">{aspect.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-16 px-6 bg-gradient-to-r from-primary/10 to-primary/5">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-orbitron text-foreground mb-6">
              Join Our Team
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We're always looking for talented individuals passionate about autonomous flight and cutting-edge technology.
              Help us shape the future of aerospace.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => navigate("/contact")}
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 text-lg"
              >
                Explore Careers
              </Button>
              <Button
                onClick={() => navigate("/rnd-lab")}
                variant="outline"
                className="px-8 py-4 text-lg"
              >
                View R&D Lab
              </Button>
            </div>
          </div>
        </section>
      </div>
    </AppLayout>
  );
}
