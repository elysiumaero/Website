import React from "react";
import { SystemCard } from "@/components/SystemCard";

export const FlagshipSystems: React.FC = () => {
  const systems = [
    {
      icon: "👁️",
      title: "GARUD",
      subtitle: "Surveillance & Detection System",
      description:
        "An advanced surveillance and detection system combining multi-sensor fusion, real-time threat assessment, and autonomous target tracking. GARUD provides comprehensive situational awareness across complex environments with exceptional accuracy and reliability.",
    },
    {
      icon: "📡",
      title: "SAMVAD",
      subtitle: "Communication Framework",
      description:
        "A secure, resilient communication framework enabling seamless command and control, data transmission, and inter-system coordination. SAMVAD features redundant communication channels and military-grade encryption for mission-critical operations.",
    },
    {
      icon: "🔒",
      title: "KAVACH",
      subtitle: "Security & Protection System",
      description:
        "A comprehensive security architecture protecting against cyber threats, physical vulnerabilities, and operational anomalies. KAVACH implements defense-grade protocols ensuring system integrity and operational continuity under all conditions.",
    },
  ];

  return (
    <section id="systems" className="relative py-24 px-6 bg-card border-y border-border">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-orbitron mb-6">
            Flagship <span className="text-primary">Systems</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our proprietary systems represent the pinnacle of aerospace engineering and autonomous intelligence
          </p>
          <div className="h-1 w-24 bg-primary mx-auto rounded-full mt-6" />
        </div>

        {/* Systems grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {systems.map((system, index) => (
            <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 150}ms` }}>
              <SystemCard
                icon={system.icon}
                title={system.title}
                subtitle={system.subtitle}
                description={system.description}
              />
            </div>
          ))}
        </div>

        {/* Additional info */}
        <div className="mt-16 p-8 bg-background rounded-lg border border-border">
          <h3 className="text-xl font-bold font-orbitron mb-4 text-primary">System Integration</h3>
          <p className="text-muted-foreground leading-relaxed">
            Our flagship systems operate as an integrated ecosystem, with GARUD providing real-time environmental
            intelligence, SAMVAD ensuring secure communication, and KAVACH maintaining system security and integrity.
            Together, they form the backbone of our autonomous flight capabilities, delivering precision, safety, and
            reliability.
          </p>
        </div>
      </div>

      {/* Background accent */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl opacity-30 pointer-events-none" />
    </section>
  );
};
