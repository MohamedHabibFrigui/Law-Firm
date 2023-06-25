import PracticeCard from "../PracticeCard/PracticeCard";
import "./PracticeSection.scss";

const PracticeSection = () => {
  return (
    <section className="practiceSection">
      <div className="container">
        <header className="flexBetween">
          <div className="left">
            <h3>
              Explore The Perfect
              <br />
              Our Practice Areas
            </h3>
            <img src="sep.svg" alt="sep" />
          </div>
          <p className="right">
            We are a group of civil litigation/trial attorneys who focus on
            providing a justice based on the issues relating to insurance
            defense, insurance coverage, bad faith, insurance fraud and criminal
            litigation.
          </p>
        </header>
        <div className="cardsList">
          <PracticeCard
            title="Business Law"
            desc="Be aware of new developments, as laws and rules often change based on the situation."
            icon="practiceIcon1.svg"
          />
          <PracticeCard
            title="Construction Law"
            desc="Never judge, just listen and advise. Even if your client has made a bad decision in the case."
            icon="practiceIcon2.svg"
          />
          <PracticeCard
            title="Car Accident"
            desc="Being untruthful will get you nowhere and give you a reputation of the dishonesty in law."
            icon="practiceIcon3.svg"
          />
          <PracticeCard
            title="Wrongful Death"
            desc="Keep yourself up-to-date on your area of law. Be aware of new justice, as laws and rules."
            icon="practiceIcon4.svg"
          />
          <PracticeCard
            title="Criminal Law"
            desc="Our attorneys are fully committed to providing you with the support and attention that you deserve."
            icon="practiceIcon5.svg"
          />
          <PracticeCard
            title="Family Law"
            desc="You may find yourself unable to work or complete work-related responsibilities safely."
            icon="practiceIcon6.svg"
          />
        </div>
      </div>
    </section>
  );
};

export default PracticeSection;
