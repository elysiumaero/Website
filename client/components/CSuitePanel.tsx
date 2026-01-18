import React, { useState } from "react";
import { TeamCard } from "@/components/TeamCard";
import { TeamMemberModal } from "@/components/TeamMemberModal";
import { cSuiteMembers } from "@/utils/teamData";
import { getCsuiteMessage, type CsuiteMessage } from "@/hooks/useCsuiteMessages";

export const CSuitePanel: React.FC = () => {
  const [selectedMember, setSelectedMember] = useState<CsuiteMessage | null>(null);

  const handleMemberClick = (folderName: string) => {
    const message = getCsuiteMessage(folderName);
    if (message) {
      setSelectedMember(message);
    }
  };

  const handleCloseModal = () => {
    setSelectedMember(null);
  };

  return (
    <>
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
              onClick={() => handleMemberClick(member.folderName)}
            />
          ))}
        </div>
      </div>

      {/* Modal for team member message */}
      {selectedMember && (
        <TeamMemberModal
          isOpen={!!selectedMember}
          onClose={handleCloseModal}
          name={selectedMember.name}
          role={selectedMember.role}
          message={selectedMember.message}
          folderName={cSuiteMembers.find((m) => m.name === selectedMember.name)?.folderName || ""}
        />
      )}
    </>
  );
};
