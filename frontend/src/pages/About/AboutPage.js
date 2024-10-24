import React from "react";
import styles from "../../styles/AboutPage.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Skills from "../../components/Skills";

const AboutPage = () => {
  return (
    <Container>
      <main className={styles.Main}>
        <Row>
          <h1 className={styles.Heading}>Sam Scarisbrick</h1>
        </Row>
        <Row className="justify-content-center">
          <Col xs={12} lg={5} className="mx-auto">
            <h3 className={styles.SubHeading}>About Me</h3>
            <p className={styles.Text}>
              I’m a passionate junior software developer with a strong
              enthusiasm for learning and building innovative web solutions.
              I’ve developed skills in HTML, CSS, JavaScript, Python, React,
              Django, and more.
            </p>
            <p className={styles.Text}>
              After earning a Full Stack Software Development Diploma through
              the Code Institute, I built my portfolio and recently started
              working on projects for local businesses, applying my knowledge to
              solve real-world problems and deliver user-friendly solutions.
            </p>
            <p className={styles.Text}>
              I’m eager for job opportunities where I can contribute, learn, and
              grow within a dynamic team. Feel free to connect with me on
              LinkedIn or explore my work on the Portfolio page. For any
              inquiries, don’t hesitate to reach out through the contact details
              available on my Contact page.
            </p>
          </Col>
          <Col xs={12} lg={5} className="mx-auto">
          <h3 className={styles.SubHeading}>My Skills</h3>
            <h6 className={styles.SkillsHeading}>Frontend:</h6>
            <Skills />
            <h6 className={styles.SkillsHeading}>Backend:</h6>
            <h6 className={styles.SkillsHeading}>Tools:</h6>
          </Col>
        </Row>
      </main>
    </Container>
  );
};

export default AboutPage;
