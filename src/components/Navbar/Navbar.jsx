import Button from "../Button/Button";
import "./Navbar.scss";
import { Link, NavLink } from "react-router-dom";
import { RiArrowDownSLine } from "react-icons/ri";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdMail, MdMenu } from "react-icons/md";
import { useRef } from "react";

const Navbar = ({ home }) => {
  const burgerMenu = useRef();
  const links = useRef();

  const handleclick = () => {
    burgerMenu.current.classList.toggle("clicked");
    links.current.classList.toggle("visible");
  };

  return (
    <div className="navbar">
      <div className="container">
        <header className="flexBetween">
          <Link to="/">
            <div className="logo flexBetween">
              <div className="logoIcon">
                <img src="LogoIcon.png" alt="logo" />
              </div>
              <h1>Attorneyster</h1>
            </div>
          </Link>
          <Button
            text="Book A Consultation"
            large={false}
            type="transparent"
            to="/contact-us"
          />
        </header>
        <main className="flexBetween">
          <nav
            className={`${home ? "flexBetween home" : "flexBetween"}`}
            ref={links}
          >
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About Us</NavLink>
            <div className="pages">
              <span className="flexBetween">
                Pages
                <RiArrowDownSLine className="arrow-down" />
              </span>
              <div className="mega-menu-content">
                <ul>
                  <li>
                    <NavLink to="/practice-area">Practice Areas</NavLink>
                  </li>
                  <li>
                    <NavLink to="/cases">Cases</NavLink>
                  </li>
                  <li>
                    <NavLink to="/pricing">Pricing</NavLink>
                  </li>
                  <li>
                    <NavLink to="/blog">Blog</NavLink>
                  </li>
                  <li>
                    <NavLink to="/testimonial">Testimonial</NavLink>
                  </li>
                </ul>
              </div>
            </div>
            <NavLink to="/contact-us">Contact Us</NavLink>
          </nav>
          <div className="burger-menu" ref={burgerMenu} onClick={handleclick}>
            <MdMenu className="menu-icon" />
          </div>
          <div className="navContact flexBetween">
            <div className="navContactCard flexBetween">
              <div className="icon center">
                <BsFillTelephoneFill className="phoneIcon" />
              </div>
              <div className="navContactCardInfo">
                <p className="title">Call Us On:</p>
                <p>911-987654321</p>
              </div>
            </div>
            <div className="navContactCard flexBetween">
              <div className="icon center">
                <MdMail className="mailIcon" />
              </div>
              <div className="navContactCardInfo">
                <p className="title">Email Us On:</p>
                <p>yourmail@mail.com</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Navbar;
