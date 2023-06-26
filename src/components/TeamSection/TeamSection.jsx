import TeamCard from "../TeamCard/TeamCard";
import "./TeamSection.scss";

const TeamSection = () => {
  return (
    <section className="teamSection">
      <div className="container center">
        <h3>
          Our Experienced Attorney Are Ready
          <br />
          To Answer Any Questions
        </h3>
        <img src="sep2.svg" alt="sep" className="sep" />
        <div className="teamList">
          <TeamCard
            img="team1.jpg"
            name="John Turner"
            profession="Civil Attorney"
          />
          <TeamCard
            img="team2.jpg"
            name="Martha Black"
            profession="Associate Attorney"
          />
          <TeamCard
            img="team3.jpg"
            name="Brian Gomez"
            profession="Titular Attorney"
          />
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
