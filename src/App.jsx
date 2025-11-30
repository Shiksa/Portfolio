import React, { useState, useEffect } from 'react';

import NavbarMain from './components/navbar/NavbarMain';
import HeroMain from './components/heroSection/HeroMain';
import HeroGradient from './components/heroSection/HeroGradient';
import SubHeroSection from './components/heroSection/SubHeroSection';
import AboutMeMain from './components/aboutMeSection/AboutMeMain';
import SkillMain from './components/skillSection/SkillMain';
import SubSkills from './components/skillSection/SubSkills';
import ExperienceMain from './components/experienceSection/ExperienceMain';
import ProjectMain from './components/projectSection/ProjectMain';
import ContactMeMain from './components/contactMeSection/ContactMeMain';
import FooterMain from './components/footer/FooterMain';

import IntroLoader from './components/introAnimation/IntroLoader';

const App = () => {
  const [introDone, setIntroDone] = useState(false);

  // Disable scroll until intro finishes
  useEffect(() => {
    if (!introDone) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [introDone]);

  return (
    <main className="font-body relative">

      {/* INTRO OVERLAY */}
      <IntroLoader onFinish={() => setIntroDone(true)} />

      {/* PAGE CONTENT BEHIND INTRO */}
      <div className="relative z-0">

        <NavbarMain />

        {/* HeroMain always rendered but children hidden until introDone */}
        <HeroMain introDone={introDone} />

        <HeroGradient />
        <SubHeroSection />

        <AboutMeMain />
        <SkillMain />
        <SubSkills />
        <ExperienceMain />
        <ProjectMain />
        <ContactMeMain />
        <FooterMain />
      </div>

    </main>
  );
};

export default App;
