import { AppLayout } from "@/layouts/AppLayout";
import { AboutSection } from "@/components/AboutSection";

export default function About() {
  return (
    <AppLayout>
      <div className="pt-8">
        <AboutSection />
      </div>
    </AppLayout>
  );
}
