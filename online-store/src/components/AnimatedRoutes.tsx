import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import {
  Home,
  About,
  Cart,
  Products,
  Error,
  Checkout,
  SingleProduct,
  // Private
} from '../pages';

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/Checkout" element={<Checkout />} />
        <Route path="/Protucts/:id" element={<SingleProduct />} />
        <Route path="*" element={<Error />} />
      </Routes>

    </AnimatePresence>
  );
}

export default AnimatedRoutes;
