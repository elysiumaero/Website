import { AppLayout } from "@/layouts/AppLayout";
import React from "react";

const rndTeam = {
  supervisor: { name: "Abdullah", title: "Supervisor" },
  coSupervisor: { name: "Sanvi", title: "Co-Supervisor" },
  members: [
    { name: "Vishwas", title: "R&D Lead" },
    { name: "Vivaan", title: "Co R&D Lead" },
    { name: "Sparsh", title: "R&D Executive" },
    { name: "Palak", title: "R&D Executive" },
    { name: "Riya", title: "R&D Executive" },
    { name: "Garv", title: "R&D Executive" },
    { name: "Hazel", title: "R&D Executive" },
  ],
};

export default function RnDDepartment() {
  return (
    <AppLayout>
      <div className="pt-24 pb-24 min-h-screen">
        <div className="max-w-7xl mx-auto px-6 py-12">
          {/* Title */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold font-orbitron text-foreground mb-4">
              R&D Department
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Meet the talented team driving innovation at Elysium Aerotech's Research & Development Division
            </p>
          </div>

          {/* Supervisor & Co-Supervisor */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative bg-card border border-border rounded-lg p-8 backdrop-blur-md">
                <div className="mb-4 pb-4 border-b border-border">
                  <p className="text-xs uppercase tracking-widest text-primary font-orbitron mb-2">Leadership</p>
                </div>
                <p className="text-2xl font-bold text-foreground mb-2">{rndTeam.supervisor.name}</p>
                <p className="text-primary font-orbitron tracking-wider">{rndTeam.supervisor.title}</p>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative bg-card border border-border rounded-lg p-8 backdrop-blur-md">
                <div className="mb-4 pb-4 border-b border-border">
                  <p className="text-xs uppercase tracking-widest text-primary font-orbitron mb-2">Co-Leadership</p>
                </div>
                <p className="text-2xl font-bold text-foreground mb-2">{rndTeam.coSupervisor.name}</p>
                <p className="text-primary font-orbitron tracking-wider">{rndTeam.coSupervisor.title}</p>
              </div>
            </div>
          </div>

          {/* Team Members */}
          <div>
            <div className="mb-8">
              <p className="text-2xl font-bold font-orbitron text-foreground mb-2">Team Members</p>
              <div className="h-1 w-24 bg-gradient-to-r from-primary to-primary/50 rounded-full" />
            </div>

            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
              {rndTeam.members.map((member) => (
                <div key={member.name} className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-primary/10 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative bg-card border border-border rounded-lg p-6 backdrop-blur-md text-center hover:border-primary transition-colors">
                    <p className="font-semibold text-foreground text-lg mb-1">{member.name}</p>
                    <p className="text-sm text-primary font-orbitron tracking-wide">{member.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
