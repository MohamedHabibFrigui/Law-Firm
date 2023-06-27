import "./Footer.scss";
import {
  BsFacebook,
  BsTwitter,
  BsInstagram,
  BsPinterest,
} from "react-icons/bs";

const Footer = () => {
  return (
    <section className="footer">
      <div className="container center">
        <header className="flexBetween">
          <div className="sepImg">
            <img src="sep3.svg" alt="sep" className="sep" />
          </div>
          <div className="logo flexBetween">
            <img className="logoIcon" src="LogoIcon.png" alt="logo" />
            <h1>Attorneyster</h1>
          </div>
          <div className="sepImg">
            <img src="sep4.svg" alt="sep" className="sep" />
          </div>
        </header>
        <footer className="flexBetween">
          <div className="left">Copyright &#169; Attorneyster</div>
          <div className="right flexBetween">
            <span>Follow:</span>
            <div className="socialList flexBetween">
              <BsFacebook className="socialIcon" />
              <BsTwitter className="socialIcon" />
              <BsInstagram className="socialIcon" />
              <BsPinterest className="socialIcon" />
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Footer;
