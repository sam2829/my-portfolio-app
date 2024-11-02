import React from "react";
import { Spinner } from "react-bootstrap";
import styles from "../styles/LoadingSpinner.module.css";

// componenet to render spinning icon
const LoadingSpinner = ({ buttonSpinner }) => {
  return (
    <>
      {/* main page spinner */}
      {!buttonSpinner && (
        <div className={styles.SpinnerContainer}>
          <Spinner animation="border" className={styles.Spinner} />
        </div>
      )}
      {/* button spinner */}
      {buttonSpinner && (
        <Spinner animation="border" className={styles.SpinnerButton} />
      )}
    </>
  );
};

export default LoadingSpinner;
