import Button from "../Button/Button";
import "./PracticeCard.scss";
import { Link } from "react-router-dom";

const PracticeCard = ({ title, desc, icon }) => {
  return (
    <div className="practiceCard">
      <Link to="">
        <h5>{title}</h5>
      </Link>
      <p>{desc}</p>
      <div className="footer flexBetween">
        <img src={icon} alt="practice icon" />
        <Button text="View More" type="default" />
      </div>
    </div>
  );
};

export default PracticeCard;
