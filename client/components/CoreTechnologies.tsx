import React from "react";
import { TechCard } from "@/components/TechCard";

export const CoreTechnologies: React.FC = () => {
  const technologies = [
    {
      icon: "🚁",
      title: "Autonomous Flight Systems",
      description:
        "Fully autonomous navigation and control systems capable of handling complex flight paths and dynamic environmental conditions without human intervention.",
    },
    {
      icon: "🧠",
      title: "AI Navigation & Path Planning",
      description:
        "Advanced machine learning algorithms that enable intelligent route optimization, obstacle avoidance, and adaptive decision-making in real-time.",
    },
    {
      icon: "📡",
      title: "Surveillance & Sensor Fusion",
      description:
        "Multi-sensor integration combining LiDAR, radar, and vision systems for comprehensive environmental awareness and threat detection.",
    },
    {
      icon: "🔐",
      title: "Secure Communication Systems",
      description:
        "Encrypted, redundant communication protocols ensuring secure command and control with military-grade encryption standards.",
    },
    {
      icon: "⚙️",
      title: "Aerospace Software Architecture",
      description:
        "Distributed computing systems designed for reliability, scalability, and performance in demanding aerospace applications.",
    },
    {
      icon: "🛰️",
      title: "Advanced Flight Management",
      description:
        "Comprehensive flight management systems handling mission planning, real-time optimization, and automated contingency protocols.",
    },
  ];

  return (
    <section id="technologies" className="relative py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-orbitron mb-6">
            Core <span className="text-primary">Technologies</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Cutting-edge technologies powering the next generation of autonomous flight systems
          </p>
          <div className="h-1 w-24 bg-primary mx-auto rounded-full mt-6" />
        </div>

        {/* Tech cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
              <TechCard icon={tech.icon} title={tech.title} description={tech.description} />
            </div>
          ))}
        </div>
      </div>

      {/* Background accent */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl opacity-30 pointer-events-none" />
    </section>
  );
};
