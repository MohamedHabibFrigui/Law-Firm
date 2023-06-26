import ReviewCard from "../ReviewCard/ReviewCard";
import "./ReviewsSection.scss";

const ReviewsSection = () => {
  return (
    <section className="reviewsSection">
      <div className="container center">
        <h3>Client Opinions & Reviews</h3>
        <img src="sep2.svg" alt="sep" className="sep" />
        <div className="reviewsList">
          <ReviewCard
            reversed
            img="person3.jpg"
            person="Natasha"
            profession="Private Employee"
            quote="Could you please thank Paul personally for me, the stars are for his forehead. The perfect way of handling the case based on the situation."
          />
          <ReviewCard
            img="person4.jpg"
            person="Hannah Butler"
            profession="Business Sector"
            quote="Attorney law firm really helped me with all my family law and custody issues at the right time. Words are not enough to thank the firm."
          />
          <ReviewCard
            reversed
            img="person5.jpg"
            person="Phillip Arnold"
            profession="Bus Driver"
            quote="Thank you for the way in which your team handling the matter on a perfect way. They give me a big relief in this case with more confident."
          />
          <ReviewCard
            img="person6.jpg"
            person="Joshua Warren"
            profession="Private Engineer"
            quote="I frequently check the Best Lawyers list to select an attorney in areas too familiar with at the end they came and lead to achive the justice."
          />
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
