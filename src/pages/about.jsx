import React from 'react';
// component imports
import AboutUS from '../components/AboutSection'
import Services from '../components/ServicesSection'
import FaqSection from './../components/FaqSection';
import { motion, useScroll } from 'framer-motion';
import { Progress } from '../styles';


const AboutPage =  () => {
    const { scrollYProgress } = useScroll();
    return (
        <>
        <AboutUS />
        <Services />
        <FaqSection />
        <Progress as={motion.div} style={{scaleX: scrollYProgress}} />  
    </>
    )
}


export default AboutPage;