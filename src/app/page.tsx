import {
  HeroSection,
  AboutSection,
  ProjectsSection,
  SkillsSection,
  EducationSection,
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

      {/* 5. Education, Certifications & Activities */}
      <EducationSection />

      {/* 6. Contact & Opportunities */}
      <ContactSection />
    </main>
  );
}
