"use client";

import { useMemo } from "react";
import React from "react";
import Link from "next/link";
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

export default function GroupView() {
  const setVariants = useMemo(() => variants(), []);
  return (
    <AnimationWrapper>
      <div className="w-full h-auto pb-12 bg-black mt-[80px] justify-center items-center text-center">
        <h1 className="text-white text-4xl pt-12 font-bold">
          GROUP COMMUNITY <span className="text-orange-600">ISEKANIME</span>
        </h1>
        <motion.div
          variants={setVariants}
          className="w-full mt-24  justify-center items-center text-center flex flex-col "
        >
          <div className="text-white w-[50%]">
            <Link href="">
              <div className="w-full bg-orange-600 py-2 rounded-xl uppercase font-bold">
                <h1>WHATSAPP</h1>
              </div>
            </Link>
            <Link href="https://t.me/+96rzsahKTAc0YTY1">
              <div className="w-full bg-orange-600 py-2 rounded-xl mt-6 uppercase font-bold">
                <h1>TELEGRAM</h1>
              </div>
            </Link>
          </div>
        </motion.div>
      </div>
    </AnimationWrapper>
  );
}
