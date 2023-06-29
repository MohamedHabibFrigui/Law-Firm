import PlanCard from "../PlanCard/PlanCard";
import "./PricingSection.scss";

const PricingSection = () => {
  return (
    <section className="pricingSection">
      <div className="container">
        <header className="center">
          <h3>Plan For Justice</h3>
          <img src="sep2.svg" alt="sep" className="sep" />
        </header>
        <div className="plansList">
          <PlanCard type="single" />
          <PlanCard type="group" />
          <PlanCard type="business" />
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
