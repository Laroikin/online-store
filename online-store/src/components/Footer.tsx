import React from 'react';
import { Link } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';

function Footer() {
  return (
    <div className="mt-auto w-full bg-gray-100 border-t-[1px] text-sm border-gray-200 dark:border-slate-800 text-black dark:bg-slate-900/75 saturate-100 backdrop-blur-[8px] dark:text-white flex justify-center">
      <footer className="max-w-[1440px] w-full flex p-5 justify-between items-center gap-1">
        <div className="text-gray-500 dark:text-gray-400">Deployed on Netlify</div>
        <div className="text-black dark:text-white">Made by Laroikin with ❤️</div>
        <Link isExternal appearance="button" className="flex items-center" href="https://github.com/Laroikin">
          Check my GitHub
          <ExternalLinkIcon ml="1" />
        </Link>
      </footer>
    </div>
  );
}

export default Footer;
