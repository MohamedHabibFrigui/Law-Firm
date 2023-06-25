import "./HeroSection.scss";
import Navbar from "../../components/Navbar/Navbar";
import Button from "../../components/Button/Button";

const HeroSection = () => {
  return (
    <section className="heroSection">
      <Navbar />
      <div className="container flexBetween" style={{ height: "100vh" }}>
        <div className="left">
          <img src="sep.svg" alt="sep" />
          <h1>We're Group Of Certified Law Professionals</h1>
          <p>
            we have helped countless maritime workers and their families go up
            against the largest offshore companies and win.
          </p>
          <Button text="Get In Touch" type="filled" />
        </div>
        <div className="right">
          <img src="person1.png" alt="person" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
