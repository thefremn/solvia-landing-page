import { Header } from '@/components/landing/Header';
import { HeroSection } from '@/components/landing/HeroSection';
import { VideoSection } from '@/components/landing/VideoSection';
import { AboutSection } from '@/components/landing/AboutSection';
import { FeaturesSection } from '@/components/landing/FeaturesSection';
import { FaqSection } from '@/components/landing/FaqSection';
import { Footer } from '@/components/landing/Footer';
import { GettingStartedSection } from '@/components/landing/GetStartedSection';

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
