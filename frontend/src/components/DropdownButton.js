import React from "react";
import styles from "../styles/DropdownButton.module.css";
import Dropdown from "react-bootstrap/Dropdown";

// component to render dropdown button
const DropdownButton = ({
  uniqueTechs,
  selectedTechnology,
  setSelectedTechnology,
}) => {
  return (
    <>
      <Dropdown>
        <Dropdown.Toggle
          variant="success"
          id="dropdown-basic"
          className={styles.DropdownButton}
        >
          {selectedTechnology}
        </Dropdown.Toggle>

        <Dropdown.Menu className={styles.DropdownMenu}>
          {/* map over the technologies to select from */}
          {uniqueTechs.map((tech, index) => (
            <Dropdown.Item
              key={index}
              onClick={() => setSelectedTechnology(tech)}
              className={styles.DropdownItem}
            >
              {tech}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
};

export default DropdownButton;
