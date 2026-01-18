import React from "react";
import { TeamCard } from "@/components/TeamCard";
import { rndTeamMembers } from "@/utils/teamData";

export const RnDTeamPanel: React.FC = () => {
  // Separate leadership from other members
  const rndLeadership = rndTeamMembers.slice(0, 2); // Abdullah and Sanvi
  const rndTeam = rndTeamMembers.slice(2); // Rest of the team

  return (
    <div>
      <h3 className="text-3xl font-bold font-orbitron mb-2 text-primary">Research & Development Department</h3>
      <p className="text-muted-foreground mb-8">
        Expert researchers and engineers advancing the frontier of autonomous systems and aerospace technology
      </p>

      {/* Supervision team */}
      <div className="mb-12">
        <h4 className="text-lg font-orbitron text-primary/80 mb-4 uppercase tracking-widest">Leadership</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {rndLeadership.map((member) => (
            <TeamCard
              key={member.name}
              name={member.name}
              role={member.role}
              folderName={member.folderName}
            />
          ))}
        </div>
      </div>

      {/* R&D Team */}
      <div>
        <h4 className="text-lg font-orbitron text-primary/80 mb-4 uppercase tracking-widest">Team Members</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rndTeam.map((member) => (
            <TeamCard
              key={member.name}
              name={member.name}
              role={member.role}
              folderName={member.folderName}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
