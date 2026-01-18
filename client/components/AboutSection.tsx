import React from "react";

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="relative py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-orbitron mb-6">
            About <span className="text-primary">Elysium Aerotech</span>
          </h2>
          <div className="h-1 w-24 bg-primary mx-auto rounded-full" />
        </div>

        {/* Content grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* Mission */}
          <div>
            <h3 className="text-2xl font-bold font-orbitron text-primary mb-4">Our Mission</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Elysium Aerotech is pioneering the future of autonomous flight and next-generation aerospace technology.
              We develop cutting-edge solutions that combine advanced engineering with artificial intelligence to create
              safer, smarter, and more efficient aerial systems.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our commitment to precision, innovation, and safety drives every decision we make.
            </p>
          </div>

          {/* Vision */}
          <div>
            <h3 className="text-2xl font-bold font-orbitron text-primary mb-4">Our Vision</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We envision a world where autonomous aircraft operate seamlessly in shared airspace, delivering goods,
              providing services, and expanding human mobility beyond traditional boundaries.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Through continuous research and development, we're transforming aerospace theory into airborne reality.
            </p>
          </div>
        </div>

        {/* Core values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 bg-card border border-border rounded-lg hover:border-primary transition-colors">
            <div className="text-4xl font-orbitron text-primary mb-4">⚡</div>
            <h4 className="text-xl font-bold font-orbitron mb-3">Innovation</h4>
            <p className="text-muted-foreground text-sm">
              Constantly pushing the boundaries of what's possible in aerospace technology and autonomous systems.
            </p>
          </div>

          <div className="p-8 bg-card border border-border rounded-lg hover:border-primary transition-colors">
            <div className="text-4xl font-orbitron text-primary mb-4">🛡️</div>
            <h4 className="text-xl font-bold font-orbitron mb-3">Safety</h4>
            <p className="text-muted-foreground text-sm">
              Defense-grade reliability and redundant systems ensure maximum safety for all operations.
            </p>
          </div>

          <div className="p-8 bg-card border border-border rounded-lg hover:border-primary transition-colors">
            <div className="text-4xl font-orbitron text-primary mb-4">🎯</div>
            <h4 className="text-xl font-bold font-orbitron mb-3">Precision</h4>
            <p className="text-muted-foreground text-sm">
              Meticulous attention to detail in every aspect of design, development, and deployment.
            </p>
          </div>
        </div>
      </div>

      {/* Background accent */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl opacity-30 pointer-events-none" />
    </section>
  );
};
