import React, { useState } from "react";
import styles from "../../styles/PortfolioPage.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import DropdownButton from "../../components/DropdownButton";
import PortfolioProjectList from "./PortfolioProjectList";
import useFetchPortfolioProjects from "../../hooks/useFetchPortfolioProjects.js";
import LoadingSpinner from "../../components/LoadingSpinner.js";
import ErrorMessage from "../../components/ErrorMessage.js";

// component to render the portfolio page
const PortfolioPage = () => {
  // custom hook to fetch projects
  const { projectsData, isLoading, error } = useFetchPortfolioProjects();

  // use state to select the technology
  const [selectedTechnology, setSelectedTechnology] = useState("All");

  // Get list of unnique technologies to select
  const uniqueTechs = [
    "All",
    ...[
      ...new Set(projectsData.flatMap((project) => project.technologies)),
    ].sort(),
  ];

  // Filter projects based on selected technology
  const filteredProjects =
    selectedTechnology === "All"
      ? projectsData
      : projectsData.filter((project) =>
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
        {/* Import loading spinner when fetching data */}
        {isLoading && <LoadingSpinner />}
        {/* Import error message if fetch failed */}
        {error && <ErrorMessage error={error} />}
        {/* import portfolio projects */}
        {filteredProjects.length > 0 && (
          <PortfolioProjectList
            key={selectedTechnology}
            filteredProjects={filteredProjects}
          />
        )}
        {/* import message if not projects available */}
        {!isLoading && !error && (
          <p className={styles.Text}>
            No projects for this skill type.... yet!
          </p>
        )}
      </main>
    </Container>
  );
};

export default PortfolioPage;
