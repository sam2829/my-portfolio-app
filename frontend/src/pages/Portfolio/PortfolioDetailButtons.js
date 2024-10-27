import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CustomButton from "../../components/CustomButton.js";

// component to render buttons for portfolio detail page
const PortfolioDetailButtons = ({ liveSite }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 2, delay: 7 }}
    >
      <Row className="justify-content-center">
        <Col xs={12} lg={5}>
          <div className="pt-5">
            {/* import custom button and change text */}
            <a href={liveSite} target="_blank" rel="noopener noreferrer">
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
    </motion.div>
  );
};

export default PortfolioDetailButtons;