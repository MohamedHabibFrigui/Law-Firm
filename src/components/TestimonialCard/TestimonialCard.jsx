import "./TestimonialCard.scss";
import { BiSolidQuoteAltLeft } from "react-icons/bi";

const TestimonialCard = ({ img, name, profession, text }) => {
  return (
    <div className="testimonialCard">
      <header className="flexBetween">
        <div className="person flexBetween">
          <img src={img} alt="person" />
          <div className="personDesc">
            <h6>{name}</h6>
            <p>{profession}</p>
          </div>
        </div>
        <div className="iconContainer center">
          <BiSolidQuoteAltLeft className="quoteIcon" />
        </div>
      </header>
      <p className="text">{text}</p>
    </div>
  );
};

export default TestimonialCard;
