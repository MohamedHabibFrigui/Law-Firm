import "./HelpSection.scss";
import { AiFillHeart, AiFillStar } from "react-icons/ai";

const HelpSection = ({ showStats }) => {
  return (
    <section className="helpSection">
      <div className="container">
        {showStats && (
          <>
            <header>
              <h3>
                Fighting To Get What
                <br />
                You Deserve
              </h3>
              <img src="sep2.svg" alt="sep" />
              <p>
                Our board-certified family law attorneys work to achieve a fair
                and
                <br />
                timely resolution of the legal issues in your case.
              </p>
            </header>
            <div className="stats">
              <div className="stat1 flexBetween">
                <div className="number center">
                  <AiFillHeart className="statIcon" />
                  <span>7230</span>
                </div>
                <div className="desc">
                  <h6>Trusted Clients</h6>
                  <p>Number Of Clients We've</p>
                </div>
              </div>
              <div className="stat1 flexBetween">
                <div className="number center">
                  <AiFillStar className="statIcon" />
                  <span>98%</span>
                </div>
                <div className="desc">
                  <h6>Successful Cases</h6>
                  <p>Largest winning Value</p>
                </div>
              </div>
              <div className="stat3">
                <span>15,890+</span>
                <p>
                  Criminal Defense
                  <br />
                  Case Served
                </p>
              </div>
            </div>
          </>
        )}
        <div className={`partners ${showStats && "showStats"}`}>
          <div className="title center">
            <img src="sep2.svg" alt="sep2" />
            <h2>Meet The Partners</h2>
            <img src="sep2.svg" alt="sep2" />
          </div>
          <div className="partnersList">
            <img src="partner1.svg" alt="partner" />
            <img src="partner2.svg" alt="partner" />
            <img src="partner3.svg" alt="partner" />
            <img src="partner4.svg" alt="partner" />
            <img src="partner5.svg" alt="partner" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HelpSection;
