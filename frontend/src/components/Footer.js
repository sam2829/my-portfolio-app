import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Footer.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Icons from "./Icons";

// Component to display the footer
const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={6} className="mx-auto">
            <h5 className={styles.Heading}>Explore</h5>
            {/* Links container around links for site */}
            <div className={styles.TextLinkContainer}>
              <Link className={styles.TextLink} to="/">
                Home
              </Link>
              <Link className={styles.TextLink} to="/about">
                About
              </Link>
              <Link className={styles.TextLink} to="/portfolio">
                Portfolio
              </Link>
              <Link className={styles.TextLink} to="/contact">
                Contact
              </Link>
            </div>
          </Col>
          <Col xs={12} md={6} className="mx-auto">
            <h5 className={styles.Heading}>Social</h5>
            {/* Import the the social icons */}
            <Icons footer />
          </Col>
        </Row>
        <hr className={styles.FooterLine} />
        <p className={styles.Text}>
          Copyright 2024 Sam Scarisbrick. All rights reserved.
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
