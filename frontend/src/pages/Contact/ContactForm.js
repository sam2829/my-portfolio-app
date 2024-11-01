import React, { useState } from "react";
import { motion } from "framer-motion";
import styles from "../../styles/ContactForm.module.css";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import CustomButton from "../../components/CustomButton.js";
import ContactFormFields from "./ContactFormFields.js";
import useIsSmallScreen from "../../hooks/useIsSmallScreen.js";

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

  // handle change in form fields
  const handleChange = (event) => {
    setFormEmailData({
      ...formEmailData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <motion.div {...motionConfig} className={styles.ContactForm}>
      <Row>
        <h6 className={styles.FormHeading}>Contact Form</h6>
      </Row>
      <Form>
        {/* import Name field */}
        <ContactFormFields
          title="Name"
          type="text"
          name="name"
          value={name}
          placeholder="Your full name"
          handleChange={handleChange}
        />
        {/* import email field */}
        <ContactFormFields
          title="Email"
          type="email"
          name="email"
          value={email}
          placeholder="Your email address"
          handleChange={handleChange}
        />
        {/* import subject field */}
        <ContactFormFields
          title="Subject"
          type="text"
          name="subject"
          value={subject}
          placeholder="Your subject"
          handleChange={handleChange}
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
        />
      </Form>
      <div className="my-3">
        <CustomButton text="Submit" />
      </div>
    </motion.div>
  );
};

export default ContactForm;
