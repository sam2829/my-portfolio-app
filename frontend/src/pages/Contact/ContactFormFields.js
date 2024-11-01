import React from "react";
import styles from "../../styles/ContactFormFields.module.css";
import Form from "react-bootstrap/Form";

// Component to render contact form fields
const ContactFormFields = ({
  title,
  type = "text",
  name,
  value,
  as = "input",
  rows,
}) => {
  return (
    <>
      <Form.Label className={styles.FormLabel}>{title}</Form.Label>
      <Form.Control
        as={as}
        type={type}
        name={name}
        value={value}
        required
        className={styles.FormInput}
        rows={rows}
      />
    </>
  );
};

export default ContactFormFields;
