import "./BlogCard.scss";
import { Link } from "react-router-dom";

const BlogCard = ({ featured, img, category, date, title, description }) => {
  return (
    <div className={`blogCard center ${featured && "featured"}`}>
      <header>
        <Link to="#">
          <img src={img} alt="blog img" />
        </Link>
      </header>
      <main>
        <div className="blogHeader">
          <Link className="blogCategory" to="#">
            {category}
          </Link>
          <p className="bar">|</p>
          <p className="blogDate">{date}</p>
        </div>
        <Link to="#">
          {featured ? (
            <h3 className="blogTitle">{title}</h3>
          ) : (
            <h6 className="blogTitle">{title}</h6>
          )}
        </Link>
        <p className="blogDesc">{description}</p>
        <Link className="viewMore">View More</Link>
      </main>
    </div>
  );
};

export default BlogCard;
