import React from "react";

export const AcademicPartnership: React.FC = () => {
  return (
    <section id="academic" className="relative py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-orbitron mb-6">
            Academic & Research <span className="text-primary">Collaboration</span>
          </h2>
          <div className="h-1 w-24 bg-primary mx-auto rounded-full" />
        </div>

        {/* Partnership card */}
        <div className="bg-card border border-border rounded-lg p-12 hover:border-primary transition-colors">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left side - Partner info */}
            <div>
              <h3 className="text-3xl font-bold font-orbitron text-primary mb-6">
                Vivekananda Institute of Professional Studies – Technical Campus
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Elysium Aerotech is proud to partner with VIPS-TC, a leading institution in technical education and
                research. Together, we advance the boundaries of autonomous systems, robotics, and aerospace technology
                through collaborative research and student innovation programs.
              </p>

              <h4 className="text-xl font-bold font-orbitron text-primary mb-4">Partnership Focus Areas</h4>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold text-xl">→</span>
                  <span>
                    <strong>Industry-Academia Collaboration:</strong> Bridge between academic research and real-world
                    aerospace applications
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold text-xl">→</span>
                  <span>
                    <strong>Research Support:</strong> Funding and resources for cutting-edge research initiatives
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold text-xl">→</span>
                  <span>
                    <strong>Student Innovation Programs:</strong> Internships, mentorship, and project opportunities
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold text-xl">→</span>
                  <span>
                    <strong>Autonomous Systems Research:</strong> Joint development of UAV systems and robotics
                  </span>
                </li>
              </ul>
            </div>

            {/* Right side - Stats/Benefits */}
            <div className="space-y-6">
              <div className="p-6 bg-background rounded-lg border border-border/50">
                <p className="text-4xl font-bold font-orbitron text-primary mb-2">50+</p>
                <p className="text-muted-foreground font-orbitron text-sm uppercase tracking-widest">
                  Research Projects
                </p>
              </div>

              <div className="p-6 bg-background rounded-lg border border-border/50">
                <p className="text-4xl font-bold font-orbitron text-primary mb-2">100+</p>
                <p className="text-muted-foreground font-orbitron text-sm uppercase tracking-widest">
                  Student Participants
                </p>
              </div>

              <div className="p-6 bg-background rounded-lg border border-border/50">
                <p className="text-4xl font-bold font-orbitron text-primary mb-2">24/7</p>
                <p className="text-muted-foreground font-orbitron text-sm uppercase tracking-widest">
                  Lab Access
                </p>
              </div>

              <div className="p-6 bg-background rounded-lg border border-border/50">
                <p className="text-4xl font-bold font-orbitron text-primary mb-2">∞</p>
                <p className="text-muted-foreground font-orbitron text-sm uppercase tracking-widest">
                  Learning Opportunities
                </p>
              </div>
            </div>
          </div>

          {/* Call to action */}
          <div className="mt-12 pt-12 border-t border-border">
            <h4 className="text-xl font-bold font-orbitron text-foreground mb-4">
              Join the Innovation Ecosystem
            </h4>
            <p className="text-muted-foreground mb-6">
              Are you a student, researcher, or faculty member interested in collaborating with Elysium Aerotech? We
              welcome partnerships that advance aerospace technology and autonomous systems research.
            </p>
            <button
              onClick={() => window.location.href = "/contact"}
              className="inline-block px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors cursor-pointer"
            >
              Explore Partnership Opportunities
            </button>
          </div>
        </div>
      </div>

      {/* Background accent */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl opacity-30 pointer-events-none" />
    </section>
  );
};
