import React from 'react';
// component imports
import AboutUS from '../components/AboutSection'
import Services from '../components/ServicesSection'
import FaqSection from './../components/FaqSection';
import { Progress } from '../styles';
import { pageAnimation } from '../animation';
import { motion, useScroll } from 'framer-motion';
import ScrollTop from '../components/ScrollTop';

const AboutPage =  () => {
    const { scrollYProgress } = useScroll();
    return (
        <motion.div variants={pageAnimation} initial='hidden' animate='show' exit='exit'>
        <AboutUS />
        <Services />
        <FaqSection />
        <Progress as={motion.div} style={{scaleX: scrollYProgress}}/>
        <ScrollTop  />
    </motion.div>
    )
}


export default AboutPage;