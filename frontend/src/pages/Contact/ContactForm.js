import React from "react";
import { motion } from "framer-motion";
import styles from "../../styles/ContactForm.module.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

// Component to render contact form
const ContactForm = () => {
  return (
    <motion.div className={styles.ContactForm}>
      <Row>
        <h6 className={styles.FormHeading}>Contact Form</h6>
      </Row>
      <Form.Group>
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" name="name" value="Your full name" required />
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          name="email"
          value="Your email address"
          required
        />
        <Form.Label>Subject</Form.Label>
        <Form.Control
          type="text"
          name="subject"
          value="Your subject"
          required
        />
        <Form.Label>Message</Form.Label>
        <Form.Control
          as="textarea"
          name="message"
          value="Type your message here"
          required
          rows={5}
        />
      </Form.Group>
    </motion.div>
  );
};

export default ContactForm;
