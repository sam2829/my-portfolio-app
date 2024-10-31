import React from "react";
import styles from "../../styles/ContactPage.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Icons from "../../components/Icons";
import ContactForm from "./ContactForm";

const ContactPage = () => {
  return (
    <Container>
      <main className={styles.Main}>
        <Row>
          <h1 className={styles.Heading}>Contact Me</h1>
        </Row>
        <Row>
          <Col xs={12} lg={5} className="mx-auto">
          <Row>
            <p className={styles.Text}>
              I'm always excited to explore new career opportunities and connect
              with professionals in the industry. Whether you have a job
              opening, a project to collaborate on, or just want to chat, feel
              free to get in touch! You can reach me through the contact form,
              email or via LinkedIn.
            </p>
            </Row>
            <Row>
              <Icons />
            </Row>
          </Col>
          <Col xs={12} lg={5} className="align-items-center mx-auto">
          <ContactForm />
          </Col>
        </Row>
      </main>
    </Container>
  );
};

export default ContactPage;
