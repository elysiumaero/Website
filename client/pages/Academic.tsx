import { AppLayout } from "@/layouts/AppLayout";
import { AcademicPartnership } from "@/components/AcademicPartnership";

export default function Academic() {
  return (
    <AppLayout>
      <div className="pt-8">
        <AcademicPartnership />
      </div>
    </AppLayout>
  );
}
