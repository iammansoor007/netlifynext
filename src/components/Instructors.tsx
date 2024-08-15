"use client";
import { WavyBackground } from "@/components/ui/wavy-background";
import { AnimatedTooltip } from "@/components/ui/animate-tooltip";
import mansoor from "../../public/mansoorfb.jpg";

const instructors = [
  {
    id: 1,
    name: "Mansoor Shah",
    designation: "Frontend Web Developer",
    image: "/mansoorfb.jpg", // Correct usage
  },
  {
    id: 2,
    name: "Ubaidullah",
    designation: "Mern Stack",

    image: "/mansoorfb.jpg", // Correct usage
  },
  {
    id: 3,
    name: "Awaiz Tahir",
    designation: "Frontend Ui",
    image: "/mansoorfb.jpg", // Correct usage
  },
  {
    id: 4,
    name: "Abu Bakar Ejaz",
    designation: "Backend Developer",
    image: "/mansoorfb.jpg", // Correct usage
  },
];


function Instructors() {
  return (
    <div className="relative h-[40rem] overflow-hidden flex items-center justify-center">
      <WavyBackground className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full">
        <h2 className="text-2xl md:text-4xl lg:text-7xl text-white font-bold text-center mb-8">
          Meet Our Team
        </h2>
        <p className="text-base md:text-lg text-white text-center mb-4">
          Discover the talented professionals who will change your vision into digital Presence
        </p>
        <div className="flex flex-row items-center justify-center mb-10 w-full">
          <AnimatedTooltip items={instructors} />
        </div>
      </WavyBackground>
    </div>
  );
}

export default Instructors;
