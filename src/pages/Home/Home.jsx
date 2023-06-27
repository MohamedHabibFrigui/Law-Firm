import "./Home.scss";
import HeroSection from "../../components/HeroSection/HeroSection";
import IntroSection from "../../components/IntroSection/IntroSection";
import PracticeSection from "../../components/PracticeSection/PracticeSection";
import HelpSection from "../../components/HelpSection/HelpSection";
import HistorySection from "../../components/HistorySection/HistorySection";
import ReviewsSection from "../../components/ReviewsSection/ReviewsSection";
import TeamSection from "../../components/TeamSection/TeamSection";
import ConsultationSection from "../../components/ConsultationSection/ConsultationSection";
import AppointmentSection from "../../components/AppointmentSection/AppointmentSection";
import RecentBlogsSection from "../../components/RecentBlogsSection/RecentBlogsSection";

const Home = () => {
  return (
    <div className="homePage">
      {/* <HeroSection />
      <IntroSection />
      <PracticeSection />
      <HelpSection />
      <HistorySection />
      <ReviewsSection />
      <TeamSection />
      <ConsultationSection /> */}
      {/* <AppointmentSection /> */}
      <RecentBlogsSection />
    </div>
  );
};

export default Home;
