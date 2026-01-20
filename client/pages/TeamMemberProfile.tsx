import React from "react";
import { AppLayout } from "@/layouts/AppLayout";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Mail, Linkedin } from "lucide-react";
import { useTeamImages } from "@/hooks/useTeamImages";
import cSuiteMessages from "@/data/cSuiteMessages.json";
import teamData from "@/data/teamData.json";

export default function TeamMemberProfile() {
  const { memberId } = useParams<{ memberId: string }>();
  const navigate = useNavigate();
  const [member, setMember] = React.useState<any>(null);
  const [message, setMessage] = React.useState<any>(null);

  React.useEffect(() => {
    if (!memberId) {
      navigate("/team");
      return;
    }

    // Check C-Suite first
    const cSuiteMessages_typed = cSuiteMessages as Record<string, any>;
    if (cSuiteMessages_typed[memberId]) {
      const cSuiteMember = teamData.cSuite.find((m: any) => m.id === memberId);
      const cSuiteMsg = cSuiteMessages_typed[memberId];
      setMember(cSuiteMember);
      setMessage(cSuiteMsg);
      return;
    }

    // Check R&D Department
    const rndSupervisor = teamData.rndDepartment.supervisor;
    const rndCoSupervisor = teamData.rndDepartment.coSupervisor;
    const rndMembers = teamData.rndDepartment.members;

    if (rndSupervisor.id === memberId) {
      setMember(rndSupervisor);
      return;
    }

    if (rndCoSupervisor.id === memberId) {
      setMember(rndCoSupervisor);
      return;
    }

    const rndMember = rndMembers.find((m: any) => m.id === memberId);
    if (rndMember) {
      setMember(rndMember);
      return;
    }

    navigate("/team");
  }, [memberId, navigate]);

  const photoPath = useTeamImages(member?.folderName || "");

  if (!member) {
    return (
      <AppLayout>
        <div className="min-h-[calc(100vh-200px)] flex items-center justify-center">
          <div className="text-center">
            <p className="text-muted-foreground mb-4">Loading team member information...</p>
          </div>
        </div>
      </AppLayout>
    );
  }

  return (
    <AppLayout>
      <div className="pt-24 pb-24 min-h-screen">
        <div className="max-w-4xl mx-auto px-6">
          {/* Back Button */}
          <button
            onClick={() => navigate("/team")}
            className="flex items-center gap-2 text-primary hover:text-primary/80 mb-8 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Team
          </button>

          {/* Member Profile */}
          <div className="grid md:grid-cols-3 gap-12 mb-16">
            {/* Photo & Info Sidebar */}
            <div className="md:col-span-1">
              <div className="sticky top-32">
                {/* Photo */}
                <div className="mb-8 rounded-lg overflow-hidden border border-border bg-card">
                  <img
                    src={photoPath || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full aspect-square object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "/placeholder.svg";
                    }}
                  />
                </div>

                {/* Quick Info */}
                <div className="space-y-6">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-primary font-orbitron mb-2">Role</p>
                    <h1 className="text-2xl font-bold font-orbitron text-foreground">{member.name}</h1>
                    <p className="text-primary font-semibold mt-1">{member.role}</p>
                  </div>

                  {/* Expertise */}
                  <div>
                    <p className="text-xs uppercase tracking-widest text-primary font-orbitron mb-3">Expertise</p>
                    <div className="space-y-2">
                      {member.expertise?.map((skill: string, idx: number) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-primary" />
                          <span className="text-sm text-muted-foreground">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Contact */}
                  <div className="pt-6 border-t border-border">
                    <div className="flex gap-3">
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 gap-2"
                        onClick={() => (window.location.href = "mailto:contact@elysium.aerotech")}
                      >
                        <Mail className="w-4 h-4" />
                        Email
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 gap-2"
                        onClick={() => window.open("https://linkedin.com", "_blank")}
                      >
                        <Linkedin className="w-4 h-4" />
                        LinkedIn
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="md:col-span-2">
              {/* Bio Section */}
              <div className="mb-12">
                <div className="mb-6">
                  <p className="text-xs uppercase tracking-widest text-primary font-orbitron mb-3">About</p>
                  <h2 className="text-3xl font-bold font-orbitron text-foreground mb-4">Professional Profile</h2>
                </div>

                <p className="text-lg text-muted-foreground leading-relaxed">{member.bio}</p>
              </div>

              {/* Message Section */}
              {message && (
                <div className="border-t border-border pt-12">
                  <div className="mb-8">
                    <p className="text-xs uppercase tracking-widest text-primary font-orbitron mb-3">Leadership Message</p>
                    <h3 className="text-2xl font-bold font-orbitron text-foreground">
                      A Word from {member.name.split(" ")[0]}
                    </h3>
                  </div>

                  <div className="relative bg-card border border-primary/20 rounded-lg p-8 backdrop-blur-md">
                    <div className="absolute top-4 left-4 text-4xl opacity-10 text-primary">"</div>
                    <p className="text-lg text-foreground leading-relaxed relative z-10">{message.message}</p>
                    <div className="absolute bottom-4 right-4 text-4xl opacity-10 text-primary">"</div>
                  </div>
                </div>
              )}

              {/* Divider */}
              {message && <div className="mt-12 h-px bg-gradient-to-r from-border via-primary/20 to-border" />}

              {/* Additional Context */}
              <div className="mt-12 bg-secondary/30 border border-secondary/50 rounded-lg p-8">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  As a valued member of the Elysium Aerotech team, {member.name} contributes to our mission of
                  advancing autonomous flight technology through innovation, precision engineering, and unwavering
                  commitment to excellence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
