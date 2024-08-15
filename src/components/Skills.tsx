"use client";
import React from "react";
import TitleText from "./TitleText";
import { textVarient } from "@/utils/motion";
import { motion } from "framer-motion";
import { skills } from "@/utils/data";
import { HoverEffect } from "./ui/card-hover-effect";

const Skills = () => {
  return (
    <div>
      <TitleText title="SKILLS" />
      <motion.p
        variants={textVarient}
        initial="hidden"
        whileInView="show"
        className="text-white text-center text-lg p-10 md:px-[25%]">
        We put your ideas and thus your wishes in the form of a unique web
        project that inspires you and your customers.
      </motion.p>
      <motion.div
        variants={textVarient}
        initial="hidden"
        whileInView="show"
        className="flex gap-10 items-center justify-center flex-wrap mt-10  flex-col">
        <HoverEffect
          items={skills.map((skill) => ({
            name: skill.name,
            percentage: skill.percentage,
            image: skill.image,
          }))}
        />
      </motion.div>
    </div>
  );
};

export default Skills;
