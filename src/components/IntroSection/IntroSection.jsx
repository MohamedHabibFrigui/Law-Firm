import "./IntroSection.scss";

const IntroSection = () => {
  return (
    <section className="introSection">
      <div className="container flexBetween">
        <div className="left">
          <img src="intro1.jpg" alt="intro1" />
          <img src="intro2.jpg" alt="intro2" />
        </div>
        <div className="right">
          <h3>
            Welcome To Attorney Law - <br /> Lawyer & Law Firm Company
          </h3>
          <img src="sep.svg" alt="sep" />
          <p>
            Although we are located in Brooklyn, our maritime lawyers are proud
            to help the injured throughout the nation, including workers who
            were working in foreign waters at the time of the incident go up
            against the largest offshore companies and win.
          </p>
          <div className="person">
            <img src="person2.png" alt="person" />
            <h4>Peter Parker</h4>
          </div>
          <div className="cards">
            <div className="card1 flexBetween">
              <img src="introIcon.svg" alt="introIcon" />
              <p>
                95%
                <br />
                Case Success
              </p>
            </div>
            <div className="card2 flexBetween">
              <span className="center">
                <h6>35+</h6>
              </span>
              <p>
                Years
                <br />
                Experience
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
