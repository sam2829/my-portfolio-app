import React from "react";
import styles from "../../styles/PortfolioProjectList.module.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PortfolioProjectTechnologies from "./PortfolioProjectTechnologies";
import PortfolioProjectIcons from "./PortfolioProjectIcons";

// component to import projects to portfolio
const PortfolioProjectList = ({ filteredProjects }) => {
  return (
    <>
      <Row className={`${styles.ProjectList} justify-content-center`}>
        {/* map over the filtered projects */}
        {filteredProjects.map((project) => (
          <Col key={project.id} xs={12} md={6} lg={4}>
            <div className={styles.ProjectItem}>
              <Row>
                <Col xs={12}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className={styles.Image}
                  />
                </Col>
                <Col xs={12}>
                  <h6 className={styles.ProjectSubHeading}>{project.title}</h6>
                  <p className={styles.ProjectSummary}>{project.summary}</p>
                </Col>
              </Row>
              <Row>
                {/* import the list of technologies used in project */}
                <PortfolioProjectTechnologies
                  technologies={project.technologies}
                />
              </Row>
              {/* import links for github and livesite */}
              <Row className="justify-content-center mb-4 mt-3">
                <Col xs={3}>
                {/* import github icon */}
                  <PortfolioProjectIcons
                    link={project.github}
                    message="View on GitHub"
                    icon="fa-brands fa-github"
                  />
                </Col>
                <Col xs={3}>
                {/* import live site icon */}
                  <PortfolioProjectIcons
                    link={project.live_site}
                    message="Viw on live site"
                    icon="fas fa-external-link-alt"
                  />
                </Col>
              </Row>
            </div>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default PortfolioProjectList;
