export default function App() {
  return (
    <div className="min-h-screen w-full bg-[#08080a]">
      <Navbar />
      <main className="w-full">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </div>
  );
}
