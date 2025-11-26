'use client';

import Link from 'next/link';
import { IconMenu2 } from '@tabler/icons-react';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { useEffect, useState } from 'react';
import { cn } from '../lib/utils';
import Container from './container';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 10;
      setIsScrolled(scrolled);
    };

    window.addEventListener('scroll', handleScroll);

    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 z-50 w-screen transition-all duration-300 lg:px-40',
        isScrolled &&
          'bg-background backdrop-blur supports-[backdrop-filter]:bg-background/80',
      )}
    >
      <Container className="min-h-px flex-row items-center justify-between py-4">
        <div className="flex justify-start">
          <p className="items-center text-xl font-semibold md:text-2xl">
            Damy Matuwidi
          </p>
        </div>
        <div className="hidden items-center justify-end space-x-2 sm:flex md:space-x-4">
          <Link href="#about">About</Link>
          <Link href="#projects">Projects</Link>
          <Link href="#skills">Skills</Link>
          <Link href="#experience">Experience</Link>
        </div>
        <div className="flex justify-end sm:hidden">
          <Popover>
            <PopoverTrigger aria-label="Page links menu button">
              <IconMenu2 />
            </PopoverTrigger>
            <PopoverContent className="flex w-fit flex-col space-y-4">
              <Link href="#about">About</Link>
              <Link href="#projects">Projects</Link>
              <Link href="#skills">Skills</Link>
              <Link href="#experience">Experience</Link>
            </PopoverContent>
          </Popover>
        </div>
      </Container>
    </header>
  );
}
