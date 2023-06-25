import "./Home.scss";
import HeroSection from "../../components/HeroSection/HeroSection";
import IntroSection from "../../components/IntroSection/IntroSection";
import PracticeSection from "../../components/PracticeSection/PracticeSection";

const Home = () => {
  return (
    <div className="homePage">
      {/* <HeroSection /> */}
      {/* <IntroSection />   */}
      <PracticeSection />
    </div>
  );
};

export default Home;
