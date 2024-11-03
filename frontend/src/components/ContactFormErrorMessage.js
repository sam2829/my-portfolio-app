import React from "react";
import Alert from "react-bootstrap/Alert";
import styles from '../styles/ContactFormErrorMessage.module.css'

// component to render error alerts in contact form
const ContactFormErrorMessage = ({ errors, fieldName }) => {
  return (
    errors &&
    errors[fieldName] && (
      <Alert className={`${styles.ErrorMessage} mt-3`} variant="warning">
        {errors[fieldName].map((error, idx) => (
          <div key={idx}>{error}</div>
        ))}
      </Alert>
    )
  );
};

export default ContactFormErrorMessage;
