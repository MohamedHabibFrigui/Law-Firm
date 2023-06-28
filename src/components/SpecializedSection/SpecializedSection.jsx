import "./SpecializedSection.scss";

const SpecializedSection = () => {
  return (
    <section className="specializedSection flexBetween">
      <div className="left">
        <img src="specializedImg.jpg" alt="image" />
      </div>
      <div className="right">
        <h3>
          Protecting You With
          <br />
          Our Legal Support
        </h3>
        <img src="sep5.svg" alt="sep" className="sep" />
        <p>
          When faced with a family law or personal injury matter, you want an
          advocate in your corner who is going to protect you and your best
          interests with no question to negotiations, mediations and
          adjudications, finally leading to trial or arbitration.
        </p>
      </div>
    </section>
  );
};

export default SpecializedSection;
