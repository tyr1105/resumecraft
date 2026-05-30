import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ResumeBuilder from "@/components/ResumeBuilder";
import FeaturesSection from "@/components/FeaturesSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <ResumeBuilder />
        <FeaturesSection />
      </main>
      <Footer />
    </div>
  );
}
