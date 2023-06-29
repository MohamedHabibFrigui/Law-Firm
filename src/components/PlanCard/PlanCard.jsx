import "./PlanCard.scss";
import Button from "../Button/Button";

const PlanCard = ({ type }) => {
  return (
    <div className="planCard center">
      <header>
        <h3>
          {type === "single"
            ? "Single Plant"
            : type === "group"
            ? "Group Plan"
            : type === "business"
            ? "Business Plan"
            : ""}
        </h3>
        <p>
          {type === "single"
            ? "For single person"
            : type === "group"
            ? "For group of people"
            : type === "business"
            ? "For business indystry"
            : ""}
        </p>
      </header>
      <div className="amount">
        <h3>
          {type === "single"
            ? "$8.00"
            : type === "group"
            ? "$16.00"
            : type === "business"
            ? "$32.00"
            : ""}
        </h3>
        <p>Per Case</p>
      </div>
      <ul className="list">
        <li>
          <p>File The Case</p>
        </li>
        <li>
          <p>Cases, headnotes</p>
        </li>
        <li>
          <p>Statutes & court rules</p>
        </li>
        <li>
          <p>{type === "single" ? "-" : "Graphical statutes"}</p>
        </li>
        <li>
          <p>{type === "business" ? "Legislative history" : "-"}</p>
        </li>
      </ul>
      <Button type="filled" text="Get Started" />
    </div>
  );
};

export default PlanCard;
