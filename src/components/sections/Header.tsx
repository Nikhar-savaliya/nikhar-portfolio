"use client";

// import Image from "next/image";
import Link from "next/link";
import React from "react";
// import nikhar from "@/assets/Nikhar.png";
import { ContactLinks, NavLinks } from "@/lib/navlinks";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";

const Header: React.FC = () => {
  const path = usePathname();

  return (
    <div className="p-5 sticky w-full bg-background/90 top-0 backdrop-blur-md antialiased z-50 border-b-2 ">
      <div className="flex items-center justify-between container mx-auto max-w-7xl p-1">
        <div className="flex items-center justify-between w-full">
          {/* LOGO */}
          <Link
            href="/"
            className="flex gap-2 items-center opacity-100 "
            aria-label="Nikhar S."
          >
            {/* <Image
              src={nikhar}
              alt="nikhar-img"
              className="w-10 aspect-square"
            /> */}
            <span className="font-sans leading-7 relative font-medium text-lg antialiased flex">
              <div className="flex flex-col">
                <span className="z-50 text-base text-foreground font-semibold ">
                  Nikhar Savaliya
                </span>
                <span className="text-xs font-sans leading-3 text-foreground/80">
                  web developer
                </span>
              </div>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex divide-x items-center gap-1 divide-muted-foreground">
            {/* NAV LINKS */}

            <ul className="flex items-center space-x-6 px-4 gap-2 text-muted-foreground text-base">
              {NavLinks.map((link) => {
                return (
                  <li
                    key={link.link}
                    className="flex items-center justify-between cursor-pointer  hover:text-foreground transition-colors duration-100"
                  >
                    <Link
                      href={link.link}
                      className={`flex items-center justify-between gap-2 transition-all ${
                        path == link.link
                          ? "text-primary  underline underline-offset-4 decoration-wavy"
                          : ""
                      } `}
                    >
                      <link.icon size={20} />
                      <p>{link.text}</p>
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* CONTACT LINKS */}

            <ul className="flex items-center gap-4 pl-5">
              {ContactLinks.map((link) => {
                return (
                  <li
                    key={link.link}
                    className="flex items-center justify-between cursor-pointer  text-muted-foreground hover:text-primary transition-colors duration-100"
                    title={link.text}
                  >
                    <a
                      href={link.link}
                      target="_blank"
                      className="flex items-center justify-between"
                      aria-label={`Contact Nikhar via ${link.text}`}
                    >
                      <link.icon size={20} />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Menu width={24} />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="mx-4 my-2">
                {/* NAV LINKS */}
                <ul className="flex flex-col items-start p-2 gap-4 text-muted-foreground text-base">
                  {NavLinks.map((link) => {
                    return (
                      <DropdownMenuItem
                        key={link.link}
                        className="flex w-full items-center justify-between cursor-pointer  hover:text-foreground transition-colors duration-100"
                      >
                        <Link
                          href={link.link}
                          className={`flex items-center justify-between gap-[6px] `}
                        >
                          <link.icon size={20} />
                          <p>{link.text}</p>
                        </Link>
                      </DropdownMenuItem>
                    );
                  })}
                </ul>

                <DropdownMenuSeparator />

                {/* CONTACT LINKS */}
                <ul className="flex items-center gap-4 p-2">
                  {ContactLinks.map((link) => {
                    return (
                      <DropdownMenuItem
                        key={link.link}
                        className="flex items-center justify-between cursor-pointer  text-muted-foreground hover:text-secondary-foreground transition-colors duration-100"
                        title={link.text}
                      >
                        <a
                          href={link.link}
                          target="_blank"
                          className="flex items-center justify-between"
                          aria-label={`Contact Nikhar via ${link.text}`}
                        >
                          <link.icon size={20} />
                        </a>
                      </DropdownMenuItem>
                    );
                  })}
                </ul>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>

      {/* theme toggler */}
    </div>
  );
};

export default Header;
