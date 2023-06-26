import "./Home.scss";
import HeroSection from "../../components/HeroSection/HeroSection";
import IntroSection from "../../components/IntroSection/IntroSection";
import PracticeSection from "../../components/PracticeSection/PracticeSection";
import HelpSection from "../../components/HelpSection/HelpSection";
import HistorySection from "../../components/HistorySection/HistorySection";
import ReviewsSection from "../../components/ReviewsSection/ReviewsSection";
import TeamSection from "../../components/TeamSection/TeamSection";
import ConsultationSection from "../../components/ConsultationSection/ConsultationSection";

const Home = () => {
  return (
    <div className="homePage">
      <HeroSection />
      <IntroSection />
      <PracticeSection />
      <HelpSection />
      <HistorySection />
      <ReviewsSection />
      <TeamSection />
      <ConsultationSection />
    </div>
  );
};

export default Home;
