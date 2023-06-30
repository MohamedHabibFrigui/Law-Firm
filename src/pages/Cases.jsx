import SectionHeader from "../components/SectionHeader/SectionHeader";
import Footer from "../components/Footer/Footer";
import CasesSection from "../components/CasesSection/CasesSection";
import HelpSection from "../components/HelpSection/HelpSection";

const Cases = () => {
  return (
    <div className="casesPage">
      <SectionHeader sectionTitle="Cases" />
      <CasesSection />
      <HelpSection />
      <Footer />
    </div>
  );
};

export default Cases;
