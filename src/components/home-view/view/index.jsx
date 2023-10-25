"use client";

import Image from "next/image";
import { useMemo } from "react";
import React from "react";
import Image1 from "../../../../public/images/anime-courosel/613927.jpg";
import { motion } from "framer-motion";
import AnimationWrapper from "@/components/animation-wrapper";

function variants() {
  return {
    offscreen: {
      y: 150,
      opacity: 0,
    },
    onscreen: ({ duration = 2 } = {}) => ({
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration,
      },
    }),
  };
}

export default function HomeView({ data }) {
  console.log(data, "HomeView");

  const setVariants = useMemo(() => variants(), []);
  return (
    <AnimationWrapper>
      <motion.div
        variants={setVariants}
        className="mt-[80px]  w-full max-w-screen h-[520px] mx-auto relative"
      >
        {/* Komponen Header Image */}
        <div className="absolute w-full h-[520px] bg-black/80 z-10" />
        <div className="relative ">
          <Image src={Image1} alt="Image1" className="w-full h-[520px]" />
          <div className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white  z-20">
            <h1 className="text-center text-4xl font-bold">
              Welcome To <span className="text-orange-600">ISEKANIME!</span>
            </h1>
            <p className="text-center font-semibold">
              Explore Alternate Worlds at ISEKANIME: Your Gateway to Isekai
              Anime!
            </p>
          </div>
        </div>
        {/* Komponen Penutup Header Image */}
      </motion.div>
    </AnimationWrapper>
  );
}
