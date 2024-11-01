import React, { useState, useEffect } from "react";
import styles from "../../styles/AboutPage.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Skills from "../../components/Skills";
import AboutPageText from "./AboutPageText";
import axios from "axios";

const AboutPage = () => {
  // State management for skills
  const [skillsData, setSkillsData] = useState({
    frontendSkills: [],
    backendSkills: [],
    toolsSkills: [],
  });

  // useEffect hook to fetch skills from api
  useEffect(() => {
    // Fetch the skills data from the API
    const fetchSkills = async () => {
      try {
        const { data } = await axios.get(
          "http://127.0.0.1:8000/api/technologies/"
        );
        console.log("API response data:", data);

        // Organize skills by skill_type
        const organizedSkills = {
          frontendSkills: data.results
            .filter((skill) => skill.skill_type === "Frontend")
            .map((skill) => skill.name),
          backendSkills: data.results
            .filter((skill) => skill.skill_type === "Backend")
            .map((skill) => skill.name),
          toolsSkills: data.results
            .filter((skill) => skill.skill_type === "Tools")
            .map((skill) => skill.name),
        };

        setSkillsData(organizedSkills);
      } catch (error) {
        console.error("Error fetching skills:", error);
      }
    };

    fetchSkills();
  }, []);

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
            <Skills skillsData={skillsData} skills="frontendSkills" />
            <h6 className={styles.SkillsHeading}>Backend:</h6>
            {/* important list of skills depending on prop passed */}
            <Skills skillsData={skillsData} skills="backendSkills" />
            <h6 className={styles.SkillsHeading}>Tools:</h6>
            {/* important list of skills depending on prop passed */}
            <Skills skillsData={skillsData} skills="toolsSkills" />
          </Col>
        </Row>
      </main>
    </Container>
  );
};

export default AboutPage;
