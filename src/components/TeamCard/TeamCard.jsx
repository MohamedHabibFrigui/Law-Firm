import "./TeamCard.scss";
import {
  BsFacebook,
  BsTwitter,
  BsInstagram,
  BsPinterest,
} from "react-icons/bs";

const TeamCard = ({ img, name, profession }) => {
  return (
    <div className="teamCard center">
      <div className="img">
        <img src={img} alt={name} />
        <div className="socialList flexBetween">
          <BsFacebook className="socialIcon" />
          <BsTwitter className="socialIcon" />
          <BsInstagram className="socialIcon" />
          <BsPinterest className="socialIcon" />
        </div>
      </div>
      <div className="info">
        <h6>{name}</h6>
        <p>{profession}</p>
      </div>
    </div>
  );
};

export default TeamCard;
