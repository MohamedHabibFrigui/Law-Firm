import "./OurValuesSection.scss";
import { LuSwords } from "react-icons/lu";
import { FaBalanceScale } from "react-icons/fa";
import { AiFillHeart } from "react-icons/ai";
import { BiSolidLock } from "react-icons/bi";

const OurValuesSection = () => {
  return (
    <section className="ourValuesSection">
      <div className="container flexBetween">
        <div className="left">
          <h3>What We Offering Our Clients With Their Needs</h3>
          <img src="sep.svg" alt="sep" className="sep" />
          <p>
            What We Offering Our Clients With Their Needs Title Separator
            Litigation can be laden with emotion and uncertainty. Our attorneys
            are committed to providing you with the support, attention, and
            consideration that you deserve.
          </p>
        </div>
        <div className="right">
          <div className="ourValuesCard">
            <div className="iconContainer center">
              <FaBalanceScale className="icon" />
            </div>
            <h5>Direct Way Of Justice</h5>
            <p>
              Our Banking and Finance team has very broad experience structuring
              and negotiating complex financing deals, including in many
              cross-border transactions.
            </p>
          </div>
          <div className="ourValuesCard">
            <div className="iconContainer center">
              <BiSolidLock className="icon" />
            </div>
            <h5>Protecting Your Business</h5>
            <p>
              We are on the panel of many international and local banks, and
              also represent borrowers which include listed companies, large
              government-linked conglomerates private high net worth.
            </p>
          </div>
          <div className="ourValuesCard">
            <div className="iconContainer center">
              <AiFillHeart className="icon" />
            </div>
            <h5>Relationship Based On Trust</h5>
            <p>
              We punch far above our weight when it comes to Singapore’s equity
              capital markets, handling everything from IPOs to secondary
              fundraisings and listed company advisory work.
            </p>
          </div>
          <div className="ourValuesCard">
            <div className="iconContainer center">
              <LuSwords className="icon" />
            </div>
            <h5>Fight For Justice</h5>
            <p>
              The strong relationships we build with every listed client enables
              us to effectively support their future requirements. We are also
              active on international debt listings on the Singapore Exchange.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurValuesSection;
