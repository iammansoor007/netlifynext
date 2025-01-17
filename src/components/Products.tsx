"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Link from "next/link";
import { Product } from "@/utils/data";
import { motion } from "framer-motion";
import { textVarient } from "@/utils/motion";

const Products = ({ filteredWork }: { filteredWork: Product[] }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {filteredWork.map((prod) => (
        <motion.div
          key={prod.id}
          variants={textVarient}
          initial="hidden"
          whileInView="show"
        >
          <CardContainer className="inter-var">
            <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto h-auto rounded-xl p-6 border  ">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white"
              >
                {prod.name}
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                {prod.desc}
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src={prod.image}
                  height="1000"
                  width="1000"
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </CardItem>
              <div className="flex justify-center mt-10">
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-3 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                >
                  Check it out
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        </motion.div>
      ))}
    </div>
  );
};

export default Products;
