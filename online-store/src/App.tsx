import React, { useEffect } from 'react';
// import Header from './components/Header';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import { useColorMode } from '@chakra-ui/react';
import { ParallaxProvider } from 'react-scroll-parallax';
import { Navbar, Footer } from './components';
import AnimatedRoutes from './components/AnimatedRoutes';

function App() {
  const { colorMode } = useColorMode();

  useEffect(() => {
    document
      .querySelector('body')
      ?.classList.toggle('dark', colorMode === 'dark');
  }, [colorMode]);

  return (
    <Router>
      <ParallaxProvider>
        <Navbar />
        <AnimatedRoutes />
        <Footer />
      </ParallaxProvider>
    </Router>
  );
}

export default App;
