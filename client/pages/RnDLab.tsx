import { AppLayout } from "@/layouts/AppLayout";
import { RnDLabSection } from "@/components/RnDLabSection";

export default function RnDLab() {
  return (
    <AppLayout>
      <div className="pt-8">
        <RnDLabSection />
      </div>
    </AppLayout>
  );
}
