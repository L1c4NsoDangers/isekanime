"use client";

import Link from "next/link";
import Image from "next/image";
import RimuruSd from "../../../../public/images/anime/rimuru3.jpg";

const InformationAnime = ({
  type,
  episode,
  status,
  reales,
  weather,
  produser,
  lisensi,
  studio,
  source,
  genre,
  duration,
  score,
}) => {
  return (
    <div className="text-orange-600 font-bold ">
      <p className="pb-2">
        Type : <span className="text-white">{type}</span>
      </p>
      <p className="pb-2">
        Episodes : <span className="text-white">{episode}</span>
      </p>
      <p className="pb-2">
        Status : <span className="text-white">{status}</span>
      </p>
      <p className="pb-2">
        Aired : <span className="text-white">{reales}</span>
      </p>
      <p className="pb-2">
        Premiered : <span className="text-white">{weather}</span>
      </p>
      <p className="pb-2">
        Producers : <span className="text-white">{produser}</span>
      </p>
      <p className="pb-2">
        Licensors : <span className="text-white">{lisensi}</span>
      </p>
      <p className="pb-2">
        Studio : <span className="text-white">{studio}</span>
      </p>
      <p className="pb-2">
        Source : <span className="text-white">{source}</span>
      </p>
      <p className="pb-2">
        Genres : <span className="text-white">{genre}</span>
      </p>
      <p className="pb-2">
        Duration : <span className="text-white">{duration}</span>
      </p>
      <p className="pb-2">
        Score : <span className="text-white">{score}</span>
      </p>
    </div>
  );
};

export default function RimuruSdView() {
  return (
    <div id="RIMURUS1" className=" w-full h-auto bg-black mt-[80px]">
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
        <div className="w-full md:w-1/2">
          <h1 className="border-l-4 border-orange-600 py-4 px-4 text-white uppercase text-2xl font-bold ">
            Tensei Shitara Slime Datta Ken :{" "}
            <span className="text-orange-600 ">The Slime Diaries</span>
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-1 gap-6  py-8">
            <div className="text-white font-semibold">
              <p className="py-4">
                Dear diary... I have been reincarnated as a slime (a jelly-like
                fantasy creature)." Even in another world, life is not always at
                stake. There are many tasks to be done, from providing food to
                crafting necessary items for the community, as well as numerous
                games and festivities. Join Rimuru and his friends as they relax
                and enjoy their everyday lives. Just like the original series,
                the spin-off "Tensura Shitara Slime Datta Ken," or "That Time I
                Got Reincarnated as a Slime," retains its original voice cast.
              </p>
            </div>
            <InformationAnime
              type="TV"
              episode="12"
              status="Aired"
              reales="April 6, 2021, to June 22, 2021"
              weather="Spring 2021"
              produser="Lantis, Kodansha, BS11, Bandai Namco Arts, Micro Magazine Publishing, Bandai Spirits, Sony Music Solutions, ADK Marketing Solutions"
              lisensi="Funimation"
              studio="8bit"
              source="Manga"
              genre="Fantasy, Shounen, Adventure, Comedy"
              duration="23 Minutes"
              score="8.5"
            />
            <div className="w-full h-auto text-orange-600 text-center rounded-br-xl font-bold uppercase grid grid-cols-1 md:grid-cols-8 gap-6">
              <Link
                href="https://www.infokuy.net/2020/07/review-anime-tensei-shitara-slime-datta-ken.html"
                className="border-orange-600 border px-4 py-2"
              >
                1
              </Link>
              <Link href="/ " className="border-orange-600 border px-4 py-2">
                2
              </Link>
              <Link href="/" className="border-orange-600 border px-4 py-2">
                3
              </Link>
              <Link href="/" className="border-orange-600 border px-4 py-2">
                4
              </Link>
              <Link href="/" className="border-orange-600 border px-4 py-2">
                5
              </Link>
              <Link href="/" className="border-orange-600 border px-4 py-2">
                6
              </Link>
              <Link href="/" className="border-orange-600 border px-4 py-2">
                7
              </Link>
              <Link href="/" className="border-orange-600 border px-4 py-2">
                8
              </Link>
            </div>
            <div className="w-full h-auto text-orange-600 text-center rounded-br-xl font-bold uppercase grid grid-cols-1 md:grid-cols-8 gap-6">
              <Link href="/" className="border-orange-600 border px-4 py-2">
                9
              </Link>
              <Link href="/" className="border-orange-600 border px-4 py-2">
                10
              </Link>
              <Link href="/" className="border-orange-600 border px-4 py-2">
                11
              </Link>
              <Link href="/" className="border-orange-600 border px-4 py-2">
                12
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 justify-center items-center py-4 px-4 text-center">
          <div className="grid grid-cols-1 md:grid-cols-1 gap-6 py-8">
            <div className="flex-col lg:w-full lg:flex items-center justify-between rounded-r-xl bg-orange-600 shadow-2xl">
              <Link
                href="/"
                className="cursor-pointer w-full border-b-2 border-orange-600"
              >
                <Image
                  src={RimuruSd}
                  alt="RimuruSd"
                  className="w-full h-auto"
                />
              </Link>
              <div className="p-4 items-center text-center justify-center">
                <Link href="/rimurus1">
                  <h2 className="my-6 text-black text-2xl font-bold text-center uppercase hover:text-white">
                    Tensei Shitara Slime Datta Ken : The Slime Diaries
                  </h2>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*CLOSE ANIME TERBAIK */}
    </div>
  );
}
