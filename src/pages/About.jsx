import AboutIntroSection from "../components/AboutIntroSection/AboutIntroSection";
import OurStorySection from "../components/OurStorySection/OurStorySection";
import OurValuesSection from "../components/OurValuesSection/OurValuesSection";
import SectionHeader from "../components/SectionHeader/SectionHeader";
import SpecializedSection from "../components/SpecializedSection/SpecializedSection";
import TeamSection from "../components/TeamSection/TeamSection";
import ReviewsSection from "../components/ReviewsSection/ReviewsSection";
import HelpSection from "../components/HelpSection/HelpSection";
import Footer from "../components/Footer/Footer";

const About = () => {
  return (
    <div className="aboutPage">
      <SectionHeader sectionTitle="About Us" />
      <AboutIntroSection />
      <OurStorySection />
      <SpecializedSection />
      <OurValuesSection />
      <TeamSection />
      <ReviewsSection />
      <HelpSection />
      <Footer />
    </div>
  );
};

export default About;
