"use client";

import Link from "next/link";
import { IconMenu2 } from "@tabler/icons-react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 10;
      setIsScrolled(scrolled);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 z-50 grid grid-cols-2 p-4 sm:px-20 lg:px-40 w-screen transition-all duration-300",
        isScrolled &&
          "bg-background backdrop-blur supports-[backdrop-filter]:bg-background/80",
      )}
    >
      <div className="flex justify-start">
        <p className="font-semibold text-xl md:text-2xl items-center">
          Damy Matuwidi
        </p>
      </div>
      <div className="hidden sm:flex justify-end space-x-2 md:space-x-4 items-center">
        <Link href="#about">About</Link>
        <Link href="#projects">Projects</Link>
        <Link href="#skills">Skills</Link>
        <Link href="#experience">Experience</Link>
      </div>
      <div className="flex sm:hidden justify-end">
        <Popover>
          <PopoverTrigger aria-label="Page links menu button">
            <IconMenu2 />
          </PopoverTrigger>
          <PopoverContent className="flex flex-col w-fit space-y-4">
            <Link href="#about">About</Link>
            <Link href="#projects">Projects</Link>
            <Link href="#skills">Skills</Link>
            <Link href="#experience">Experience</Link>
          </PopoverContent>
        </Popover>
      </div>
    </header>
  );
}
