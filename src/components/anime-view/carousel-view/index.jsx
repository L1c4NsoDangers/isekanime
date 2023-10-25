"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { images } from "../../images";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { motion } from "framer-motion";
import AnimationWrapper from "@/components/animation-wrapper";
import { useMemo } from "react";

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

export default function CorouselView() {
  const setVariants = useMemo(() => variants(), []);
  return (
    <AnimationWrapper>
      <motion.div
        variants={setVariants}
        className="mt-[80px] relative border-b-4 bg-orange-600 border-orange-600"
      >
        <div>
          <Swiper
            navigation
            pagination={{ type: "fraction" }}
            modules={[Navigation, Pagination]}
            onSwiper={(swiper) => console.log(swiper)}
            className="h-[520px]"
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="flex h-full w-full items-center justify-center">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    className="block h-full w-full object-cover"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </motion.div>
    </AnimationWrapper>
  );
}
