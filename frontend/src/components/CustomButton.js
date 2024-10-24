import React from "react";
import { motion } from "framer-motion";
import styles from "../styles/CustomButton.module.css";

const CustomButton = ({ text }) => {
  return (
    // use motion framer to animate custom button
    <motion.button
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 100 }}
      className={styles.Button}
    >
      {text}
    </motion.button>
  );
};

export default CustomButton;
