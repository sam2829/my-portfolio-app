import React from "react";
import styles from "../../styles/Homepage.module.css";
import iconStyles from '../../styles/Icons.module.css'
import myImage from "../../images/my-image.jpg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CustomButton from "../../components/CustomButton";

const Homepage = () => {
  return (
    <Container className={styles.Main}>
      <main>
        <Row>
          <h1 className={styles.Heading}>Sam Scarisbrick</h1>
        </Row>
        <Row>
          <Col xs={12}>
            <img src={myImage} alt="Sam Scarisbrick" className={styles.Image} />
          </Col>
          <Col xs={12}>
            <div>
              <p className={styles.Text}>
                Hi I'm Sam Scarisbrick, a keen junior software developer
                passionate about creating engaging and responsive web
                applications. I thrive on challenges and enjoy learning new
                technologies to enhance my skill set and deliver innovative
                solutions.
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <div className="my-4">
            <CustomButton text="View My Portfolio" />
          </div>
        </Row>
        <Row className="justify-content-center my-4">
          <Col className={iconStyles.Icon}>
            <a
              href="https://www.linkedin.com/in/samuel-scarisbrick/ "
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </Col>
          <Col className={iconStyles.Icon}>
            <a
              href="https://github.com/sam2829"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-github"></i>
            </a>
          </Col>
          <Col className={iconStyles.Icon}>
            <a
              href="mailto: samscarisbrick@outlook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-solid fa-envelope"></i>
            </a>
          </Col>
        </Row>
      </main>
    </Container>
  );
};

export default Homepage;
