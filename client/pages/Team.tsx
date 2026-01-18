import { AppLayout } from "@/layouts/AppLayout";
import { TeamSection } from "@/components/TeamSection";

export default function Team() {
  return (
    <AppLayout>
      <div className="pt-8">
        <TeamSection />
      </div>
    </AppLayout>
  );
}
