"use client";

import React, { useRef, FormEvent } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import TitleText from "./TitleText";
import { fadeIn, staggerContainer } from "@/utils/motion";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { cn } from "@/utils/cn";
import { ButtonsCard } from "./ui/tailwindcss-buttons";
import { IconPhone, IconMail, IconHomeLink } from "@tabler/icons-react";

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          "service_r3ek6q9",
          "template_u0c85ec",
          form.current,
          "tX2UtCbeyuA4GEb2T"
        )
        .then(
          (result) => {
            console.log("Email sent successfully:", result.text);
            alert("Message sent successfully!");
          },
          (error) => {
            console.log("Error sending email:", error.text);
            alert("An error occurred, please try again.");
          }
        );
    }
  };

  return (
    <div id="contactus" className="max-w-7xl mx-auto p-6">
      <TitleText title="Contact Us" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className="flex mx-auto">
          <motion.div
            variants={fadeIn("right", "tween", 0.2, 1)}
            className="max-w-2xl w-full rounded-2xl m-5 p-4 md:p-8 bg-purple-800/5 border-[1px] border-purple-800 hover:shadow-md hover:shadow-purple-500">
            <h2 className="font-bold text-xl lg:text-4xl text-purple-500">
              Welcome to Our Creative Space
            </h2>

            <form ref={form} onSubmit={sendEmail} className="my-8">
              <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
                <LabelInputContainer>
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="user_name"
                    placeholder="Your Name"
                    type="text"
                    required
                  />
                </LabelInputContainer>
                <LabelInputContainer>
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    name="user_email"
                    placeholder="Your Email"
                    type="email"
                    required
                  />
                </LabelInputContainer>
              </div>
              <LabelInputContainer className="mb-4">
                <Label htmlFor="message">Message</Label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Your Message"
                  className="bg-gray-50 dark:bg-zinc-800 rounded-md p-2 w-full h-32"
                  required></textarea>
              </LabelInputContainer>

              <button
                className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                type="submit">
                Send Message &rarr;
                <BottomGradient />
              </button>
            </form>
          </motion.div>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className="flex -ml-[7%] sman:mx-auto md:mx-auto">
          <motion.div
            variants={fadeIn("left", "tween", 0.2, 1)}
            className="flex justify-center flex-col gap-10">
            <ButtonsCard>
              <IconPhone
                stroke={2}
                size={50}
                className="text-white bg-purple-500 rounded-full p-2"
              />
              <div className="flex flex-col gap-2">
                <label className="text-md">Phone</label>
                <label className="text-2xl">+923152280754</label>
              </div>
            </ButtonsCard>

            <ButtonsCard>
              <IconMail
                stroke={2}
                size={50}
                className="text-white bg-purple-500 rounded-full p-2"
              />
              <div className="flex flex-col gap-2">
                <label className="text-md">Email</label>
                <label className="text-lg">ammansoor007@gmail.com</label>
              </div>
            </ButtonsCard>

            <ButtonsCard>
              <IconHomeLink
                stroke={2}
                size={50}
                className="text-white bg-purple-500 rounded-full p-2"
              />
              <div className="flex flex-col gap-2">
                <label className="text-md">Address</label>
                <label className="text-lg">Saddar Town, Karachi Pakistan</label>
              </div>
            </ButtonsCard>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
