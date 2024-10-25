import React from "react";
import { motion } from "framer-motion";
import styles from "../styles/Skills.module.css";

//  component to render list of skills
const Skills = ({ skills }) => {
  const frontendSkills = [
    "HTML",
    "CSS",
    "Bootstrap",
    "Tailwind CSS",
    "JavaScript",
    "React.JS",
  ];

  const backendSkills = ["Python", "Django", "Django Rest"];

  const toolsSkills = ["Git", "GitHub", "Heroku", "Cloudinary", "Cloudfare"];

  // Determine which skills list to render based on the prop value
  let skillsList;
  let delay = 0; // Default delay

  switch (skills) {
    case "frontendSkills":
      skillsList = frontendSkills;
      delay = 0;
      break;
    case "backendSkills":
      skillsList = backendSkills;
      delay = 1.5;
      break;
    case "toolsSkills":
      skillsList = toolsSkills;
      delay = 3;
      break;
    default:
      skillsList = [];
  }

  return (
    <div>
      {/* use motion.ul to create animation for ul components */}
      <motion.ul
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { transition: { staggerChildren: 0.2 } },
          visible: {
            transition: { staggerChildren: 0.2, delayChildren: delay },
          },
        }}
        className={styles.SkillsList}
      >
        {skillsList.map((skill, index) => (
          // use motion.li to create animation for li components
          <motion.li
            variants={{
              hidden: { opacity: 0, scale: 0.5 },
              visible: { opacity: 1, scale: [0.8, 1.3, 1] },
            }}
            transition={{ type: "spring" }}
            className={styles.ListItems}
            key={index}
          >
            {skill}
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};

export default Skills;
