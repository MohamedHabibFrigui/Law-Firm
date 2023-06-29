import AppointmentSection from "../components/AppointmentSection/AppointmentSection";
import ConsultationSection from "../components/ConsultationSection/ConsultationSection";
import Footer from "../components/Footer/Footer";
import SectionHeader from "../components/SectionHeader/SectionHeader";
import TestimonialSection from "../components/TestimonialSection/TestimonialSection";

const Testimonials = () => {
  return (
    <div className="testimonialsPage">
      <SectionHeader sectionTitle="Testimonial" />
      <TestimonialSection />
      <ConsultationSection />
      <AppointmentSection />
      <Footer />
    </div>
  );
};

export default Testimonials;
