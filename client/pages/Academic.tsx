import { AppLayout } from "@/layouts/AppLayout";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { CheckCircle, Users, BookOpen, Code } from "lucide-react";

export default function Academic() {
  const navigate = useNavigate();

  const partners = [
    {
      name: "VIPS-TC",
      location: "Delhi, India",
      logo: "🎓",
      description:
        "Vishveshwaranand Institute of Professional Studies - Technological Campus is a leading institution for research and innovation in autonomous systems, robotics, and embedded systems.",
      focus: ["Autonomous Robotics", "Embedded Systems", "AI & Machine Learning", "Sensor Technology"],
      collaboration:
        "Joint research initiatives in autonomous flight systems, sensor fusion, and AI-powered decision making. Regular exchange of researchers and students.",
    },
  ];

  const initiatives = [
    {
      icon: Users,
      title: "Student Internship Program",
      description:
        "Comprehensive internship opportunities for students interested in autonomous systems, aerospace engineering, and robotics development.",
      benefits: [
        "Hands-on experience with real systems",
        "Mentorship from industry experts",
        "Potential for full-time opportunities",
        "Publication in academic journals",
      ],
    },
    {
      icon: BookOpen,
      title: "Joint Research Programs",
      description:
        "Collaborative research initiatives combining academic rigor with industry expertise to advance autonomous flight technology.",
      benefits: [
        "Access to state-of-the-art research facilities",
        "Funding for promising research projects",
        "Publication in top-tier journals",
        "Technology transfer opportunities",
      ],
    },
    {
      icon: Code,
      title: "Technology & Knowledge Exchange",
      description:
        "Regular seminars, workshops, and knowledge-sharing sessions between industry and academic partners.",
      benefits: [
        "Access to latest industry practices",
        "Guest lectures from experts",
        "Technology licensing opportunities",
        "Curriculum development collaboration",
      ],
    },
  ];

  const programs = [
    {
      name: "Research Fellowship",
      description: "Dedicated research positions for exceptional students and researchers",
      duration: "6-12 months",
      focus: "Autonomous Systems Research",
    },
    {
      name: "Summer Internship",
      description: "Intensive summer program for undergraduate and graduate students",
      duration: "2-3 months",
      focus: "Aerospace Development",
    },
    {
      name: "Doctoral Collaboration",
      description: "Ph.D. support and industry partnerships for doctoral researchers",
      duration: "2-4 years",
      focus: "Advanced Research",
    },
    {
      name: "Post-Doctoral Fellowship",
      description: "Research positions for advanced researchers and specialists",
      duration: "1-2 years",
      focus: "Specialized Topics",
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
                Academic <span className="bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">Partnerships</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Collaborating with leading institutions to advance autonomous flight research and innovation
              </p>
            </div>
          </div>
        </section>

        {/* Partnership Overview */}
        <section className="relative py-20 px-6 bg-card/50 border-y border-border">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold font-orbitron text-foreground mb-4">
                Strategic Academic Collaboration
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We partner with leading academic institutions to advance research, develop talent, and push the boundaries
                of autonomous systems technology.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { number: "5+", label: "Active Partnerships" },
                { number: "100+", label: "Researchers Engaged" },
                { number: "10+", label: "Joint Projects" },
              ].map((stat, idx) => (
                <div key={idx} className="text-center p-6 rounded-lg border border-primary/30 bg-primary/5">
                  <div className="text-4xl font-bold text-primary font-orbitron mb-2">{stat.number}</div>
                  <p className="text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partners */}
        <section className="relative py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold font-orbitron text-foreground mb-16 text-center">Our Partners</h2>

            {partners.map((partner, idx) => (
              <div
                key={idx}
                className="grid md:grid-cols-2 gap-12 items-center mb-16 p-8 bg-card border border-border rounded-lg"
              >
                <div>
                  <div className="flex items-center gap-6 mb-8">
                    <div className="text-6xl">{partner.logo}</div>
                    <div>
                      <h3 className="text-3xl font-bold font-orbitron text-foreground">{partner.name}</h3>
                      <p className="text-muted-foreground">{partner.location}</p>
                    </div>
                  </div>

                  <p className="text-lg text-foreground mb-8 leading-relaxed">{partner.description}</p>

                  <div>
                    <p className="text-sm uppercase tracking-widest text-primary font-orbitron mb-4">Research Focus</p>
                    <div className="flex flex-wrap gap-2 mb-8">
                      {partner.focus.map((area, aidx) => (
                        <span key={aidx} className="px-3 py-1 rounded-full text-sm bg-primary/10 text-primary border border-primary/30">
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-2xl font-bold font-orbitron text-primary mb-6">Collaboration</h4>
                  <p className="text-foreground leading-relaxed">{partner.collaboration}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Initiatives */}
        <section className="relative py-20 px-6 bg-card/30 border-y border-border">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold font-orbitron text-foreground mb-4">Collaboration Initiatives</h2>
              <p className="text-lg text-muted-foreground">
                Programs and opportunities for academic and student engagement
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {initiatives.map((init, idx) => {
                const Icon = init.icon;
                return (
                  <div key={idx} className="p-8 bg-background border border-border rounded-lg hover:border-primary/50 transition-colors group">
                    <Icon className="w-12 h-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
                    <h3 className="text-xl font-bold font-orbitron text-foreground mb-3">{init.title}</h3>
                    <p className="text-muted-foreground mb-6">{init.description}</p>

                    <div>
                      <p className="text-xs uppercase tracking-widest text-primary font-orbitron mb-3">Benefits</p>
                      <ul className="space-y-2">
                        {init.benefits.map((benefit, bidx) => (
                          <li key={bidx} className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-muted-foreground">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Programs */}
        <section className="relative py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold font-orbitron text-foreground mb-4">Engagement Programs</h2>
              <p className="text-lg text-muted-foreground">
                Opportunities for students and researchers to contribute to our mission
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {programs.map((program, idx) => (
                <div key={idx} className="p-8 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors">
                  <h3 className="text-2xl font-bold font-orbitron text-primary mb-3">{program.name}</h3>
                  <p className="text-foreground mb-6">{program.description}</p>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs uppercase tracking-widest text-primary font-orbitron mb-2">Duration</p>
                      <p className="text-foreground font-semibold">{program.duration}</p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-primary font-orbitron mb-2">Focus</p>
                      <p className="text-foreground font-semibold">{program.focus}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="relative py-20 px-6 bg-card/30 border-y border-border">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold font-orbitron text-foreground mb-12 text-center">
              Why Partner with Us?
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Access to Cutting-Edge Technology",
                  description:
                    "Work with state-of-the-art autonomous systems, AI platforms, and aerospace research tools.",
                },
                {
                  title: "Industry Expertise",
                  description:
                    "Learn from experienced engineers and researchers working on real-world aerospace challenges.",
                },
                {
                  title: "Research Funding",
                  description:
                    "Significant investment in promising research projects with potential for real-world application.",
                },
                {
                  title: "Publication Opportunities",
                  description:
                    "Collaborate on research publications in top-tier academic journals and conferences.",
                },
                {
                  title: "Career Opportunities",
                  description:
                    "Direct pathway to career opportunities with Elysium Aerotech and our industry partners.",
                },
                {
                  title: "Global Network",
                  description:
                    "Connect with leading researchers and companies in the aerospace and autonomous systems fields.",
                },
              ].map((benefit, idx) => (
                <div key={idx} className="p-6 rounded-lg border border-border hover:border-primary/50 bg-background transition-colors">
                  <h3 className="text-lg font-bold font-orbitron text-primary mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-orbitron text-foreground mb-6">
              Ready to Collaborate?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Contact our academic partnerships team to explore opportunities for collaboration and research.
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
                Explore R&D Lab
              </Button>
            </div>
          </div>
        </section>
      </div>
    </AppLayout>
  );
}
