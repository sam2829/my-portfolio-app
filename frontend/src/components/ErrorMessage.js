import React from "react";
import Alert from "react-bootstrap/Alert";
import styles from "../styles/ErrorMessage.module.css";

// component to render useFetchImages hook error alert
const ErrorMessage = ({ error }) => {
  return (
    <Alert className={`${styles.Error} mt-3`} variant="warning">
      {error}
    </Alert>
  );
};

export default ErrorMessage;