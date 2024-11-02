import React from "react";
import styles from "../../styles/AboutPage.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Skills from "../../components/Skills";
import AboutPageText from "./AboutPageText";
import useFetchTechnologies from "../../hooks/useFetchTechnologies";

const AboutPage = () => {
  // custom hook to fetch technologies
  const { skillsData, isLoading, error } = useFetchTechnologies();

  return (
    <Container>
      <main className={styles.Main}>
        <Row>
          <h1 className={styles.Heading}>Sam Scarisbrick</h1>
        </Row>
        {/* Row for subheadings */}
        <Row className="justify-content-center">
          <Col xs={12} lg={5} className="mx-auto">
            <h3 className={styles.SubHeading}>About Me</h3>
          </Col>
          <Col xs={12} lg={5} className="mx-auto">
            <h3 className={`${styles.SubHeading} d-none d-lg-block`}>
              My Skills
            </h3>
          </Col>
        </Row>
        <Row className="justify-content-center">
          {/* column for about me text */}
          <Col xs={12} lg={5} className={`${styles.TextColumn} mx-auto`}>
            {/* Import About me page text */}
            <AboutPageText />
          </Col>
          <Col xs={12} lg={5} className="mx-auto">
            {/* column for listing my skils */}
            <h3 className={`${styles.SubHeading} d-block d-lg-none`}>
              My Skills
            </h3>
            <h6 className={styles.SkillsHeading}>Frontend:</h6>
            {/* important list of skills depending on prop passed */}
            <Skills
              skillsData={skillsData}
              isLoading={isLoading}
              error={error}
              skills="frontendSkills"
            />
            <h6 className={styles.SkillsHeading}>Backend:</h6>
            {/* important list of skills depending on prop passed */}
            <Skills
              skillsData={skillsData}
              isLoading={isLoading}
              error={error}
              skills="backendSkills"
            />
            <h6 className={styles.SkillsHeading}>Tools:</h6>
            {/* important list of skills depending on prop passed */}
            <Skills
              skillsData={skillsData}
              isLoading={isLoading}
              error={error}
              skills="toolsSkills"
            />
          </Col>
        </Row>
      </main>
    </Container>
  );
};

export default AboutPage;
