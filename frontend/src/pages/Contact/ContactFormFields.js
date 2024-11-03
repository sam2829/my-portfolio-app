import React from "react";
import styles from "../../styles/ContactFormFields.module.css";
import Form from "react-bootstrap/Form";
import ContactFormErrorMessage from "../../components/ContactFormErrorMessage";

// Component to render contact form fields
const ContactFormFields = ({
  title,
  type = "text",
  name,
  value,
  as = "input",
  rows,
  handleChange,
  placeholder,
  errors,
}) => {
  return (
    <>
      <Form.Label className={styles.FormLabel}>{title}</Form.Label>
      <Form.Control
        as={as}
        type={type}
        name={name}
        value={value}
        // required
        className={styles.FormInput}
        rows={rows}
        onChange={handleChange}
        placeholder={placeholder}
      />
      {/* Error message component */}
      <ContactFormErrorMessage errors={errors} fieldName={name} />
    </>
  );
};

export default ContactFormFields;
