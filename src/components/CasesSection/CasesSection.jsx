import CaseCard from "../CaseCard/CaseCard";
import "./CasesSection.scss";

const CasesSection = () => {
  return (
    <section className="casesSection">
      <div className="container">
        <CaseCard
          img="case1.jpg"
          price="$10 Million"
          date="February 7, 2022"
          title="Gas Station Injury"
          description="A female airline employee was suffered from a workplace injury, when she was struck in the head by a large luggage container knocking her to the ground."
        />
        <CaseCard
          img="case2.jpg"
          price="$12000"
          date="February 7, 2022"
          title="Car Accident"
          description="Our attorneys took dozens of depositions to get to the bottom of the facts. After years of difficult, highly-contested litigation, they were finally able to overcome."
        />
        <CaseCard
          img="case3.jpg"
          price="$2 Million"
          date="February 7, 2022"
          title="Workplace Injury"
          description="Our team took on a case that other law firms turned down, knowing that we had the resources and patience to obtain justice for our clients."
        />
        <CaseCard
          img="case4.jpg"
          price="$88000"
          date="February 7, 2022"
          title="Truck Accident"
          description="Our legal team proved us right—after years of preparation, hundreds of depositions, and multiple appeals, our team achieved a massive settlement."
        />
        <CaseCard
          img="case5.jpg"
          price="$15 Million"
          date="February 7, 2022"
          title="Construction Fall"
          description="After years of difficult, highly-contested litigation, they were finally able to overcome both procedural and legal hurdles. The defendants chose to settle with our clients."
        />
        <CaseCard
          img="case6.jpg"
          price="$8 Million"
          date="February 7, 2022"
          title="Wrongful Death"
          description="Head-on accident left the man with a complex right femur fracture involving multiple fragments of the bone shaft, a right ring finger fracture."
        />
      </div>
    </section>
  );
};

export default CasesSection;
