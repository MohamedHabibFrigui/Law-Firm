import "./ReviewCard.scss";
import { BiSolidQuoteAltLeft } from "react-icons/bi";

const ReviewCard = ({ reversed, img, person, profession, quote }) => {
  return (
    <div className={`reviewCard ${reversed && "reversed"}`}>
      <div className="person flexBetween">
        <img src={img} alt="person" />
        <div className="personDesc">
          <h6>{person}</h6>
          <p>{profession}</p>
        </div>
      </div>
      <div className="quote">
        <BiSolidQuoteAltLeft className="quoteIcon" />
        <p>{quote}</p>
      </div>
    </div>
  );
};

export default ReviewCard;
