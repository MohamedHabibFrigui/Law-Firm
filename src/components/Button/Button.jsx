import "./Button.scss";

const Button = ({ text, large, type }) => {
  return (
    <div className={`button ${large === true && "large"} ${type}`}>{text}</div>
  );
};

export default Button;
