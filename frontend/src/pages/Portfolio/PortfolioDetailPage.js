import React from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import styles from "../../styles/PortfolioDetailPage.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PortfolioProjectTechnologies from "./PortfolioProjectTechnologies.js";
import PortfolioDetailButtons from "./PortfolioDetailButtons.js";
import useIsSmallScreen from "../../hooks/useIsSmallScreen.js";
import useFetchPortfolioProjects from "../../hooks/useFetchPortfolioProjects.js";
import LoadingSpinner from "../../components/LoadingSpinner.js";
import ErrorMessage from "../../components/ErrorMessage.js";

//  component to project detail page
const PortfolioDetailPage = () => {
  // Extract the 'id' from the URL
  const { id } = useParams();
  // custom hook to fetch project data
  const { projectsData, isLoading, error } = useFetchPortfolioProjects(id);

  // define if app is in small screen
  const isSmallScreen = useIsSmallScreen();

  // Variables for motion framer
  const techDelay = isSmallScreen ? 5 : 1;
  const imageInitial = { opacity: 0, x: -300 };
  const imageAnimate = { opacity: 1, x: 0 };
  const duration = 2;
  const motionConfig = {
    initial: { opacity: 0, x: 300 },
    animate: { opacity: 1, x: 0 },
  };
  console.log(projectsData);

  return (
    <Container>
      <main className={styles.Main}>
        {/* Loading spinner for when loading */}
        {isLoading && <LoadingSpinner />}
        {/* Error message when fetching data fails */}
        {error && <ErrorMessage error={error} />}
        {!isLoading && !error && projectsData && (
          <>
            <h1 className={styles.Heading}>{projectsData.title}</h1>
            <Row className="justify-content-center">
              <Col mx={12} lg={5}>
                {/* Image displayed on large screens */}
                <motion.img
                  initial={imageInitial}
                  animate={imageAnimate}
                  transition={{ duration: duration, delay: 1 }}
                  src={projectsData.image}
                  alt={projectsData.title}
                  className={`${styles.Image} d-none d-lg-block`}
                />
              </Col>
              <Col xs={12} lg={5}>
                <Row>
                  <Col xs={12}>
                    <motion.div
                      {...motionConfig}
                      transition={{ duration: duration, delay: 1 }}
                    >
                      <h6 className={styles.SubHeading}>Overview</h6>
                      <p className={styles.Text}>{projectsData.overview}</p>
                    </motion.div>
                    {/* Image displayed on small screens */}
                    <motion.img
                      initial={imageInitial}
                      animate={imageAnimate}
                      transition={{ duration: duration, delay: 3 }}
                      src={projectsData.image}
                      alt={projectsData.title}
                      className={`${styles.Image} d-block d-lg-none`}
                    />
                  </Col>
                </Row>
                <Row className="justify-content-center">
                  {/* Import technologies list */}
                  <motion.div
                    {...motionConfig}
                    transition={{ duration: duration, delay: techDelay }}
                  >
                    {/* <PortfolioProjectTechnologies
                      technologies={projectsData.technologies}
                    /> */}
                  </motion.div>
                </Row>
              </Col>
            </Row>
            {/* Import buttons for go back and view live site */}
            <PortfolioDetailButtons liveSite={projectsData.live_site} />
          </>
        )}
      </main>
    </Container>
  );
};

export default PortfolioDetailPage;
