import React from 'react';
import { Link, Button, Image } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';

function Footer() {
  return (
    <div className="mt-auto w-full bg-gray-100 border-t-[1px] text-sm border-gray-200 dark:border-slate-800 text-black dark:bg-slate-900/75 saturate-100 backdrop-blur-[8px] dark:text-white flex justify-center">
      <footer className="max-w-[1440px] w-full flex p-5 justify-between items-center gap-5 flex-col-reverse sm:grid-cols-3 md:grid sm:justify-items-center">
        <Link href="https://rs.school/js" className="justify-self-start">
          <Image
            src="https://rs.school/images/rs_school.svg"
            className="w-24 dark:invert"
          />
        </Link>
        <div className="text-black dark:text-white">
          Made by Laroikin with ❤️
        </div>
        <Link
          isExternal
          appearance="button"
          className="flex items-center justify-self-end"
          href="https://github.com/Laroikin"
        >
          <Button
            variant="outline"
            className="!font-normal !bg-white dark:!bg-black"
          >
            Check my GitHub
            <ExternalLinkIcon ml="1" />
          </Button>
        </Link>
      </footer>
    </div>
  );
}

export default Footer;
