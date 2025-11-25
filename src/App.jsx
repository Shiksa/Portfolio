import React, { Suspense } from 'react'
import LazySection from "./components/LazySection";

// import NavbarMain from './components/navbar/NavbarMain'
// import HeroMain from './components/heroSection/HeroMain'
// import HeroGradient from './components/heroSection/HeroGradient'
// import SubHeroSection from './components/heroSection/SubHeroSection'
// import AboutMeMain from './components/aboutMeSection/AboutMeMain'
// import SkillMain from './components/skillSection/SkillMain'
// import SubSkills from './components/skillSection/SubSkills'
// import ExperienceMain from './components/experienceSection/ExperienceMain'
// import ProjectMain from './components/projectSection/ProjectMain'
// import ContactMeMain from './components/contactMeSection/ContactMeMain'
// import FooterMain from './components/footer/FooterMain'


const NavbarMain = React.lazy(() => import('./components/navbar/NavbarMain'))
const HeroMain = React.lazy(() => import('./components/heroSection/HeroMain'))
const HeroGradient = React.lazy(() => import('./components/heroSection/HeroGradient'))
const SubHeroSection = React.lazy(() => import('./components/heroSection/SubHeroSection'))
const AboutMeMain = React.lazy(() => import('./components/aboutMeSection/AboutMeMain'))
const SkillMain = React.lazy(() => import('./components/skillSection/SkillMain'))
const SubSkills = React.lazy(() => import('./components/skillSection/SubSkills'))
const ExperienceMain = React.lazy(() => import('./components/experienceSection/ExperienceMain'))
const ProjectMain = React.lazy(() => import('./components/projectSection/ProjectMain'))
const ContactMeMain = React.lazy(() => import('./components/contactMeSection/ContactMeMain'))
const FooterMain = React.lazy(() => import('./components/footer/FooterMain'))
import HelperSection from './components/HelperSection'

const App = () => {
  return (
    <main className='font-body'>
      {/* <Suspense fallback={<div>Loading...</div>}> */}
      <NavbarMain />
      <HeroMain />
      <HeroGradient />
      <SubHeroSection />
      {/* </Suspense> */}
      <LazySection><AboutMeMain /></LazySection>
      <LazySection><SkillMain /></LazySection>
      <LazySection><SubSkills /></LazySection>
      <LazySection><ExperienceMain /></LazySection>
      <LazySection><ProjectMain /></LazySection>
      <LazySection><ContactMeMain /></LazySection>
      <LazySection><FooterMain /></LazySection>
      {/* <HelperSection /> */}
    </main>
  )
}

export default App
