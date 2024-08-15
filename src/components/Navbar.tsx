"use client";

import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";
import { HiMenu, HiX } from "react-icons/hi";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle sidebar
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={cn(
        "fixed top-0 inset-x-0 max-w-4xl mx-auto z-50 h-20 flex items-center justify-between px-4 md:px-8",
        className
      )}>
      {/* Hamburger menu icon for small screens */}
      <div className="flex sman2:hidden">
        <button
          className={`text-3xl text-white hover:text-gray-400 focus:outline-none transform transition-transform duration-500 ease-in-out ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
          onClick={toggleSidebar}>
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Full menu for medium screens and larger */}
      <div className={`hidden sman2:flex md:items-center md:justify-between`}>
        <Menu setActive={setActive}>
          <Link href="/" passHref>
            <h4 className="text-white text-xl font-bold md:text-2xl sm:font-bold md:font-extrabold mx-auto my-auto -ml-4 -mt-1 md:-mt-1 font-ocean">
              man{" "}
              <span className="-ml-[5px] -mr-[6px] text-purple-400 m-0 p-0 md:-ml-[7px] md:-mr-[8px]">
                s
              </span>{" "}
              oor
            </h4>
          </Link>
          <Link href="/" passHref>
            <MenuItem setActive={setActive} active={active} item="Home" />
          </Link>
          <Link href="#aboutus" passHref>
            <MenuItem setActive={setActive} active={active} item="About Us" />
          </Link>
          <Link href="#contactus" passHref>
            <MenuItem setActive={setActive} active={active} item="Contact Us" />
          </Link>
        </Menu>
      </div>

      {/* Sidebar for small screens */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-80 z-40 transition-opacity duration-500 ease-in-out ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={toggleSidebar}></div>

      <div
        className={`fixed inset-y-0 left-0 w-3/4 max-w-xs bg-white dark:bg-gradient-to-tr from-purple-500 to-black p-6 z-50 transition-transform duration-500 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}>
        {/* Close button inside the sidebar */}
        <button
          className="absolute top-4 left-4 text-3xl text-black dark:text-white hover:text-gray-400 focus:outline-none transform transition-transform duration-500 ease-in-out"
          onClick={toggleSidebar}>
          <HiX />
        </button>

        <nav className="flex flex-col space-y-6 mt-12">
          <Link href="/" passHref>
            <h4 className="text-black dark:text-white text-xl font-bold md:text-2xl sm:font-bold md:font-extrabold mx-auto my-auto font-ocean">
              man
              <span className="text-purple-400">s</span>oor
            </h4>
          </Link>
          <Link
            href="/"
            className={`text-lg py-2 px-3 rounded-md ${
              active === "Home" ? "bg-purple-500 text-white" : ""
            } hover:bg-purple-600 hover:text-white`}
            onClick={() => setActive("Home")}>
            Home
          </Link>
          <Link
            href="#aboutus"
            className={`text-lg py-2 px-3 rounded-md ${
              active === "About Us" ? "bg-purple-500 text-white" : ""
            } hover:bg-purple-600 hover:text-white`}
            onClick={() => setActive("About Us")}>
            About Us
          </Link>
          <Link
            href="#contactus"
            className={`text-lg py-2 px-3 rounded-md ${
              active === "Contact Us" ? "bg-purple-500 text-white" : ""
            } hover:bg-purple-600 hover:text-white`}
            onClick={() => setActive("Contact Us")}>
            Contact Us
          </Link>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
