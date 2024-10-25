import React, { useState } from "react";
import styles from "../../styles/PortfolioPage.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import DropdownButton from "../../components/DropdownButton";

// dummy data for projects model
const DUMMYPROJECTS = [
  {
    id: 1,
    image:
      "http://res.cloudinary.com/dc8vjzinx/image/upload/v1729409978/sef679uid011dfcawbpq.jpg",
    technologies: ["HTML", "JavaScript"],
    title: "title1 ipsum dolor sit amet, consectetuer adipiscin",
    summary:
      "test 1 ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec qu",
    overview:
      "test1 ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibu",
    github: "www.github.com",
    live_site: "http://www.tomcostincarpentry.co.uk",
    created_at: "25 Oct 2024",
  },
  {
    id: 2,
    image:
      "http://res.cloudinary.com/dc8vjzinx/image/upload/v1729409940/iigxwlkntv41dfei9od2.jpg",
    technologies: ["HTML"],
    title: "title2 ipsum dolor sit amet, consectetuer adipiscin",
    summary:
      "test 2 ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec qu",
    overview:
      "test 2 ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibu",
    github: "www.github.com",
    live_site: "http://www.skysports.com",
    created_at: "25 Oct 2024",
  },
  {
    id: 3,
    image:
      "http://res.cloudinary.com/dc8vjzinx/image/upload/v1729409919/hxhf2kheg9wezu5ilmnu.jpg",
    technologies: ["CSS", "HTML"],
    title: "title3 ipsum dolor sit amet, consectetuer adipiscin",
    summary:
      "test 3 ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec qu",
    overview:
      "test 3 ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibu",
    github: "www.github.com",
    live_site: "http://www.liverpoolfc.co.uk",
    created_at: "25 Oct 2024",
  },
  {
    id: 4,
    image:
      "http://res.cloudinary.com/dc8vjzinx/image/upload/v1729409875/bzsdvct1ozei94dkuv33.jpg",
    technologies: ["CSS", "JavaScript", "Python"],
    title: "title4 ipsum dolor sit amet, consectetuer adipiscin",
    summary:
      "test 4 ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec qu",
    overview:
      "test 4 ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibu",
    github: "www.github.com",
    live_site: "http://www.liverpoolfc.co.uk",
    created_at: "25 Oct 2024",
  },
  {
    id: 5,
    image:
      "http://res.cloudinary.com/dc8vjzinx/image/upload/v1729409978/sef679uid011dfcawbpq.jpg",
    technologies: ["HTML", "Python"],
    title: "title5 ipsum dolor sit amet, consectetuer adipiscin",
    summary:
      "test 5 ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec qu",
    overview:
      "test5 ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibu",
    github: "www.github.com",
    live_site: "http://www.tomcostincarpentry.co.uk",
    created_at: "25 Oct 2024",
  },
];
//  dummy data for technologies model
const DUMMYTECHS = [
  {
    id: 1,
    name: "HTML",
  },
  {
    id: 2,
    name: "CSS",
  },
  {
    id: 3,
    name: "JavaScript",
  },
  {
    id: 4,
    name: "Python",
  },
];

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
        <Row className={`${styles.ProjectList} justify-content-center`}>
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
                    <h6 className={styles.ProjectSubHeading}>
                      {project.title}
                    </h6>
                    <p className={styles.ProjectSummary}>{project.summary}</p>
                  </Col>
                </Row>
                <Row>
                  <h6 className={styles.ProjectSubHeading}>
                    Technologies Used:
                  </h6>
                  <ul className={styles.TechUsedList}>
                    {/* map over technologies array */}
                    {project.technologies.map((tech, index) => (
                      <li key={index} className={styles.TechUsedItems}>
                        {tech}
                      </li>
                    ))}
                  </ul>
                </Row>
              </div>
            </Col>
          ))}
        </Row>
      </main>
    </Container>
  );
};

export default PortfolioPage;
