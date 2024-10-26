import React, { useState } from "react";
import styles from "../../styles/PortfolioPage.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import DropdownButton from "../../components/DropdownButton";
import PortfolioProjectList from "./PortfolioProjectList";
import {DUMMYPROJECTS, DUMMYTECHS} from '../../api/dummyData.js'


// component to render the portfolio page
const PortfolioPage = () => {
  // use state to select the technology
  const [selectedTechnology, setSelectedTechnology] = useState("All");

  // Get list of unnique technologies to select
  const uniqueTechs = ["All", ...new Set(DUMMYTECHS.map((tech) => tech.name))];

  // Filter projects based on selected technology
  const filteredProjects =
    selectedTechnology === "All"
      ? DUMMYPROJECTS
      : DUMMYPROJECTS.filter((project) =>
          project.technologies.includes(selectedTechnology)
        );

  return (
    <Container>
      <main className={styles.Main}>
        <Row>
          <h1 className={styles.Heading}>Portfolio</h1>
        </Row>
        <Row className="justify-content-center">
          <Col xs={12} md={8}>
            <p className={styles.Text}>
              Welcome to my portfolio! Here you'll find a slection of projects
              that demonstrate my skills in web development. I'm passionate
              about creating functional ans aesthetically pleasing applications.
            </p>
          </Col>
        </Row>
        <Row>
          {/* import dropdown Button */}
          <DropdownButton
            uniqueTechs={uniqueTechs}
            selectedTechnology={selectedTechnology}
            setSelectedTechnology={setSelectedTechnology}
          />
        </Row>
        {/* dummy run to display projects */}
        {/* import portfolio projects */}
        <PortfolioProjectList
          key={selectedTechnology}
          filteredProjects={filteredProjects}
        />
      </main>
    </Container>
  );
};

export default PortfolioPage;
