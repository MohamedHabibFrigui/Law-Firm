import TestimonialCard from "../TestimonialCard/TestimonialCard";
import "./TestimonialSection.scss";

const TestimonialSection = () => {
  return (
    <section className="testimonialSection">
      <div className="container">
        <TestimonialCard
          img="person4.jpg"
          name="Hannah Butler"
          profession="Business Sector"
          text="Attorney law firm really helped me with all my family law and custody issues at the right time. Words are not enough to thank the firm."
        />
        <TestimonialCard
          img="person3.jpg"
          name="Natasha"
          profession="Private Employee"
          text="Could you please thank Paul personally for me, the stars are for his forehead. The perfect way of handling the case based on the situation."
        />
        <TestimonialCard
          img="person7.jpg"
          name="Pamela Carlson"
          profession="Search Optimizer"
          text="Thank you for the way in which your team handling the matter on a perfect way. The perfect way of handling the case based on the situation."
        />
        <TestimonialCard
          img="person6.jpg"
          name="Douglas Rose"
          profession="Creative Manager"
          text="Best Lawyers is a valuable resource for insurance claims people in attorney law firm. They really helped me with all my family law and custody issues."
        />
        <TestimonialCard
          img="person5.jpg"
          name="Phillip Arnold"
          profession="Bus Driver"
          text="Thank you for the way in which your team handling the matter on a perfect way. They give me a big relief in this case with more confident."
        />
        <TestimonialCard
          img="person8.jpg"
          name="Joshua Warren"
          profession="Private Engineer"
          text="I frequently check the Best Lawyers list to select an attorney in areas too familiar with at the end they came and lead to achive the justice."
        />
      </div>
    </section>
  );
};

export default TestimonialSection;
