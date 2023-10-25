"use client";

import { useEffect, useMemo, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Rimuru1 from "../../../../public/images/anime/rimuru.jpg";
import Rimuru2 from "../../../../public/images/anime/rimuru2.jpg";
import Rimuru3 from "../../../../public/images/anime/rimuru3.jpg";
import DeadM from "../../../../public/images/anime/dmdp.jpg";
import ISSUP from "../../../../public/images/anime/ISSUP.jpg";
import TNYNT from "../../../../public/images/anime/TNYNT.jpg";
import tnyntl from "../../../../public/images/anime/tnyntl.jpg";
import RagnaL from "../../../../public/images/anime/RagnaL.jpg";
import BOGL from "../../../../public/images/anime/BOGL.jpg";
import DMDPL from "../../../../public/images/anime/DMDPL.jpg";
import Rekomenasi1 from "../../../../public/images/anime-courosel/564835.jpg";

const AnimeList = ({ img, title, link, genre }) => {
  return (
    <article className="flex-col lg:w-full lg:flex items-start justify-between bg-black shadow-2xl">
      <Link href={link} target="_blank" className="cursor-pointer w-full ">
        <Image src={img} alt={title} className="w-full h-auto rounded" />
      </Link>

      <div className="text-white bg-orange-600 w-full text-center rounded p-1 mt-4 items-start justify-between  font-semibold text-xs">
        <p>{genre}</p>
      </div>

      <div className="py-2 items-start justify-between">
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className=" text-orange-600 text-2xl  items-center font-bold hover:text-white">
            {title}
          </h2>
        </Link>
      </div>
    </article>
  );
};

const AnimeRekomen = ({ img, title, link }) => {
  return (
    <article className="flex-col lg:w-full lg:flex items-center justify-between border border-solid rounded border-orange-600 bg-black shadow-2xl">
      <Link
        href={link}
        target="_blank"
        className="cursor-pointer w-full border-b-2 border-orange-600"
      >
        <Image src={img} alt={title} className="w-full h-auto" />
      </Link>
      <div className="p-4 items-center text-center justify-center">
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-6 text-orange-600 text-2xl text-center font-bold">
            {title}
          </h2>
        </Link>
      </div>
    </article>
  );
};

export default function AnimeView() {
  return (
    <div className=" w-full h-auto">
      <div className="text-white mb-12 justify-center items-center text-center bg-orange-600 text-4xl lg:text-8xl py-12 uppercase font-bold">
        <h1>ISEKANIME</h1>
      </div>
      <div className="w-70% justify-center items-center border-4 border-white p-12 mx-12">
        <h1 className=" text-white font-semibold">
          Tips & Tricks: If you can't access{" "}
          <span className="text-orange-600">ISEKANIME</span>, there's a
          possibility that your browser extensions or antivirus software is
          blocking our website. You can check and whitelist our website to
          prevent it from being blocked!
        </h1>
      </div>
      {/* ANIME TERBAIK */}
      <div className="px-12 mt-12 py-12 flex flex-col gap-6 md:flex-row ">
        <div className="w-full md:w-3/4">
          <h1 className="border-l-4 border-orange-600 py-4 px-4 text-white uppercase text-2xl font-bold ">
            THE BEST ACCORDING TO{" "}
            <span className="text-orange-600 ">ISEKANIME</span>
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8">
            <motion.div
              initial={{ y: 50 }}
              whileInView={{ y: 0 }}
              transition={{ duration: 0.4, type: "spring" }}
            >
              <AnimeList
                title="Tensei Shitara Slime Datta Ken Season 1"
                img={Rimuru1}
                genre="Finished Airing"
                link="/rimurus1"
              />
            </motion.div>
            <motion.div
              initial={{ y: 50 }}
              whileInView={{ y: 0 }}
              transition={{ duration: 0.6, type: "spring" }}
            >
              <AnimeList
                title="Tensei Shitara Slime Datta Ken Season 2"
                img={Rimuru2}
                genre="Finished Airing"
                link="/rimurus2"
              />
            </motion.div>
            <motion.div
              initial={{ y: 50 }}
              whileInView={{ y: 0 }}
              transition={{ duration: 0.9, type: "spring" }}
            >
              <AnimeList
                title="Tensei Shitara Slime Datta Ken : The Slime Diaries"
                img={Rimuru3}
                genre="Finished Airing"
                link="/rimurusd"
              />
            </motion.div>
          </div>
        </div>
        <div className="w-full md:w-1/4 justify-center items-center text-center">
          <h1 className="border-l-4 border-orange-600  px-4 text-white uppercase text-2xl font-bold ">
            Recommendations from{" "}
            <span className="text-orange-600 ">ISEKANIME</span>
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-1 gap-6 py-8">
            <motion.div
              initial={{ y: 50 }}
              whileInView={{ y: 0 }}
              transition={{ duration: 1, type: "spring" }}
            >
              <AnimeRekomen
                title="DEAD MOUNT DEATH PLAY"
                img={DMDPL}
                link="/dmdppage"
              />
            </motion.div>
            <motion.div
              initial={{ y: 50 }}
              whileInView={{ y: 0 }}
              transition={{ duration: 1, type: "spring" }}
            >
              <AnimeRekomen
                title="Tate no Yuusha no Nariagi Season 3"
                img={tnyntl}
                link="/tates3"
              />
            </motion.div>
          </div>
        </div>
      </div>
      {/*CLOSE ANIME TERBAIK */}

      {/* ANIME TERBARU */}
      <div className="px-12 mt-12 py-12 flex flex-col gap-6 md:flex-row ">
        <div className="w-full md:w-3/4">
          <h1 className="border-l-4 border-orange-600 py-4 px-4 text-white uppercase text-2xl font-bold ">
            The latest <span className="text-orange-600 ">Episode</span>
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8">
            <motion.div
              initial={{ y: 50 }}
              whileInView={{ y: 0 }}
              transition={{ duration: 0.4, type: "spring" }}
            >
              <AnimeList
                title="DEAD MOUNT DEATH PLAY"
                img={DeadM}
                genre="On Going"
                link="/dmdppage"
              />
            </motion.div>
            <motion.div
              initial={{ y: 50 }}
              whileInView={{ y: 0 }}
              transition={{ duration: 0.6, type: "spring" }}
            >
              <AnimeList
                title="POTION-DANOMI DE IKINOBIMASU!"
                img={ISSUP}
                genre="On Going"
                link="/potionddi"
              />
            </motion.div>
            <motion.div
              initial={{ y: 50 }}
              whileInView={{ y: 0 }}
              transition={{ duration: 0.9, type: "spring" }}
            >
              <AnimeList
                title="Tate no Yuusha no Nariagari Season 3"
                img={TNYNT}
                genre="On Going"
                link="/tates3"
              />
            </motion.div>
          </div>
        </div>
        <div className="w-full md:w-1/4 justify-center items-center text-center">
          <h1 className="border-l-4 border-orange-600  px-4 text-white uppercase text-2xl font-bold ">
            Coming Soon on <span className="text-orange-600 ">ISEKANIME</span>
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-1 gap-6 py-8">
            <motion.div
              initial={{ y: 50 }}
              whileInView={{ y: 0 }}
              transition={{ duration: 1, type: "spring" }}
            >
              <AnimeRekomen title="Ragna Crimson" img={RagnaL} link="/" />
            </motion.div>
            <motion.div
              initial={{ y: 50 }}
              whileInView={{ y: 0 }}
              transition={{ duration: 1, type: "spring" }}
            >
              <AnimeRekomen title="Berserk of Gluttony" img={BOGL} link="/" />
            </motion.div>
          </div>
        </div>
      </div>
      {/*CLOSE ANIME TERBARU */}
    </div>
  );
}
