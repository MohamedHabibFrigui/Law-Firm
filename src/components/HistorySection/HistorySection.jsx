import "./HistorySection.scss";
import Button from "../Button/Button";

const HistorySection = () => {
  return (
    <section className="historySection">
      <div className="container">
        <div className="left">
          <h3>
            We Are Top Lawyers
            <br />
            And History
          </h3>
          <img className="sep" src="sep.svg" alt="sep" />
          <div className="historyContent">
            <div className="historyItem">
              <p className="year">2000 - Establishment Of The Company!</p>
              <p>
                The origins of lawyers and the first founders of law make their
                appearance in Ancient Greece and Rome.
              </p>
            </div>
            <div className="historyItem">
              <p className="year">2006 – Together We Build</p>
              <p>
                Lawyers in medieval times found themselves struggling to make a
                living as the legal profession collapsed in the western world.
              </p>
            </div>
            <div className="historyItem">
              <p className="year">2008 – Completed 10000 Cases</p>
              <p>
                When did lawyers first start practicing in the United States?
                It’s important to understand that the history of attorneys.
              </p>
            </div>
            <div className="historyItem">
              <p className="year">2011 – We Are Number One</p>
              <p>
                Eventually, the prejudices against lawyers started to fall away
                and the legal profession began to gain respect and power.
              </p>
            </div>
          </div>
        </div>
        <img className="centerImg" src="historyImg.jpg" alt="history img" />
        <div className="right">
          <h3>
            We Are Specialised
            <br />
            And Experienced
          </h3>
          <img className="sep" src="sep.svg" alt="sep" />
          <p className="desc">
            Keep yourself up-to-date on your area of law. Be aware of new
            developments, as laws and rules often change based on the situation
            and new cases are being decided every day.
          </p>
          <div className="stats">
            <div className="statItem">
              <div className="flexBetween">
                <p>Divorce And Family Cases</p>
                <p className="statNumber">75%</p>
              </div>
              <div className="progress"></div>
            </div>
            <div className="statItem">
              <div className="flexBetween">
                <p>Property And Construction</p>
                <p className="statNumber">80%</p>
              </div>
              <div className="progress eighty"></div>
            </div>
            <div className="statItem">
              <div className="flexBetween">
                <p>Banking And Finance</p>
                <p className="statNumber">75%</p>
              </div>
              <div className="progress"></div>
            </div>
            <div className="statItem">
              <div className="flexBetween">
                <p>Accident & Wrongful Death</p>
                <p className="statNumber">90%</p>
              </div>
              <div className="progress ninty"></div>
            </div>
          </div>
          <Button text="Free Consulting" type="filled" />
        </div>
      </div>
    </section>
  );
};

export default HistorySection;
