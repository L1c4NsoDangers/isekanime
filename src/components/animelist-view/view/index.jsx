"use client";

import { useMemo } from "react";
import React, { useState } from "react";
import Image from "next/image";
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

const AnimeRekomen = ({ img, title, link, selectedLetter }) => {
  return (
    <article
      className={`flex-col lg:w-full lg:flex items-center justify-between  bg-black shadow-2xl ${
        selectedLetter ? "block" : "hidden"
      }`}
    >
      {selectedLetter && (
        <Link href={link} target="_blank">
          <motion.div whileHover={{ scale: 0.9 }} className="w-full lg:w-auto">
            <Image
              src={img}
              alt={title}
              width={700} // Atur lebar sesuai dengan dimensi gambar
              height={300} // Atur tinggi sesuai dengan dimensi gambar
              className="w-full lg:w-auto rounded shadow-lg shadow-orange-600"
            />
          </motion.div>
        </Link>
      )}
      <div className=" items-center text-center justify-center">
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-4 text-start text-orange-600 hover:text-white text-2xl font-bold">
            {title}
          </h2>
        </Link>
      </div>
    </article>
  );
};

const AnimeListView = () => {
  const [selectedLetter, setSelectedLetter] = useState(null);
  const setVariants = useMemo(() => variants(), []);

  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  const movies = [
    {
      name: "DEAD MOUNT DEATH PLAY",
      img: "/images/anime/dmdp.jpg",
      link: "/dmdppage",
    },
    {
      name: "POTION-DANOMI DE IKINOBIMASU!",
      img: "/images/anime/ISSUP.jpg",
      link: "/potionddi",
    },
    {
      name: "Tate no Yuusha no Nariagi Season 3",
      img: "/images/anime/TNYNT.jpg",
      link: "tates3",
    },
    {
      name: "Tensei Shitara Slime Data Ken Season 1",
      img: "/images/anime/rimuru.jpg",
      link: "/rimurus1",
    },
    {
      name: "Tensei Shitara Slime Data Ken Season 2",
      img: "/images/anime/rimuru2.jpg",
      link: "/rimurus2",
    },
    {
      name: "Tensei Shitara Slime Datta Ken : The Slime Diaries",
      img: "/images/anime/rimuru3.jpg",
      link: "rimurusd",
    },
  ];

  const filteredMovies = selectedLetter
    ? movies.filter((movie) => movie.name.startsWith(selectedLetter))
    : movies;

  return (
    <div className="bg-black w-full py-12 h-auto justify-center items-center  flex flex-col">
      <div className="text-center">
        <h1 className="text-4xl uppercase font-bold mb-4 text-white">
          Daftar Anime By <span className="text-orange-600">ISEKANIME!</span>
        </h1>
      </div>
      <div className="mx-6 items-center">
        {letters.map((letter) => (
          <button
            key={letter}
            className={`px-4 py-2 rounded ${
              selectedLetter === letter
                ? "bg-orange-600 text-white"
                : "bg-black text-orange-600"
            } hover:bg-orange-600 hover:text-white`}
            onClick={() => setSelectedLetter(letter)}
          >
            {letter}
          </button>
        ))}
      </div>
      <AnimationWrapper>
        <motion.div
          variants={setVariants}
          initial={{ y: 50 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="mt-4 mx-12 grid grid-cols-1 md:grid-cols-5 gap-6 py-8"
        >
          {filteredMovies.map((movie, index) => (
            <AnimeRekomen
              key={index}
              img={movie.img}
              title={movie.name}
              link={movie.link}
              selectedLetter={selectedLetter}
            />
          ))}
        </motion.div>
      </AnimationWrapper>
    </div>
  );
};

export default AnimeListView;
