import React from "react";
import styles from "../styles/Icons.module.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// Component to display the social icons
const Icons = ({ footer }) => {
  return (
    <Row className="justify-content-center my-4">
      <Col
        className={`${styles.Icon} ${footer ? styles.FooterIcon : ""}`}
        xs={2}
      >
        <a
          href="https://www.linkedin.com/in/samuel-scarisbrick/ "
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-linkedin"></i>
        </a>
      </Col>
      <Col
        className={`${styles.Icon} ${footer ? styles.FooterIcon : ""}`}
        xs={2}
      >
        <a
          href="https://github.com/sam2829"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-github"></i>
        </a>
      </Col>
      <Col
        className={`${styles.Icon} ${footer ? styles.FooterIcon : ""}`}
        xs={2}
      >
        <a
          href="mailto: samscarisbrick@outlook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-solid fa-envelope"></i>
        </a>
      </Col>
    </Row>
  );
};

export default Icons;
