import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { pageAnimation } from '../animation';
import { motion } from 'framer-motion';

// image imports
import athlete from "../img/athlete-small.png";
import theracer from "../img/theracer-small.png";
import goodtimes from "../img/goodtimes-small.png";

function OurWork({movies}) {
  return (
    <Work as={motion.div} variants={pageAnimation} initial='hidden' animate='show' exit='exit' style={{background: "#fff"}}>
    {movies.map(mv => (
            <Movie key={mv.url}>
            <h2>{mv.title}</h2>
            <div className="line"></div>
            <Link to={mv.url}>
              <img src={mv.mainImg} alt="image of an athlete" />
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
    background-color: #cccccc;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;


export default OurWork;
