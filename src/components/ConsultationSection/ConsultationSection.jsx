import Button from "../Button/Button";
import "./ConsultationSection.scss";
import { BsFillTelephoneFill } from "react-icons/bs";

const ConsultationSection = () => {
  return (
    <section className="consultationSection">
      <div className="container flexBetween">
        <div className="left">
          <h3>Our Professional Expert Law Team Is Always Ready To Serve You</h3>
          <img className="sep" src="sep.svg" alt="sep" />
          <p>
            We’re always available for new cases big or small. Send us an email
            and we’ll get in touch shortly, or phone between 8:00 am and 7:00 pm
            Monday to Saturday.
          </p>
          <Button text="Contact Us" type="filled" />
        </div>
        <div className="right">
          <div className="rightContent">
            <h3>Get a Free Consultation</h3>
            <p className="consultationDesc">
              You can get free consultation and case evaluation from us via the
              following contact number
            </p>
            <div className="callUs flexBetween">
              <div className="phone center">
                <BsFillTelephoneFill className="phoneIcon" />
              </div>
              <div className="info">
                <p className="title">Call Us On:</p>
                <p className="phoneNumber">911-987654321</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationSection;
