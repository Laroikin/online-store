import React from 'react';
import { motion } from 'framer-motion';
import { ParallaxBanner } from 'react-scroll-parallax';
import animations from '../utils/animations';

function HomePage() {
  return (
    <motion.div
      variants={animations}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <h1>HomePage</h1>
      <div className="h-[300vh] pt-60 px-96">
        <ParallaxBanner
          layers={[
            {
              speed: -15,
              image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/105988/banner.jpg',
            },
          ]}
          className="aspect-[2/1]"
        />
      </div>
    </motion.div>
  );
}

export default HomePage;
