import React from 'react';
import { motion } from 'framer-motion';
import animations from '../utils/animations';

function CheckoutPage() {
  return (
    <motion.div
      variants={animations}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      CheckoutPage
    </motion.div>
  );
}

export default CheckoutPage;
