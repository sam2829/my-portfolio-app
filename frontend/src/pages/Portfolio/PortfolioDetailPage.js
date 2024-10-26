import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import styles from "../../styles/PortfolioDetailPage.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { DUMMYPROJECTS } from "../../api/dummyData.js";
import PortfolioProjectTechnologies from "./PortfolioProjectTechnologies.js";
import CustomButton from "../../components/CustomButton.js";

//  component to project detail page
const PortfolioDetailPage = () => {
  // Extract the 'id' from the URL
  const { id } = useParams();
  const [project, setProject] = useState(null);

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
            <img
              src={project.image}
              alt={project.title}
              className={`${styles.Image} d-none d-lg-block`}
            />
          </Col>
          <Col xs={12}  lg={5}>
            <Row>
              <Col xs={12}>
                <h6 className={styles.SubHeading}>Overview</h6>
                <p className={styles.Text}>{project.overview}</p>
                {/* image on displayed in small screens */}
                <img
                  src={project.image}
                  alt={project.title}
                  className={`${styles.Image} d-block d-lg-none`}
                />
              </Col>
            </Row>
            <Row className="justify-content-center">
              {/* import technologies list */}
              <PortfolioProjectTechnologies
                technologies={project.technologies}
              />
            </Row>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col xs={12} lg={5}>
            <div className="pt-5">
              {/* import custom button and change text */}

              <a
                href={project.live_site}
                target="_blank"
                rel="noopener noreferrer"
              >
                <CustomButton text="View Live Site" />
              </a>
            </div>
          </Col>
          <Col xs={12} lg={5}>
            <div className="pt-5">
              {/* import custom button and change text */}
              <Link to="/portfolio">
                <CustomButton text="Go Back" />
              </Link>
            </div>
          </Col>
        </Row>
      </main>
    </Container>
  );
};

export default PortfolioDetailPage;
