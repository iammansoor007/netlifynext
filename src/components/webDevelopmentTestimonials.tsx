"use client";
import TitleText from "./TitleText";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const webDevelopmentTestimonials = [
  {
    quote:
      "Working with this team transformed our online presence. The new design and functionality of our website have significantly increased our user engagement.",
    name: "John Doe",
    title: "E-commerce Store Owner",
  },
  {
    quote:
      "Their attention to detail and understanding of our requirements were outstanding. Our site looks amazing, and the user experience is top-notch.",
    name: "Jane Smith",
    title: "Marketing Manager",
  },
  {
    quote:
      "The web development service provided was exceptional. The team was responsive, knowledgeable, and delivered exactly what we needed within our tight schedule.",
    name: "Carlos Garcia",
    title: "Project Manager",
  },
  {
    quote:
      "Their custom solutions and expertise helped streamline our operations. We are now able to manage our site more efficiently and effectively.",
    name: "Lucy Williams",
    title: "Business Owner",
  },
  {
    quote:
      "From the initial consultation to the final deployment, the process was seamless and professional. We highly recommend their services.",
    name: "Mike Brown",
    title: "CEO, Tech Startup",
  },
];

function WebDevelopmentTestimonials() {
  return (
    <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[1] relative flex flex-col items-center justify-center overflow-hidden">
      <TitleText title="What our clients says?" />
      <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl">
          <InfiniteMovingCards
            items={webDevelopmentTestimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </div>
  );
}

export default WebDevelopmentTestimonials;
