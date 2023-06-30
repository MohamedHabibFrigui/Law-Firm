import { Route, Routes } from "react-router-dom";
import "./App.scss";
import About from "./pages/About";
import Cases from "./pages/Cases";
import ContactUs from "./pages/ContactUs";
import Error from "./pages/Error";
import Home from "./pages/Home";
import PracticeArea from "./pages/PracticeArea";
import Pricing from "./pages/Pricing";
import RecentBlog from "./pages/RecentBlog";
import Testimonial from "./pages/Testimonial";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/testimonial" element={<Testimonial />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/blog" element={<RecentBlog />} />
        <Route path="/cases" element={<Cases />} />
        <Route path="/practice-area" element={<PracticeArea />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
