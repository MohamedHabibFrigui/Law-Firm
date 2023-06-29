import FAQSection from "../components/FAQSection/FAQSection";
import FeeSection from "../components/FeeSection/FeeSection";
import PricingSection from "../components/PricingSection/PricingSection";
import SectionHeader from "../components/SectionHeader/SectionHeader";
import Footer from "../components/Footer/Footer";

const Pricing = () => {
  return (
    <div className="pricingPagin">
      <SectionHeader sectionTitle="Pricing" />
      <FeeSection />
      <PricingSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Pricing;
