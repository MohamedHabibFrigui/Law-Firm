import Navbar from "../Navbar/Navbar";
import "./SectionHeader.scss";

const SectionHeader = ({ sectionTitle }) => {
  return (
    <section className="sectionHeader">
      <Navbar />
      <div className="container center">
        <h1>{sectionTitle}</h1>
        <img src="sep2.svg" alt="sep" />
      </div>
    </section>
  );
};

export default SectionHeader;
