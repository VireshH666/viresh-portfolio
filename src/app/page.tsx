import {
  HeroSection,
  AboutSection,
  ProjectsSection,
  SkillsSection,
  ContactSection,
} from "@/components/sections";

export default function Home() {
  return (
    <main className="flex-1 flex flex-col">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. About Section */}
      <AboutSection />

      {/* 3. Featured Projects Showcase */}
      <ProjectsSection />

      {/* 4. Skills & Technical Expertise */}
      <SkillsSection />

      {/* 5. Contact & Opportunities */}
      <ContactSection />
    </main>
  );
}
