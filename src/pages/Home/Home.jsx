import "./Home.scss";
import HeroSection from "../../components/HeroSection/HeroSection";
import IntroSection from "../../components/IntroSection/IntroSection";
import PracticeSection from "../../components/PracticeSection/PracticeSection";
import HelpSection from "../../components/HelpSection/HelpSection";

const Home = () => {
  return (
    <div className="homePage">
      <HeroSection />
      <IntroSection />
      <PracticeSection />
      <HelpSection />
    </div>
  );
};

export default Home;
