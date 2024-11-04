import React from "react";
import { Link } from "react-router-dom";
import styles from "../../styles/NotFoundPage.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import NoResults from "../../images/404-error.png";
import CustomButton from "../../components/CustomButton";

const NotFoundPage = () => {
  return (
    <Container className={styles.Main}>
      <Row className="justify-content-center">
        <img
          className={styles.Image}
          src={NoResults}
          alt="No results icon"
        />
      </Row>
      <Row>
        <div>
          <h1 className={styles.Heading}>Oops!</h1>
          <p className={styles.Text}>
            The page you're looking for doesn't seem to exist. Click the
            link below to return to the homepage and learn more about Sam
            Scarisbrick.
          </p>
        </div>
      </Row>
      <Row>
        <div className="my-5">
          {/* Import component for the custom button which links to homepage */}
          <Link to="/">
            <CustomButton text="Homepage" />
          </Link>
        </div>
      </Row>
    </Container>
  );
};

export default NotFoundPage;
