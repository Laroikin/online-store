import React, { useEffect, useState } from 'react';
import { BsCart2 } from 'react-icons/bs';
import {
  Text,
  Button,
  useColorMode,
  Collapse,
  useDisclosure,
  Stack,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import {
  MoonIcon, SunIcon, HamburgerIcon, CloseIcon,
} from '@chakra-ui/icons';
import cn from 'classnames';
import logo from '../assets/images/logo.svg';

interface ILinkList {
  name: string;
  href: string;
}

const linkList: ILinkList[] = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'About',
    href: '/About',
  },
  {
    name: 'Products',
    href: '/Products',
  },
];

function Header() {
  const { isOpen, onToggle } = useDisclosure();
  const [isScrolled, setIsScrolled] = useState(false);
  const { colorMode, toggleColorMode } = useColorMode();

  useEffect(() => {
    if (isOpen) document.querySelector('body')?.classList.add('nav-open');
    if (!isOpen) document.querySelector('body')?.classList.remove('nav-open');
  }, [isOpen]);

  function changeScroll() {
    if (window.innerWidth >= 768) {
      document.querySelector('body')?.classList.remove('nav-open');
      if (isOpen) onToggle();
    }
  }

  const changeHeader = () => {
    if (window.scrollY >= 25) {
      setIsScrolled(true);
    } else setIsScrolled(false);
  };

  window.addEventListener('resize', changeScroll);
  window.addEventListener('scroll', changeHeader);

  return (
    <header
      className={cn(
        'fixed z-50 w-full !transition-colors !duration-200 !ease-in-out p-5 bg-transparent border-transparent saturate-100 top-0',
        {
          'dark:bg-slate-900/75 bg-white/75 backdrop:saturate-100 dark:border-slate-800  backdrop-blur-[8px] border-b-[1px] border-gray-600/10':
            isScrolled,
          'bg-white dark:bg-slate-900': isOpen,
        },
      )}
    >
      <div className="mx-auto max-w-[1440px] flex md:grid md:grid-cols-3 justify-between items-center">
        <RouterLink to="/" className="flex">
          <img src={logo} className="w-5 dark:invert mr-2" alt="store logo" />
          <Text className="dark:text-white text-black font-bold text-lg">
            Laroikin Store
          </Text>
        </RouterLink>
        <div className="hidden md:flex items-center justify-center gap-8">
          {linkList.map((link) => (
            <RouterLink
              className="transition-colors ease-in-out text-black/40 hover:text-black duration-200 dark:text-gray-500 dark:hover:text-white"
              to={link.href}
            >
              {link.name}
            </RouterLink>
          ))}
        </div>
        <div className="hidden md:flex gap-5 items-center justify-end">
          <Button
            colorScheme="gray"
            variant="outline"
            onClick={toggleColorMode}
          >
            {colorMode === 'light' ? <SunIcon /> : <MoonIcon />}
          </Button>
          <Button colorScheme="gray" variant="outline">
            <span className="dark:text-white text-black !font-normal">Cart</span>
            <BsCart2 className="ml-1 w-5 h-5 dark:text-white text-black" />
            <span className="absolute top-1 right-1 text-[0.6rem] bg-red-500 h-5 w-5 text-white flex justify-center items-center rounded-full">20</span>
          </Button>
          <Button colorScheme="pink" className="!bg-pink-400 hover:!bg-pink-300/90 dark:hover:!bg-pink-500/80 dark:!bg-pink-500" variant="solid">
            <span className="text-white !font-normal">Sign In</span>
          </Button>
        </div>
        <div className="flex md:hidden gap-5 items-center justify-end">
          <Button colorScheme="gray" variant="outline" onClick={onToggle}>
            {isOpen ? <CloseIcon h="3" w="4" /> : <HamburgerIcon />}
          </Button>
        </div>
      </div>
      <Collapse
        in={isOpen}
        animateOpacity
        className="block md:!hidden !transition-colors !duration-200 !ease-in-out"
      >
        <Stack
          align="normal"
          className="h-screen pt-8 dark:bg-slate-900 bg-white !transition-colors !duration-200 !ease-in-out"
        >
          {linkList.map((link) => (
            <RouterLink
              className="transition-colors ease-in-out text-black duration-200 dark:text-white"
              to={link.href}
              key={link.name}
              onClick={onToggle}
            >
              <Button className="w-full">{link.name}</Button>
            </RouterLink>
          ))}
          <Button
            className="w-full dark:text-white text-black"
            onClick={toggleColorMode}
          >
            Toggle
            {' '}
            {colorMode === 'light' ? 'Dark' : 'Light'}
            {' '}
            Mode
          </Button>
          <Button colorScheme="gray" variant="outline" onClick={onToggle}>
            <RouterLink to="/cart" className="flex w-full items-center justify-center">
              <span className="dark:text-white text-black">Cart</span>
              <BsCart2 className="ml-1 w-5 h-5 dark:text-white text-black" />
              <span className="absolute top-1 right-1 text-[0.6rem] bg-red-500 h-5 w-5 text-white flex justify-center items-center rounded-full">20</span>
            </RouterLink>
          </Button>
          <Button colorScheme="pink" className="!bg-pink-400 hover:!bg-pink-300/90 dark:hover:!bg-pink-500/80 dark:!bg-pink-500" variant="solid" onClick={onToggle}>
            <span className="text-white">Sign In</span>
          </Button>
        </Stack>
      </Collapse>
    </header>
  );
}

export default Header;
