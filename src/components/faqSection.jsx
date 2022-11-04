import React, { useState } from "react";
import styled from "styled-components";
import { LayoutGroup } from "framer-motion";
import Toggle from "./Toggle";
import useScroll from "./useScroll";
import { scrollReveal } from "../animation";
import { motion } from "framer-motion";

import { About } from "../styles";

const FaqSection = () => {
  const [ref, controls] = useScroll();
  return (
    <Faq ref={ref} animate={controls}>
      <motion.div variants={scrollReveal}>
        <h2>
          Any Questions <span>FAQ</span>
        </h2>
        <LayoutGroup>
          <Toggle title="How do I start">
            <div className="answer">
              <p>Lorem ipsum dolor sit</p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Accusantium, aspernatur.
              </p>
            </div>
          </Toggle>
          <Toggle title="Daily schedule">
            <div className="answer">
              <p>Lorem ipsum dolor sit</p>

              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Accusantium, aspernatur.
              </p>
            </div>
          </Toggle>
          <Toggle title="Payment methods">
            <div className="answer">
              <p>Lorem ipsum dolor sit</p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Accusantium, aspernatur.
              </p>
            </div>
          </Toggle>
          <Toggle title="Videography pricing">
            <div className="answer">
              <p>Lorem ipsum dolor sit</p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Accusantium, aspernatur.
              </p>
            </div>
          </Toggle>
        </LayoutGroup>
      </motion.div>
    </Faq>
  );
};

const Faq = styled(About)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }

  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;

// const FagC = styled(motion.div)``;

export default FaqSection;
