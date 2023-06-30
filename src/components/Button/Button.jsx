import { Link } from "react-router-dom";
import "./Button.scss";

const Button = ({ text, large, type, to }) => {
  return (
    <Link to={to}>
      <div className={`button ${large === true && "large"} ${type}`}>
        {text}
      </div>
    </Link>
  );
};

export default Button;
