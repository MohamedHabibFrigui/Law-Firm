import "./ContactFormSection.scss";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdMail } from "react-icons/md";
import AppointmentSection from "../AppointmentSection/AppointmentSection";
const ContactFormSection = () => {
  return (
    <section className="contactFormSection">
      <div className="container">
        <header>
          <div>
            <h6>Say Hello To Attorney law</h6>
            <p>
              If you have any questions about the services we simply use the
              form below. We try and its respond to all queries and comments
              within 24 hours.
            </p>
          </div>
          <div>
            <h6>Las Vegas</h6>
            <p>124 New Street, Las Vegas, USA.</p>
            <p className="info">contact@attoorneylaw.com</p>
            <p className="info">+0 123 654 78910</p>
          </div>
          <div>
            <h6>New York</h6>
            <p>Main Office, Law Street Av,</p>
            <p className="info">contact@attoorneylaw.com</p>
            <p className="info">+0 123 654 78910</p>
          </div>
        </header>
        <AppointmentSection contactForm />
        <footer className="flexBetween">
          <div className="flexBetween">
            <div className="contactInfo flexBetween">
              <div className="iconContainer center">
                <BsFillTelephoneFill className="icon" />
              </div>
              <div className="contactRight">
                <p className="title">Call Us On:</p>
                <p className="info">911-987654321</p>
              </div>
            </div>
            <div className="contactInfo flexBetween">
              <div className="iconContainer center">
                <MdMail className="icon" />
              </div>
              <div className="contactRight">
                <p className="title">Email Us On:</p>
                <p className="info">yourmail@mail.com</p>
              </div>
            </div>
          </div>
          <div className="contactInfo mainOffice flexBetween">
            <div className="iconContainer center">
              <MdMail className="icon" />
            </div>
            <div className="contactRight">
              <p className="title">Main Office:</p>
              <p>124, New Street, Las Vegas 90027, USA.</p>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default ContactFormSection;
