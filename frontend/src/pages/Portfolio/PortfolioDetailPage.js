import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import styles from "../../styles/PortfolioDetailPage.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { DUMMYPROJECTS } from "../../api/dummyData.js";
import PortfolioProjectTechnologies from "./PortfolioProjectTechnologies.js";
import PortfolioDetailButtons from "./PortfolioDetailButtons.js";

//  component to project detail page
const PortfolioDetailPage = () => {
  // Extract the 'id' from the URL
  const { id } = useParams();
  const [project, setProject] = useState(null);

  // define if app is in small screen
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 991);
  // const [delays, setDelays] = useState({
  //   techDelay: isSmallScreen ? 5 : 1,
  // });

  // Variables for motion framer
  const techDelay = isSmallScreen ? 5 : 1;
  const imageInitial = { opacity: 0, x: -300 };
  const imageAnimate = { opacity: 1, x: 0 };

  // useEffect to detect screen size
  useEffect(() => {
    const handleResize = () => {
      const smallScreen = window.innerWidth <= 991;
      setIsSmallScreen(smallScreen);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  //   useEffect hook to eventually fetch data
  useEffect(() => {
    // Fetch project details based on the ID
    const fetchProjectDetails = async () => {
      const projectDetail = DUMMYPROJECTS.find(
        (project) => project.id === parseInt(id)
      );
      setProject(projectDetail);
    };

    fetchProjectDetails();
  }, [id]); // Fetch new data if 'id' changes

  if (!project) return <p>Loading...</p>;
  return (
    <Container>
      <main className={styles.Main}>
        <h1 className={styles.Heading}>{project.title}</h1>
        <Row className="justify-content-center">
          <Col mx={12} lg={5}>
            {/* image on displayed in large screens */}
            <motion.img
              initial={imageInitial}
              animate={imageAnimate}
              transition={{ duration: 2, delay: 1 }}
              src={project.image}
              alt={project.title}
              className={`${styles.Image} d-none d-lg-block`}
            />
          </Col>
          <Col xs={12} lg={5}>
            <Row>
              <Col xs={12}>
                <motion.div
                  initial={{ opacity: 0, x: 300 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 2, delay: 1 }}
                >
                  <h6 className={styles.SubHeading}>Overview</h6>
                  <p className={styles.Text}>{project.overview}</p>
                </motion.div>
                {/* image on displayed in small screens */}
                <motion.img
                  initial={imageInitial}
                  animate={imageAnimate}
                  transition={{ duration: 2, delay: 3 }}
                  src={project.image}
                  alt={project.title}
                  className={`${styles.Image} d-block d-lg-none`}
                />
              </Col>
            </Row>
            <Row className="justify-content-center">
              {/* import technologies list */}
              <motion.div
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 2, delay: techDelay }}
              >
                <PortfolioProjectTechnologies
                  technologies={project.technologies}
                />
              </motion.div>
            </Row>
          </Col>
        </Row>
        {/* import buttons for go back and view live site */}
        <PortfolioDetailButtons liveSite={project.live_site} />
      </main>
    </Container>
  );
};

export default PortfolioDetailPage;
