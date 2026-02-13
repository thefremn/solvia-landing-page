import { Header } from '@/components/landing/Header';
import { HeroSection } from './sections/HeroSection';
import { VideoSection } from './sections/VideoSection';
import { AboutSection } from './sections/AboutSection';
import { FeaturesSection } from './sections/FeaturesSection';
import { FaqSection } from './sections/FaqSection';
import { Footer } from './sections/Footer';
import { GettingStartedSection } from './sections/GetStartedSection';
import { StickyBanner } from '@/components/ui/sticky-banner';

export default function Home() {
  return (
    
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <HeroSection id="home" />
        <VideoSection id="video" />
        <AboutSection id="about" />
        <FeaturesSection id="features" />
        <GettingStartedSection id="get-started" />
        <FaqSection id="faq" />
      </main>
      <Footer />
        <StickyBanner className="h-12 bg-gradient-to-b from-blue-500 to-blue-600">
          <img
            src="/p1/lightp.png"
            alt="Pledge 1% Logo"
            className="h-10 w-auto mr-2 inline-block"
          />
        <p className="mx-0 max-w-[90%] text-white drop-shadow-md">
          We are part of <a href='https://www.pledge1percent.org/' target="_blank" rel="noopener noreferrer">Pledge 1%</a>
        </p>
      </StickyBanner>
    </div>
  );
}
