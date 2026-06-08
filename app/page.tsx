import { HeroSection } from "@/components/sections/HeroSection";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { BenefitsSection } from "@/components/sections/BenefitsSection";
import { TransformationSection } from "@/components/sections/TransformationSection";
import { BonusSection } from "@/components/sections/BonusSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { GuaranteeSection } from "@/components/sections/GuaranteeSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";
import { Footer } from "@/components/layout/Footer";
import { StickyCTA } from "@/components/layout/StickyCTA";
import { ExitIntentModal } from "@/components/modals/ExitIntentModal";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <HeroSection />
      <ProblemSection />
      <GallerySection />
      <BenefitsSection />
      <TransformationSection />
      <BonusSection />
      <TestimonialsSection />
      <GuaranteeSection />
      <PricingSection />
      <FAQSection />
      <FinalCTASection />
      <Footer />
      <StickyCTA />
      <ExitIntentModal />
    </main>
  );
}
