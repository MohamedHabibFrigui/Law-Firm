import "./Home.scss";
import HeroSection from "../../components/HeroSection/HeroSection";
import IntroSection from "../../components/IntroSection/IntroSection";

const Home = () => {
  return (
    <div className="homePage">
      <HeroSection />
      <IntroSection />
    </div>
  );
};

export default Home;
