import React, { useEffect, useMemo } from "react";
import { motion, useAnimation } from "framer-motion";
import styles from "../styles/Skills.module.css";
import LoadingSpinner from "./LoadingSpinner";
import ErrorMessage from "./ErrorMessage";

//  component to render list of skills
const Skills = ({ skillsData, isLoading, error, skills }) => {
  
  // Varibale to start animation
  const controls = useAnimation();
  // Determine which skills list to render based on the prop value
  const skillsList = useMemo(
    () => skillsData[skills] || [],
    [skillsData, skills]
  );
  // Variable to delay when lists are displayed
  const delay =
    skills === "frontendSkills" ? 1 : skills === "backendSkills" ? 3 : 5;

  // use effect hook t start animation when skills list is fetched
  useEffect(() => {
    if (skillsList.length > 0) {
      controls.start("visible");
    }
  }, [skillsList, controls]);

  return (
    <div className={styles.SkillsContainer}>
      {/* Loading info */}
      {isLoading && <LoadingSpinner />}
      {/* Failed fetching technologies */}
      {error && <ErrorMessage error={error} />}
      {/* Use motion.ul to create animation for ul components */}
      {/* only render skills if list is greater than 0 */}
      {skillsList.length > 0 ? (
        <motion.ul
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { transition: { staggerChildren: 0.2 } },
            visible: {
              transition: { staggerChildren: 0.2, delayChildren: delay },
            },
          }}
          className={styles.SkillsList}
        >
          {skillsList.map((skill, index) => (
            // Use motion.li to create animation for li components
            <motion.li
              key={index}
              variants={{
                hidden: { opacity: 0, scale: 0.5 },
                visible: { opacity: 1, scale: [0.5, 1.5, 1] },
              }}
              transition={{ type: "spring" }}
              className={styles.ListItems}
            >
              {skill}
            </motion.li>
          ))}
        </motion.ul>
      ) : (
        // message is there are no skills for this section
        !isLoading &&
        !error && (
          <p className={styles.Text}>No Skills for this skill type.... yet!</p>
        )
      )}
    </div>
  );
};

export default Skills;
