import React from "react";
import { CSuitePanel } from "@/components/CSuitePanel";
import { RnDTeamPanel } from "@/components/RnDTeamPanel";

export const TeamSection: React.FC = () => {
  return (
    <section id="team" className="relative py-24 px-6 bg-card border-y border-border">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-orbitron mb-6">
            Our <span className="text-primary">Team</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Exceptional talent driving innovation in aerospace, autonomous systems, and advanced technology
          </p>
          <div className="h-1 w-24 bg-primary mx-auto rounded-full mt-6" />
        </div>

        {/* C-Suite Panel */}
        <div className="mb-24">
          <CSuitePanel />
        </div>

        {/* R&D Team Panel */}
        <div>
          <RnDTeamPanel />
        </div>
      </div>

      {/* Background accent */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl opacity-30 pointer-events-none" />
    </section>
  );
};
