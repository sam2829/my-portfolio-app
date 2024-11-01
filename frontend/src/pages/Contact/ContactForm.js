import React from "react";
import { motion } from "framer-motion";
import styles from "../../styles/ContactForm.module.css";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import CustomButton from "../../components/CustomButton.js";

// Component to render contact form
const ContactForm = () => {
  return (
    <motion.div className={styles.ContactForm}>
      <Row>
        <h6 className={styles.FormHeading}>Contact Form</h6>
      </Row>
      <Form.Group>
        <Form.Label className={styles.FormLabel}>Name</Form.Label>
        <Form.Control
          type="text"
          name="name"
          value="Your full name"
          required
          className={styles.FormInput}
        />
        <Form.Label className={styles.FormLabel}>Email</Form.Label>
        <Form.Control
          type="email"
          name="email"
          value="Your email address"
          required
          className={styles.FormInput}
        />
        <Form.Label className={styles.FormLabel}>Subject</Form.Label>
        <Form.Control
          type="text"
          name="subject"
          value="Your subject"
          required
          className={styles.FormInput}
        />
        <Form.Label className={styles.FormLabel}>Message</Form.Label>
        <Form.Control
          as="textarea"
          name="message"
          value="Type your message here"
          required
          rows={5}
          className={styles.FormInput}
        />
      </Form.Group>
      <div className="my-3">
        <CustomButton text="Submit" />
      </div>
    </motion.div>
  );
};

export default ContactForm;
