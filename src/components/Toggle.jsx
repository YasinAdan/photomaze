import React,  {useState} from 'react'
import { motion } from 'framer-motion';



export default function Toggle({children, title}) {
    const [faqToggle, setFaqToggle] = useState(false);

    const toggleFaq = () => {
      setFaqToggle(!faqToggle);
    }
  return (
    <motion.div layout className="question" onClick={() => setFaqToggle(!faqToggle)}>
    <motion.h4 layout>{title}</motion.h4>
    {faqToggle ?  children : ''}
    <div className="faq-line"></div>
    </motion.div>
  )
}
