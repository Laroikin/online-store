import React, { useEffect } from 'react';
// import Header from './components/Header';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import { useColorMode } from '@chakra-ui/react';
import { Navbar, Footer, AnimatedRoutes } from './components';

function App() {
  const { colorMode } = useColorMode();

  useEffect(() => {
    console.log(colorMode);
    document
      .querySelector('body')
      ?.classList.toggle('dark', colorMode === 'dark');
  }, [colorMode]);

  return (
    <Router>
      <Navbar />
      <AnimatedRoutes />
      <Footer />
    </Router>
  );
}

export default App;
