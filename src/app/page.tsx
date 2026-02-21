import { HeroSection } from '@/components/sections/HeroSection';
import { PhilosophySection } from '@/components/sections/PhilosophySection';
import { ServiceSection } from '@/components/sections/ServiceSection';
import { TechStackSection } from '@/components/sections/TechStackSection';
import { WorksSection } from '@/components/sections/WorksSection';
import { NumbersSection } from '@/components/sections/NumbersSection';
import { TeamSection } from '@/components/sections/TeamSection';
import { CompanySection } from '@/components/sections/CompanySection';
import { ContactSection } from '@/components/sections/ContactSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <PhilosophySection />
      <ServiceSection />
      <TechStackSection />
      <WorksSection />
      <NumbersSection />
      <TeamSection />
      <CompanySection />
      <ContactSection />
    </>
  );
}
