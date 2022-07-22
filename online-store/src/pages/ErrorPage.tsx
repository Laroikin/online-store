import React from 'react';
import { Link } from 'react-router-dom';
import { Text, Heading, Button } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import animations from '../utils/animations';

function ErrorPage() {
  return (
    <motion.div
      variants={animations}
      initial="initial"
      animate="animate"
      exit="exit"
      className="h-[calc(100vh-12rem)] flex justify-center items-center px-5"
    >
      <div className="flex justify-center items-center flex-col">
        <Heading className="!text-9xl !font-black bg-gradient-to-r bg-clip-text text-transparent from-indigo-500 via-purple-500 to-pink-500 drop-shadow-2xl">
          404
        </Heading>
        <Heading size="lg" className="mt-10">
          Page not found
        </Heading>
        <Text className="mt-6 text-center !text-sm">
          The requested page doesn&apos;t exist or you don&apos;t have access to
          it.
        </Text>
        <Link to="/">
          <Button className="mt-10">Back Home</Button>
        </Link>
      </div>
    </motion.div>
  );
}

export default ErrorPage;
