import Button from "../Button/Button";
import Navbar from "../Navbar/Navbar";
import "./ErrorSection.scss";

const ErrorSection = () => {
  return (
    <div className="errorSection">
      <Navbar home />
      <div className="container center">
        <h1 className="errorCode">404</h1>
        <img src="sep2.svg" alt="sep" className="sep" />
        <h1>Page Not Found</h1>
        <p>The page you are looking for doesn't exist or has been moved.</p>
        <Button text="Back To Home" type="filled" to="/" />
      </div>
    </div>
  );
};

export default ErrorSection;
