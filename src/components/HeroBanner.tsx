"use client";
import React from "react";
import { HeroParallax } from "./ui/hero-parallax";
import { products } from "@/utils/data";
import TitleText from "./TitleText";

export function HeroBanner() {
  return (
    <div className=" bg-gradient-to-br from-black to-purple-800 min-h-screen text-white relative">
      <HeroSection />
      <HeroParallax products={products} />
    </div>
  );
}

const HeroSection = () => {
  return (
    <section className="flex items-center justify-center h-screen bg-cover bg-center px-4 absolute">
      <div className="text-left">
        <TitleText title="Welcome to Our Creative Space" />
        <p className="max-w-2xl text-base md:text-xl mt-8 dark:text-neutral-200 text-left ml-4">
          We build beautiful products with the latest technologies and
          frameworks. Our team of passionate developers and designers works
          collaboratively to create innovative solutions tailored to meet the
          unique needs of each client. From sleek, responsive websites to
          dynamic mobile applications and engaging user experiences, we are
          committed to delivering top-notch products that not only look great
          but also perform exceptionally.
        </p>

        <div className="flex flex-row z-20 items-start mt-8 space-x-4 ml-4 absolute">
          <a
            href="https://www.facebook.com/Iammansoor007/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-400 transition-transform duration-300 ease-in-out hover:scale-110 hover:text-purple-500 active:scale-95 active:text-purple-700">
            <i className="fab fa-facebook text-5xl"></i>
          </a>
          <a
            href="https://wa.me/923152280754
"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-400 transition-transform duration-300 ease-in-out hover:scale-110 hover:text-purple-500 active:scale-95 active:text-purple-700">
            <i className="fab fa-whatsapp text-5xl"></i>
          </a>
          <a
            href="https://instagram.com/wassup_mansoor
"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-400 transition-transform duration-300 ease-in-out hover:scale-110 hover:text-purple-500 active:scale-95 active:text-purple-700">
            <i className="fab fa-instagram text-5xl"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/themansoorshah/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-400 transition-transform duration-300 ease-in-out hover:scale-110 hover:text-purple-500 active:scale-95 active:text-purple-700">
            <i className="fab fa-linkedin text-5xl"></i>
          </a>
          <a
            href="https://github.com/iammansoor007"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-400 transition-transform duration-300 ease-in-out hover:scale-110 hover:text-purple-500 active:scale-95 active:text-purple-700">
            <i className="fab fa-github text-5xl"></i>
          </a>
        </div>
      </div>
    </section>
  );
};
