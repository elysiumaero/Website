import React from "react";
import { RnDCard } from "@/components/RnDCard";

export const RnDLabSection: React.FC = () => {
  const researchAreas = [
    {
      icon: "🧭",
      title: "Autonomous Navigation Intelligence",
      description:
        "Advanced algorithms enabling fully autonomous navigation in GPS-denied and complex environments with real-time adaptation.",
    },
    {
      icon: "🔄",
      title: "Anti-Loop & Fail-Safe Path Planning",
      description:
        "Intelligent path planning systems preventing infinite loops and ensuring safe fallback behaviors in all operational scenarios.",
    },
    {
      icon: "📊",
      title: "Sensor Fusion & Threat Detection",
      description:
        "Multi-sensor integration combining diverse data streams for comprehensive environmental awareness and threat identification.",
    },
    {
      icon: "🛡️",
      title: "Redundant Decision Architecture",
      description:
        "Distributed decision-making systems with multiple independent verification layers ensuring mission-critical reliability.",
    },
    {
      icon: "🐦",
      title: "Swarm Coordination Algorithms",
      description:
        "Algorithms enabling coordinated flight of multiple autonomous vehicles with decentralized control and dynamic formations.",
    },
    {
      icon: "🔐",
      title: "Secure Embedded Communication",
      description:
        "Encrypted, ultra-low-latency communication protocols optimized for autonomous systems with hardware-based security.",
    },
  ];

  return (
    <section id="rnd-lab" className="relative py-24 px-6 bg-background overflow-hidden">
      {/* Blueprint grid background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div
          style={{
            backgroundImage:
              "linear-gradient(0deg, transparent 24%, rgba(0, 217, 255, 0.05) 25%, rgba(0, 217, 255, 0.05) 26%, transparent 27%, transparent 74%, rgba(0, 217, 255, 0.05) 75%, rgba(0, 217, 255, 0.05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(0, 217, 255, 0.05) 25%, rgba(0, 217, 255, 0.05) 26%, transparent 27%, transparent 74%, rgba(0, 217, 255, 0.05) 75%, rgba(0, 217, 255, 0.05) 76%, transparent 77%, transparent)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Animated corner lines */}
      <div className="absolute top-0 left-0 w-64 h-64 border-t-2 border-l-2 border-primary/30 pointer-events-none opacity-30" />
      <div className="absolute bottom-0 right-0 w-64 h-64 border-b-2 border-r-2 border-primary/30 pointer-events-none opacity-30" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-orbitron mb-4">
            Elysium <span className="text-primary">Research & Development</span> Division
          </h2>
          <p className="text-xl text-primary font-orbitron tracking-widest uppercase mb-2 opacity-80">
            Where aerospace theory becomes airborne reality
          </p>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Pioneering research initiatives advancing the boundaries of autonomous systems, artificial intelligence, and
            aerospace engineering
          </p>
          <div className="h-1 w-24 bg-primary mx-auto rounded-full mt-6" />
        </div>

        {/* Research focus cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {researchAreas.map((area, index) => (
            <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
              <RnDCard icon={area.icon} title={area.title} description={area.description} />
            </div>
          ))}
        </div>

        {/* Research info panel */}
        <div className="mt-16 p-8 bg-card border border-border rounded-lg backdrop-blur-md relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
          <div className="relative z-10">
            <h3 className="text-2xl font-bold font-orbitron mb-4 text-primary">Innovation Pipeline</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Our R&D division operates at the cutting edge of aerospace and autonomous systems technology, with
              continuous focus on:
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">•</span>
                <span>Next-generation autonomous flight platforms with enhanced autonomy and adaptability</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">•</span>
                <span>AI-driven decision systems with human-like reasoning and fail-safe mechanisms</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">•</span>
                <span>Advanced sensor integration for comprehensive environmental understanding</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">•</span>
                <span>Security-first architecture protecting against emerging cyber and physical threats</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Background accent */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-1/2 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />
    </section>
  );
};
