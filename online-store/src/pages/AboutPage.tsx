import React from 'react';
import { motion } from 'framer-motion';
import animations from '../utils/animations';

function AboutPage() {
  return (
    <motion.div
      variants={animations}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div>AboutPage</div>
    </motion.div>
  );
}

export default AboutPage;
