import { AppLayout } from "@/layouts/AppLayout";
import { FlagshipSystems } from "@/components/FlagshipSystems";

export default function Systems() {
  return (
    <AppLayout>
      <div className="pt-8">
        <FlagshipSystems />
      </div>
    </AppLayout>
  );
}
