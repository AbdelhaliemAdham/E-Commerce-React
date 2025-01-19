import React, { useEffect } from "react";
import { Container, Row, Col, CardImg, Button } from "react-bootstrap";
import classes from "../Modules/About.module.css";
import Image from "../assets/abdo.png";
import { useContext } from "react";
import { ThemeContext } from "../store/ThemeContext";
import { IconButton } from "@mui/material";
import GitHub from "@mui/icons-material/GitHub";
function AboutComponent() {
  const { darkMode } = useContext(ThemeContext);
  useEffect(() => {
    if (darkMode) {
      document.body.style.backgroundColor = "#212529";
      document.body.style.color = "#fff";
    } else {
      document.body.style.backgroundColor = "#fff";
      document.body.style.color = "#212529";
    }
  }, [darkMode]);

  function handleGithubClick() {
    window.location.href = "http://github.com/AbdelhaliemAdham";
  }
  return (
    <Container className={classes.aboutContainer}>
      <Col>
        <h1 className={classes.aboutTitle}>About Me</h1>
        <Row>
          <Col>
            <h1>So,Who am I ? </h1>
            <h3 className={classes.aboutSubTitle}>
              Software Developer with a solid foundation in React.js, Next.js,
              and Flutter. Eager to apply my knowledge and innovative mindset to
              develop impactful web and mobile applications. Seeking an
              entry-level position where I can contribute to a dynamic team
              while continuing to grow my skills and knowledge in software
              development.
            </h3>
            <Button className={classes.contactButton}>
              <a href="http://mailto:abdo09adham@gmail.com">Contact Me</a>
            </Button>
            <IconButton className={"ms-2"} onClick={handleGithubClick}>
              <GitHub color={`${!darkMode ? undefined : "primary"}`} />
            </IconButton>
          </Col>
          <CardImg src={Image} className={classes.cardImage} />
        </Row>
      </Col>
    </Container>
  );
}

export default AboutComponent;
