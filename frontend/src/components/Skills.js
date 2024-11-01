import React from "react";
import { motion } from "framer-motion";
import styles from "../styles/Skills.module.css";

//  component to render list of skills
const Skills = ({ skillsData, skills }) => {
  // Determine which skills list to render based on the prop value
  const skillsList = skillsData[skills] || [];
  const delay =
    skills === "frontendSkills" ? 5 : skills === "backendSkills" ? 7 : 12;

  // const frontendSkills = [
  //   "HTML",
  //   "CSS",
  //   "Bootstrap",
  //   "Tailwind CSS",
  //   "JavaScript",
  //   "React.JS",
  // ];

  // const backendSkills = ["Python", "Django", "Django Rest"];

  // const toolsSkills = ["Git", "GitHub", "Heroku", "Cloudinary", "Cloudfare"];

  // Determine which skills list to render based on the prop value
  // let skillsList;
  // let delay = 0;

  // switch (skills) {
  //   case "frontendSkills":
  //     skillsList = frontendSkills;
  //     delay = 1;
  //     break;
  //   case "backendSkills":
  //     skillsList = backendSkills;
  //     delay = 3;
  //     break;
  //   case "toolsSkills":
  //     skillsList = toolsSkills;
  //     delay = 4;
  //     break;
  //   default:
  //     skillsList = [];
  // }

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
        {skillsList.length &&
          skillsList.map((skill, index) => (
            // use motion.li to create animation for li components
            <motion.li
              key={index}
              variants={{
                hidden: { opacity: 0, scale: 0.5 },
                visible: { opacity: 1, scale: [0.8, 5, 1] },
              }}
              transition={{ type: "spring" }}
              className={styles.ListItems}
            >
              {skill}
            </motion.li>
          ))}
        {!skillsList.length && <p>No Skills....</p>}
      </motion.ul>
    </div>
  );
};

export default Skills;
