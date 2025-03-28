import Link from "next/link";
import { IconMenu2 } from "@tabler/icons-react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background grid grid-cols-2 p-4 sm:px-20 lg:px-40 border-b w-screen">
      <div className="flex justify-start">
        <p className="font-semibold text-xl md:text-2xl items-center">Damy Matuwidi</p>
      </div>
      <div className="hidden sm:flex justify-end space-x-2 md:space-x-4 items-center">
        <Link href="/">About</Link>
        <Link href="/">Projects</Link>
        <Link href="/">CV</Link>
        <Link href="/">Contact</Link>
      </div>
      <div className="flex sm:hidden justify-end">
        <Popover>
          <PopoverTrigger>
            <IconMenu2 />
          </PopoverTrigger>
          <PopoverContent className="flex flex-col w-fit space-y-4">
            <Link href="#about" className="hover:text-secondary-foreground">About</Link>
            <Link href="#projects" className="hover:text-secondary-foreground">Projects</Link>
            <Link href="/" className="hover:text-secondary-foreground">CV</Link>
            <Link href="/" className="hover:text-secondary-foreground">Contact</Link>
          </PopoverContent>
        </Popover>
      </div>
    </header>
  )
}