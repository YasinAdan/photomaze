import React, {useEffect} from "react";

import styled from "styled-components";
import { motion } from "framer-motion";
import { About, Description, Image, Hide } from "../styles";
import { titleAnimation, fade, photoAnimation } from "../animation";


import home1 from "../img/home1.png";
import { Wave } from "./Wave";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <motion.div>
          <Hide>
            <motion.h2 variants={titleAnimation}>We work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnimation}>
              your <span>dreams</span> come
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnimation}>true.</motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fade}>
          Contact us for any photography or videography ideas that you have. We
          have professionals with amazing skills to help you achieve it.
        </motion.p>
        <motion.button variants={fade}>Contact Us</motion.button>
      </Description>
      <Image>
        <motion.img src={home1} alt="Guy with a camera" variants={photoAnimation} initial="hidden" animate="show"/>
      </Image>
      <Wave />
    </About>
  );
};

export default AboutSection;
