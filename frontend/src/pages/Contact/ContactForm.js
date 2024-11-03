import React, { useState } from "react";
import { motion } from "framer-motion";
import styles from "../../styles/ContactForm.module.css";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import CustomButton from "../../components/CustomButton.js";
import ContactFormFields from "./ContactFormFields.js";
import LoadingSpinner from "../../components/LoadingSpinner.js";
import useIsSmallScreen from "../../hooks/useIsSmallScreen.js";
import axios from "axios";

// Component to render contact form
const ContactForm = () => {
  // define if app is in small screen
  const isSmallScreen = useIsSmallScreen();

  // variables for motion framer
  const motionConfig = {
    initial: { opacity: 0, x: 300 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 2, delay: isSmallScreen ? 3 : 1 },
  };

  // State for contact form input fields
  const [formEmailData, setFormEmailData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const { name, email, subject, message } = formEmailData;

  // state for submitting form
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  // handle change in form fields
  const handleChange = (event) => {
    setFormEmailData({
      ...formEmailData,
      [event.target.name]: event.target.value,
    });
  };

  // handle for submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    console.log("sending...");

    try {
      await axios.post("http://127.0.0.1:8000/api/send-email/", formEmailData);

      //handle response from backend
      console.log("success");
      setFormEmailData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setErrors({});
    } catch (err) {
      setErrors(err.response?.data?.errors || {});
      console.log("error sending email", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div {...motionConfig} className={styles.ContactForm}>
      <Row>
        <h6 className={styles.FormHeading}>Contact Form</h6>
      </Row>
      <Form onSubmit={handleSubmit}>
        {/* import Name field */}
        <ContactFormFields
          title="Name"
          type="text"
          name="name"
          value={name}
          placeholder="Your full name"
          handleChange={handleChange}
          errors={errors}
        />
        {/* import email field */}
        <ContactFormFields
          title="Email"
          type="email"
          name="email"
          value={email}
          placeholder="Your email address"
          handleChange={handleChange}
          errors={errors}
        />
        {/* import subject field */}
        <ContactFormFields
          title="Subject"
          type="text"
          name="subject"
          value={subject}
          placeholder="Your subject"
          handleChange={handleChange}
          errors={errors}
        />
        {/* import message field */}
        <ContactFormFields
          title="Message"
          as="textarea"
          name="message"
          value={message}
          placeholder="Your message here"
          rows={5}
          handleChange={handleChange}
          errors={errors}
        />
        {/* import submit custom button and loading spinner */}
        <div className={`${styles.ButtonContainer} my-3`}>
          {!isSubmitting && <CustomButton text="Submit" />}
          {isSubmitting && <LoadingSpinner buttonSpinner />}
        </div>
      </Form>
    </motion.div>
  );
};

export default ContactForm;
