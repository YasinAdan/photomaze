import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { pageAnimation } from './animation';
import { motion, useScroll } from 'framer-motion';

function MovieDetail({ movies, movie, setMovie }) {
  const location = useLocation();
  const url = location.pathname;

  useEffect(() => {
    const currentMovie = movies.filter((mv) => mv.url === url);
    setMovie(currentMovie[0]);
  }, [movies, url]);
  return (
    <>
      {movie && (
        <Details as={motion.div} variants={pageAnimation} initial='hidden' animate='show' exit='exit'>
          <Headline>
            <h2>{movie.title}</h2>
            <img src={movie.mainImg} alt="movie" />
          </Headline>
          <Awards>
            {movie.awards.map((award) => (
                <Award key={award.title}>
                  <h3>{award.title}</h3>
                  <div className="line"></div>
                  <p>{award.description}</p>
                </Award>
            ))}
          </Awards>
          <ImageDisplay>
            <img src={movie.secondaryImg} alt="image" />
          </ImageDisplay>
        </Details>
      )}
    </>
  );
}

const Details = styled.div`
  color: white;
`;
const Headline = styled.div`
  min-height: 90vh;
  padding-top: 20vh;
  position: relative;

  h2 {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -10%);
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

const Awards =  styled.div`
  min-height: 80vh;
  display: flex;
  margin: 5rem 10rem;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 1500px) {
    display: block;
    margin: 2rem 2rem;
  }
`;
const Award =  styled.div`
  padding: 5rem;
  h3 {
    font-size: 2rem;
  }
  .line {
    width: 50%;
    background: #23d997;
    height: 0.5rem;
    margin: 1rem 0rem;
  }
  p {
    padding: 2rem 0rem;
  }
`;

const ImageDisplay = styled.div`
  min-height: 50vh;
  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
`;

export default MovieDetail;
