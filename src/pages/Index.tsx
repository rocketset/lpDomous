import Header from "@/components/layout/Header";
import HeroSection from "@/components/sections/HeroSection";
import ProblemSection from "@/components/sections/ProblemSection";
import SolutionSection from "@/components/sections/SolutionSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import BenefitsSection from "@/components/sections/BenefitsSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import SocialProofSection from "@/components/sections/SocialProofSection";
import ComparisonSection from "@/components/sections/ComparisonSection";
import PricingSection from "@/components/sections/PricingSection";
import GuaranteeSection from "@/components/sections/GuaranteeSection";
import FAQSection from "@/components/sections/FAQSection";
import PaymentSection from "@/components/sections/PaymentSection";
import ServicesSection from "@/components/sections/ServicesSection";
import FinalCTASection from "@/components/sections/FinalCTASection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section id="hero">
          <HeroSection />
        </section>
        <ProblemSection />
        <section id="solution">
          <SolutionSection />
        </section>
        <FeaturesSection />
        <section id="benefits">
          <BenefitsSection />
        </section>
        <HowItWorksSection />
        <SocialProofSection />
        <ComparisonSection />
        <section id="pricing">
          <PricingSection />
        </section>
        <GuaranteeSection />
        <PaymentSection />
        <ServicesSection />
        <FAQSection />
        <FinalCTASection />
      </main>
    </div>
  );
};

export default Index;
