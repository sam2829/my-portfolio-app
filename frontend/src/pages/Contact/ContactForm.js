import React from "react";
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
          value="Your full name"
        />
        {/* import email field */}
        <ContactFormFields
          title="Email"
          type="email"
          name="email"
          value="Your email address"
        />
        {/* import subject field */}
        <ContactFormFields
          title="Subject"
          type="text"
          name="subject"
          value="Your subject"
        />
        {/* import message field */}
        <ContactFormFields
          title="Message"
          as="textarea"
          name="message"
          value="Your message here"
          rows={5}
        />
      </Form>
      <div className="my-3">
        <CustomButton text="Submit" />
      </div>
    </motion.div>
  );
};

export default ContactForm;
