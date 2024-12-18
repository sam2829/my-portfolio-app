import React from "react";
import styles from "../../styles/PortfolioProjectTechnologies.module.css";

// component to map over technologies for projects
const PortfolioProjectTechnologies = ({ technologies }) => {
  return (
    <>
      <h6 className={styles.ProjectSubHeading}>Technologies Used:</h6>
      <ul className={styles.TechUsedList}>
        {/* map over technologies array, check that is in an array 
        first so doesnt render before fetching data */}
        {Array.isArray(technologies) &&
          technologies.map((tech, index) => (
            <li key={index} className={styles.TechUsedItems}>
              {tech}
            </li>
          ))}
      </ul>
    </>
  );
};

export default PortfolioProjectTechnologies;
