import "./Home.scss";
import HeroSection from "../../components/HeroSection/HeroSection";
import IntroSection from "../../components/IntroSection/IntroSection";
import PracticeSection from "../../components/PracticeSection/PracticeSection";
import HelpSection from "../../components/HelpSection/HelpSection";
import HistorySection from "../../components/HistorySection/HistorySection";
import ReviewsSection from "../../components/ReviewsSection/ReviewsSection";

const Home = () => {
  return (
    <div className="homePage">
      {/* <HeroSection />
      <IntroSection />
      <PracticeSection />
      <HelpSection /> */}
      {/* <HistorySection /> */}
      <ReviewsSection />
    </div>
  );
};

export default Home;
