import { Header } from '@/components/landing/Header';
import { HeroSection } from './sections/HeroSection';
import { VideoSection } from './sections/VideoSection';
import { AboutSection } from './sections/AboutSection';
import { FeaturesSection } from './sections/FeaturesSection';
import { FaqSection } from './sections/FaqSection';
import { Footer } from './sections/Footer';
import { GettingStartedSection } from './sections/GetStartedSection';

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
    </div>
  );
}
