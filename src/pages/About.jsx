import AboutIntroSection from "../components/AboutIntroSection/AboutIntroSection";
import OurStorySection from "../components/OurStorySection/OurStorySection";
import SectionHeader from "../components/SectionHeader/SectionHeader";
import SpecializedSection from "../components/SpecializedSection/SpecializedSection";

const About = () => {
  return (
    <div className="aboutPage">
      <SectionHeader sectionTitle="About Us" />
      <AboutIntroSection />
      <OurStorySection />
      <SpecializedSection />
    </div>
  );
};

export default About;
