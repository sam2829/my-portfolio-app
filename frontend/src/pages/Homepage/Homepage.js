import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import styles from "../../styles/Homepage.module.css";
import myImage from "../../images/my-image.jpg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CustomButton from "../../components/CustomButton";
import Icons from "../../components/Icons";

//  Function to display homepage
const Homepage = () => {
  return (
    <Container className={styles.Main}>
      <main>
        <Row>
          <h1 className={styles.Heading}>Sam Scarisbrick</h1>
        </Row>
        <Row className="justify-content-center">
          <Col xs={12} lg={5} className="mx-auto">
            {/* Display image of myself, using motion-framer */}
            <motion.img
              initial={{ opacity: 0, x: -300 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 2, delay: 2 }}
              src={myImage}
              alt="Sam Scarisbrick"
              className={styles.Image}
            />
          </Col>
          <Col xs={12} lg={5} className="d-flex align-items-center mx-auto">
            <div>
              {/* using motion framer to display paragraph */}
              <motion.p
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 2, delay: 2 }}
                className={styles.Text}
              >
                Hi I'm Sam Scarisbrick, a keen junior software developer
                passionate about creating engaging and responsive web
                applications. I thrive on challenges and enjoy learning new
                technologies to enhance my skill set and deliver innovative
                solutions.
              </motion.p>
            </div>
          </Col>
        </Row>
        <Row>
          <div className="my-5">
            {/* Import component for the custom button which links to portfolio page */}
            <Link to="/portfolio">
              <CustomButton text="View My Portfolio" />
            </Link>
          </div>
        </Row>
        {/* Import Icons component */}
        <Icons />
      </main>
    </Container>
  );
};

export default Homepage;
