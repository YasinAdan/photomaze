import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { pageAnimation, fade, photoAnimation, lineAnim, slider, sliderContainer } from "../animation";
import { motion } from "framer-motion";
import useScroll from "../components/useScroll";

// image imports
import athlete from "../img/athlete-small.png";
import theracer from "../img/theracer-small.png";
import goodtimes from "../img/goodtimes-small.png";

function OurWork({ movies }) {
  return (
    <Work
      as={motion.div}
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      style={{ background: "#fff" }}
    >
      <motion.div variants={sliderContainer}>
      <Frame1 variants={slider}></Frame1>
      <Frame2 variants={slider}></Frame2>
      <Frame3 variants={slider}></Frame3>
      <Frame4 variants={slider}></Frame4>
      </motion.div>
        
      {movies.map((mv) => (
        <Movie key={mv.url}>
          <motion.h2 variants={fade}>{mv.title}</motion.h2>
          <motion.div className="line" variants={lineAnim}></motion.div>
          <Link to={mv.url}>
            <Hide>
              <motion.img
                src={mv.mainImg}
                alt="image of an athlete"
                variants={photoAnimation}
              />
            </Hide>
          </Link>
        </Movie>
      ))}
    </Work>
  );
}

const Work = styled.div`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  h2 {
    padding: 1rem 0rem;
  }
`;
const Movie = styled.div`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background-color: #4bc8d4;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;

// Frame Animation
const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100vh;
  background: #fffebf;
  z-index: 2;
`;

const Frame2 = styled(Frame1)`
  background: #ff8efb;
`;

const Frame3 = styled(Frame1)`
  background: #8ed2ff;
`;

const Frame4 = styled(Frame1)`
  background: #8effa0;
`;

export default OurWork;
