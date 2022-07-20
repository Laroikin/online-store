import React from 'react';
// import Header from './components/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import {
  Home,
  About,
  Cart,
  Products,
  Error,
  Checkout,
  SingleProduct,
  // Private
} from './pages';
import { Navbar, Footer } from './components';

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/Checkout" element={<Checkout />} />
          <Route path="/Protucts/:id" element={<SingleProduct />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </ChakraProvider>
  );
}

export default App;
