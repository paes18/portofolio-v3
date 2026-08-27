import { CursorProvider } from './context/CursorContext';
import { LanguageProvider } from './context/LanguageContext';
import { SkipToContent } from './components/layout/SkipToContent';
import { AmbientBackground } from './components/layout/AmbientBackground';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';

import { HeroSection } from './components/sections/HeroSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { AboutSection } from './components/sections/AboutSection';
import { ExperienceSection } from './components/sections/ExperienceSection';
import { ProcessSection } from './components/sections/ProcessSection';
import { SkillsSection } from './components/sections/SkillsSection';
import { ContactSection } from './components/sections/ContactSection';

import { useEasterEggs } from './hooks/useEasterEggs';
import { DevModeOverlay } from './components/ui/DevModeOverlay';
import { EasterEggNotification } from './components/ui/EasterEggNotification';

export function App() {
  const easterEggs = useEasterEggs();

  return (
    <LanguageProvider>
      <CursorProvider>
      {/* Accessibility Skip Link */}
      <SkipToContent />

      {/* Ambient Visual Atmosphere */}
      <AmbientBackground />

      {/* Dev Mode Telemetry HUD Overlay */}
      <DevModeOverlay
        isOpen={easterEggs.isDevMode}
        onClose={easterEggs.toggleDevMode}
      />

      {/* Secret Toast Notification Banner */}
      <EasterEggNotification message={easterEggs.notification} />

      {/* Main Page Layout */}
      <div className={`relative min-h-screen flex flex-col bg-slate-950 text-slate-100 selection:bg-sky-500/30 selection:text-sky-200 transition-colors duration-500 ${
        easterEggs.isPaesMode ? 'ring-2 ring-sky-400/50 shadow-2xl shadow-sky-500/20' : ''
      }`}>
        <Header />

        <main id="main-content" className="flex-1 w-full">
          <HeroSection />
          <ProjectsSection />
          <AboutSection />
          <ExperienceSection />
          <ProcessSection />
          <SkillsSection />
          <ContactSection />
        </main>

        <Footer onFooterClick={easterEggs.handleFooterClick} />
      </div>
    </CursorProvider>
  </LanguageProvider>
  );
}

export default App;
