import React from 'react';
import { motion } from 'framer-motion';
import animations from '../utils/animations';

function SingleProductPage() {
  return (
    <motion.div
      variants={animations}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      SingleProductPage
    </motion.div>
  );
}

export default SingleProductPage;
