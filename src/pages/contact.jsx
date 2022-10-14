import React from 'react';
import { pageAnimation } from '../animation';
import { motion, useScroll } from 'framer-motion';

function Contact() {
  return (
    <motion.div variants={pageAnimation} initial='hidden' animate='show' exit='exit' style={{background: "#fff"}}>
    <h1>Our contact</h1>
    </motion.div>
  )
}

export default Contact