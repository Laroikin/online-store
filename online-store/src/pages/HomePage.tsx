import React from 'react';
import { motion } from 'framer-motion';
import { ParallaxBanner, Parallax } from 'react-scroll-parallax';
import animations from '../utils/animations';
import { Section } from '../components';

function HomePage() {
  return (
    <motion.div
      variants={animations}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <h1>HomePage</h1>
      <div className="h-[300vh] flex flex-col items-center">
        <div className="pt-32 pb-32 w-[32rem]">
          <Parallax speed={-15}>
            <ParallaxBanner
              layers={[
                {
                  speed: -15,
                  image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/105988/banner.jpg',
                },
              ]}
              className="aspect-[2/1] shadow-2xl rounded-lg border-[1px] dark:border-slate-600 border-slate-200"
            />
          </Parallax>
        </div>
        <Section className="bg-gray-50 text-black shadow-2xl h-36">Test</Section>
      </div>
    </motion.div>
  );
}

export default HomePage;
