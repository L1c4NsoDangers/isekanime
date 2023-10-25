"use client";

import Link from "next/link";
import Image from "next/image";
import PotionDdi from "../../../../public/images/anime/ISSUP.jpg";

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

export default function PotionDdiView() {
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
            Potion-danomi de Ikinobimasu!{" "}
            <span className="text-orange-600 ">Ikinobimasu!</span>
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-1 gap-6  py-8">
            <div className="text-white font-semibold">
              <p className="py-4">
                Kaoru Nagase died unexpectedly while walking home from her
                office job one night, and she suddenly finds herself in front of
                a man dressed in white. The man introduces himself as God and
                apologizes for his mistake that resulted in her untimely demise,
                vowing to make it up to Kaoru by reincarnating her into another
                world. The next world's goddess, Celestine, reforms Kaoru's body
                and gives her all the concessions she asks for: the body she had
                when she was 15, the ability to make potions with effects of her
                choice, and a box with infinite storage space, to name a few.
              </p>
              <p className="py-4">
                But soon, Kaoru realizes that, despite being told otherwise,
                this new medieval world doesn't have much in the way of magic,
                causing her potions to be highly sought after by greedy nobles.
                However, by using knowledge from her previous life, she just
                might find a way to survive in this world using her potions.
              </p>
            </div>
            <InformationAnime
              type="TV"
              episode="12"
              status="On Going"
              reales="October 8, 2023, to ?"
              weather="Fall 2023"
              produser=" Pony Canyon, Kodansha, BS Fuji, Crunchyroll, ADK Marketing Solutions"
              lisensi="Unknown"
              studio="Jumondo"
              source="Light Novel"
              genre="Fantasy"
              duration="23 Minutes"
              score="8.8"
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
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 justify-center items-center py-4 px-4 text-center">
          <div className="grid grid-cols-1 md:grid-cols-1 gap-6 py-8">
            <div className="flex-col lg:w-full lg:flex items-center justify-between rounded-r-xl bg-orange-600 shadow-2xl">
              <Link
                href="/potionddi"
                className="cursor-pointer w-full border-b-2 border-orange-600"
              >
                <Image
                  src={PotionDdi}
                  alt="PotionDdi"
                  className="w-full h-auto"
                />
              </Link>
              <div className="p-4 items-center text-center justify-center">
                <Link href="/potionddi">
                  <h2 className="my-6 text-black text-2xl font-bold text-center uppercase hover:text-white">
                    Potion-danomi de Ikinobimasu!
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
