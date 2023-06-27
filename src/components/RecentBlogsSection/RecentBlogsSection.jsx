import BlogCard from "../BlogCard/BlogCard";
import "./RecentBlogsSection.scss";

const RecentBlogsSection = () => {
  return (
    <section className="recentBlogsSection">
      <div className="container">
        <BlogCard
          featured
          img="featuredBlog.jpg"
          category="Corporate Law"
          date="Friday, February 4, 2022"
          title="The Difference between Information & Legal Advice"
          description="Collaborative on low-hanging fruit to identify a ballpark value
            added activity to beta matrix economically test override the
            digital."
        />

        <div className="blogsList">
          <BlogCard
            img="blog1.jpeg"
            category="Corporate Law"
            date="Friday, February 4, 2022"
            title="How to Tell Who Is at Fault in a Car Accident"
            description="Capitalize on low-hanging fruit to identify a ballpark value added matrix economically activity to beta test override the digital."
          />
          <BlogCard
            img="blog2.jpeg"
            category="Legal Advice"
            date="Friday, February 4, 2022"
            title="When Sue Outside of Workers’ Compensation"
            description="Strategies on low-hanging fruit to identify a ballpark value added activity matrix economically to beta test override the digital."
          />
          <BlogCard
            img="blog3.jpeg"
            category="Social Justice"
            date="Friday, February 4, 2022"
            title="Social Media Postings Lead to Defense Verdict"
            description="Collaborative on low-hanging fruit to identify a ballpark value added activity to beta matrix economically test override the digital."
          />
          <BlogCard
            img="blog4.jpeg"
            category="Corporate Law"
            date="Friday, February 4, 2022"
            title="Riding solo to the rescue of her beloved nonprofits"
            description="Podcasting on low-hanging fruit to identify a ballpark value added activity to beta test override matrix economically the digital."
          />
          <BlogCard
            img="blog5.jpeg"
            category="Legal Advice"
            date="Friday, February 4, 2022"
            title="Case Filed on Behalf of Injured Tugboat Worker"
            description="Efficiently on low-hanging fruit to identify a ballpark value added activity to beta test matrix economically override the digital."
          />
          <BlogCard
            img="blog6.jpeg"
            category="Social Justice"
            date="Friday, February 4, 2022"
            title="How Companies Choose Legal Representation"
            description="Objectively on low-hanging fruit to identify a ballpark value added activity to beta matrix economically test override the digital."
          />
        </div>
      </div>
    </section>
  );
};

export default RecentBlogsSection;
