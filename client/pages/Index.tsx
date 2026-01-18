import { AppLayout } from "@/layouts/AppLayout";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { CoreTechnologies } from "@/components/CoreTechnologies";
import { FlagshipSystems } from "@/components/FlagshipSystems";
import { RnDLabSection } from "@/components/RnDLabSection";
import { AcademicPartnership } from "@/components/AcademicPartnership";
import { TeamSection } from "@/components/TeamSection";
import { ContactSection } from "@/components/ContactSection";

export default function Index() {
  return (
    <AppLayout>
      <HeroSection />
      <AboutSection />
      <CoreTechnologies />
      <FlagshipSystems />
      <RnDLabSection />
      <AcademicPartnership />
      <TeamSection />
      <ContactSection />
    </AppLayout>
  );
}
