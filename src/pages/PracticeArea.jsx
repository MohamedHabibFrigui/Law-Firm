import SectionHeader from "../components/SectionHeader/SectionHeader";
import PracticeSection from "../components/PracticeSection/PracticeSection";
import ConsultationSection from "../components/ConsultationSection/ConsultationSection";
import AppointmentSection from "../components/AppointmentSection/AppointmentSection";
import HelpSection from "../components/HelpSection/HelpSection";
import Footer from "../components/Footer/Footer";

const PracticeArea = () => {
  return (
    <div className="practiceAreapage">
      <SectionHeader sectionTitle="Practice Area's" />
      <PracticeSection />
      <ConsultationSection />
      <AppointmentSection />
      <HelpSection />
      <Footer />
    </div>
  );
};

export default PracticeArea;
