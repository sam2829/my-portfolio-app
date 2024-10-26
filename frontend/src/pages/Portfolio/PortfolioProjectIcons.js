import React from "react";
import styles from '../../styles/PortfolioProjectIcons.module.css'
import { OverlayTrigger, Tooltip } from "react-bootstrap";

// component to render icons for projects
const PortfolioProjectIcons = ({link, message, icon}) => {
  return (
    <OverlayTrigger placement="top" overlay={<Tooltip>{message}</Tooltip>}>
      <a
        href={link}
        className={styles.Link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className={icon}></i>
      </a>
    </OverlayTrigger>
  );
};

export default PortfolioProjectIcons;