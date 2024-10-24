import React from "react";
import styles from '../styles/Skills.module.css'

const Skills = () => {
  const frontendSkills = [
    "HTML",
    "CSS",
    "Bootstrap",
    "Tailwind CSS",
    "JavaScript",
    "React.JS",
  ];

  return (
    <div>
      <ul className={styles.SkillsList}>
        {frontendSkills.map((skill, index) => (
          <li className={styles.ListItems} key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;