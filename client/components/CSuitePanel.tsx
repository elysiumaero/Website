import React from "react";
import { TeamCard } from "@/components/TeamCard";
import { cSuiteMembers } from "@/utils/teamData";

export const CSuitePanel: React.FC = () => {
  return (
    <div className="mb-16">
      <h3 className="text-3xl font-bold font-orbitron mb-2 text-primary">Executive Leadership</h3>
      <p className="text-muted-foreground mb-8">
        Visionary leaders driving innovation in aerospace technology and autonomous systems
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {cSuiteMembers.map((member) => (
          <TeamCard
            key={member.name}
            name={member.name}
            role={member.role}
            folderName={member.folderName}
            memberId={member.name.replace(/\s+/g, "")}
          />
        ))}
      </div>
    </div>
  );
};
