import RecentBlogsSection from "../components/RecentBlogsSection/RecentBlogsSection";
import SectionHeader from "../components/SectionHeader/SectionHeader";
import HelpSection from "../components/HelpSection/HelpSection";
import Footer from "../components/Footer/Footer";

const RecentBlog = () => {
  return (
    <div className="recentBlogPage">
      <SectionHeader sectionTitle="Recent Blogs" />
      <RecentBlogsSection />
      <HelpSection />
      <Footer />
    </div>
  );
};

export default RecentBlog;
