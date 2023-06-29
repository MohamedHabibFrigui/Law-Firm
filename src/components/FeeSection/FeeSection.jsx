import "./FeeSection.scss";
import { GiReceiveMoney } from "react-icons/gi";

const FeeSection = () => {
  return (
    <section className="feeSection">
      <div className="container">
        <div className="left">
          <div className="iconContainer center">
            <GiReceiveMoney className="icon" />
          </div>
          <h1>No Fee Guarantee&reg;</h1>
          <p>We’ll win your injury case, or it’s free.</p>
        </div>
      </div>
    </section>
  );
};

export default FeeSection;
