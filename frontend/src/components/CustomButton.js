import React from 'react'
import Button from "react-bootstrap/Button";
import styles from '../styles/CustomButton.module.css'

const CustomButton = ({text}) => {
  return (
    <Button className={styles.Button}>{text}</Button>
  )
}

export default CustomButton