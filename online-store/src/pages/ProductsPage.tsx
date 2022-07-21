import React from 'react';
import { motion } from 'framer-motion';
import animations from '../utils/animations';

function ProductsPage() {
  return (
    <motion.div
      variants={animations}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      ProductsPage
    </motion.div>
  );
}

export default ProductsPage;
