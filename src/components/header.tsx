import Link from "next/link";
import { IconMenu2 } from "@tabler/icons-react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

export default function Header() {
  return (
    <header className="fixed top-0 z-50 grid grid-cols-2 p-4 sm:px-20 lg:px-40 border-b w-screen bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="flex justify-start">
        <p className="font-semibold text-xl md:text-2xl items-center">Damy Matuwidi</p>
      </div>
      <div className="hidden sm:flex justify-end space-x-2 md:space-x-4 items-center">
        <Link href="#about">About</Link>
        <Link href="#projects">Projects</Link>
        <Link href="#skills">Skills</Link>
        <Link href="/">CV</Link>
        <Link href="/">Contact</Link>
      </div>
      <div className="flex sm:hidden justify-end">
        <Popover>
          <PopoverTrigger>
            <IconMenu2 />
          </PopoverTrigger>
          <PopoverContent className="flex flex-col w-fit space-y-4">
            <Link href="#about">About</Link>
            <Link href="#projects">Projects</Link>
            <Link href="#skills">Skills</Link>
            <Link href="/">CV</Link>
            <Link href="/">Contact</Link>
          </PopoverContent>
        </Popover>
      </div>
    </header>
  )
}