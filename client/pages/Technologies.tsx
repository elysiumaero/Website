import { AppLayout } from "@/layouts/AppLayout";
import { CoreTechnologies } from "@/components/CoreTechnologies";

export default function Technologies() {
  return (
    <AppLayout>
      <div className="pt-8">
        <CoreTechnologies />
      </div>
    </AppLayout>
  );
}
