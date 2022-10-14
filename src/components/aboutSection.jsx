import React from 'react';

import styled from 'styled-components';
import { motion } from 'framer-motion';
import {About, Description, Image, Hide} from '../styles';

import home1 from '../img/home1.png'

const AboutSection = () => {
    return (
        <About>
            <Description>
                <motion.div>
                    <Hide>
                        <motion.h2>
                            We work to make
                        </motion.h2>
                    </Hide>
                    <Hide>
                        <h2>
                            your <span>dreams</span> come 
                        </h2>
                    </Hide>
                    <Hide>
                        <h2>
                            true.
                        </h2>
                    </Hide>
                </motion.div>
                <p>Contact us for any photography or videography ideas you have, we have proffesionals with amazing skills.</p>
                <button>Contact Us</button>
            </Description>
            <Image>
            <img src={home1} alt="Guy with a camera" />
            </Image>
        </About>
    )
} 

export default AboutSection;