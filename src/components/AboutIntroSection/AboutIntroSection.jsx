import Button from "../Button/Button";
import "./AboutIntroSection.scss";
import {
  BsFacebook,
  BsTwitter,
  BsInstagram,
  BsPinterest,
} from "react-icons/bs";

const AboutIntroSection = () => {
  return (
    <section className="aboutIntroSection">
      <div className="container flexBetween">
        <div className="left">
          <div className="img">
            <img src="aboutPerson.jpg" alt="Peter Parker" />
          </div>
        </div>
        <div className="right">
          <h3>
            I’m Peter Parker,
            <br />
            Expert Legal Advicer
          </h3>
          <img className="sep" src="sep.svg" alt="sep" />
          <p>
            Our lawyers are regularly invited to speak at seminars and educate
            other attorneys and industry representatives about important and
            constantly evolving legal issues & proud to help the injured
            throughout the nation, including workers.
          </p>
          <div className="socialList flexBetween">
            <BsFacebook className="socialIcon" />
            <BsTwitter className="socialIcon" />
            <BsInstagram className="socialIcon" />
            <BsPinterest className="socialIcon" />
          </div>
          <Button text="Get An Appointment" type="white" />
        </div>
      </div>
    </section>
  );
};

export default AboutIntroSection;
