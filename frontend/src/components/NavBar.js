import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import styles from "../styles/NavBar.module.css";
import useClickOutsideToggle from "../hooks/useClickOutsideToggle";
import NavBarNavLink from "./NavBarNavLink";
import logoImage from '../images/thumbnail.jpg'

// Component for rendering Navbar
const NavBar = () => {
  // This is so we can toggle the hamburger menu
  const { expanded, setExpanded, ref } = useClickOutsideToggle();

  return (
    <>
      {/* Use framer motion to slowly make the nabar appear */}
      <motion.nav
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 200,
        }}
      >
        <Navbar
          expanded={expanded}
          collapseOnSelect
          expand="lg"
          className={styles.NavBar}
          fixed="top"
        >
          <Container>
            <Navbar.Brand className={`px-4 ${styles.Logo}`}>
              <Link to="/" className={styles.Link}>
                <img
                  className={styles.Image}
                  src={logoImage}
                  alt="Sam Scarisbrick"
                />
                <div className={styles.textContainer}>
                  <span className={styles.name}>Sam</span>
                  <span className={styles.name}>Scarisbrick</span>
                </div>
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle
              ref={ref}
              onClick={() => setExpanded(!expanded)}
              aria-controls="responsive-navbar-nav"
              className={styles.MenuIcon}
            ></Navbar.Toggle>
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className={`ms-auto ${styles.navLinks}`}>
                {/** Nav Links in Navbar */}
                <NavBarNavLink title="Home" to="/" />
                <NavBarNavLink title="About" to="/about" />
                <NavBarNavLink title="Portfolio" to="/portfolio" />
                <NavBarNavLink title="Contact" to="/contact" />
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </motion.nav>
    </>
  );
};

export default NavBar;
