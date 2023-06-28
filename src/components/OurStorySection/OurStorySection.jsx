import "./OurStorySection.scss";

const OurStorySection = () => {
  return (
    <section className="ourStorySection">
      <div className="container">
        <header className="center">
          <h3>Our Story</h3>
          <img src="sep2.svg" alt="sep" className="sep" />
          <h6>
            The law evolves, as do clients' expectations of the firm they choose
            to
            <br />
            represent them. Recognizing the often held perception of legal
            <br />
            services being expensive and exclusive, Law rules continues
            <br />
            to tread a very different track.
          </h6>
        </header>
        <div className="images">
          <img src="ourStory1.jpg" alt="story image" />
          <img src="ourStory2.jpg" alt="story image" />
          <img src="ourStory3.jpg" alt="story image" />
        </div>
      </div>
    </section>
  );
};

export default OurStorySection;
