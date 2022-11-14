import React from "react";
import { pageAnimation, titleAnimation } from "../animation";
import { motion, useScroll } from "framer-motion";
import styled from "styled-components";
import ScrollTop from "../components/ScrollTop";

function Contact() {
  return (
    <ContactStyle
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      style={{ background: "#fff" }}
    >
      <Title>
        <Hide>
          <motion.h2 variants={titleAnimation}>Get in touch.</motion.h2>
        </Hide>
      </Title>
      <Hide>
        <Social variants={titleAnimation}>
          <Circle />
          <h2>Send Us a Message</h2>
        </Social>
      </Hide>
      <Hide>
        <Social variants={titleAnimation}>
          <Circle />
          <h2>Socials</h2>
        </Social>
      </Hide>
      <Hide>
        <Social variants={titleAnimation}>
          <Circle />
          <h2>Drop an email</h2>
        </Social>
      </Hide>
      <ScrollTop />
    </ContactStyle>
  );
}

const ContactStyle = styled(motion.div)`
  padding: 5rem 10rem;
  color: #353535;
  min-height: 90vh;

  @media (max-width: 1300px) {
    padding: 2rem 2rem;
    font-size: 0.5rem;
  }
`;

const Title = styled.div`
  margin-top: 4rem;
  color: black;
`;

const Hide = styled.div`
  overflow: hidden;
`;

const Circle = styled.div`
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  background: #353535;

  @media (max-width: 1300px) {
    display: none;
  }
`;

const Social = styled(motion.div)`
  display: flex;
  align-items: center;
  h2 {
    margin: 2rem;
  }

  @media (max-width: 1300px) {
    margin-top: 3rem;
    h2 {
      margin-left: 0;
      font-size: 2rem;
    }
  }
`;

export default Contact;
