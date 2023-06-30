import "./CaseCard.scss";

const CaseCard = ({ img, price, date, title, description }) => {
  return (
    <div className="caseCard">
      <div className="img">
        <img src={img} alt={title} />
        <p>{price}</p>
      </div>
      <div className="info">
        <p className="date">{date}</p>
        <h6>{title}</h6>
        <p className="description">{description}</p>
        <p className="details">View Details</p>
      </div>
    </div>
  );
};

export default CaseCard;
