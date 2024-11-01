import React from "react";
import { motion } from "framer-motion";
import styles from "../../styles/ContactPage.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Icons from "../../components/Icons";
import ContactForm from "./ContactForm";

// component to render the contact page
const ContactPage = () => {

  // variables for motion framer
  const motionConfig = {
    initial: { opacity: 0, x: -300 },
    animate: { opacity: 1, x: 0 },
    transition: {duration: 2, delay: 1}
  };
  return (
    <Container>
      <main className={styles.Main}>
        <Row>
          <h1 className={styles.Heading}>Contact Me</h1>
        </Row>
        <Row>
          <Col xs={12} lg={5} className={`${styles.InfoColumn} mx-auto`}>
            <Row>
              {/* motion framer to animate text area */}
              <motion.p {...motionConfig} className={styles.Text}>
                I'm always excited to explore new career opportunities and
                connect with professionals in the industry. Whether you have a
                job opening, a project to collaborate on, or just want to chat,
                feel free to get in touch! You can reach me through the contact
                form, email or via LinkedIn.
              </motion.p>
            </Row>
            <Row>
              {/* import Icons and use motion div t=for animation */}
              <motion.div {...motionConfig}>
                <Icons />
              </motion.div>
            </Row>
          </Col>
          <Col xs={12} lg={5} className="mx-auto">
          {/* import contact form */}
            <ContactForm />
          </Col>
        </Row>
      </main>
    </Container>
  );
};

export default ContactPage;
