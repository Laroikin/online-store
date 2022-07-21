import React from 'react';
import { motion } from 'framer-motion';
import animations from '../utils/animations';

function CartPage() {
  return (
    <motion.div
      variants={animations}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      CartPage
    </motion.div>
  );
}

export default CartPage;
