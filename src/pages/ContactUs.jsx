import ContactFormSection from "../components/ContactFormSection/ContactFormSection";
import Footer from "../components/Footer/Footer";
import FAQSection from "../components/FAQSection/FAQSection";
import SectionHeader from "../components/SectionHeader/SectionHeader";

const ContactUs = () => {
  return (
    <div className="contactUsPage">
      <SectionHeader sectionTitle="Contact Us" />
      <ContactFormSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default ContactUs;
