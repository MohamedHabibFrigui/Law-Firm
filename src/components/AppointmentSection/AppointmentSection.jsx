import "./AppointmentSection.scss";
import { Formik } from "formik";
import { useState } from "react";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid Email").required("Email is required"),
  phone: Yup.string()
    .matches(
      /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
      "Invalid Phone Number"
    )
    .required("Phone Number is required"),
  subject: Yup.string().required("Subject is required"),
  message: Yup.string().required("Message is required"),
});

const initialValues = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

const AppointmentSection = () => {
  const [receivedSubmission, setreceivedSubmission] = useState(false);

  const handleSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      console.log(values);
      setSubmitting(false);
    }, 500);
    setreceivedSubmission(true);
  };

  return (
    <section className="appointmentSection">
      <div className="container">
        {!receivedSubmission ? (
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              setSubmitting,
            }) => (
              <form onSubmit={handleSubmit}>
                <div className="name">
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name*"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                  />
                  {
                    <div className="error">
                      {errors.name && touched.name && errors.name}
                    </div>
                  }
                </div>
                <div className="email">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address*"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  />
                  <div className="error">
                    {errors.email && touched.email && errors.email}
                  </div>
                </div>
                <div className="phone">
                  <input
                    type="text"
                    name="phone"
                    placeholder="Phone Number*"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.phone}
                  />
                  <div className="error">
                    {errors.phone && touched.phone && errors.phone}
                  </div>
                </div>
                <div className="subject">
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject*"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.subject}
                  />
                  <div className="error">
                    {errors.subject && touched.subject && errors.subject}
                  </div>
                </div>
                <div className="message">
                  <textarea
                    name="message"
                    placeholder="Your Message*"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.message}
                  ></textarea>
                  <div className="error">
                    {errors.message && touched.message && errors.message}
                  </div>
                </div>
                <button type="submit">
                  {isSubmitting ? "Please Wait..." : "Get An Appointment"}
                </button>
              </form>
            )}
          </Formik>
        ) : (
          <p className="received">
            Thank you! Your submission has been received!
          </p>
        )}
      </div>
    </section>
  );
};

export default AppointmentSection;
