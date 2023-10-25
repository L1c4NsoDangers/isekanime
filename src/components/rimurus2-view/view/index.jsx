"use client";

import Link from "next/link";
import Image from "next/image";
import RimuruS2 from "../../../../public/images/anime/rimuru2.jpg";

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

export default function RimuruS2View() {
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
            Tensei Shitara Slime Data Ken{" "}
            <span className="text-orange-600 ">Season 2</span>
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-1 gap-6  py-8">
            <div className="text-white font-semibold">
              <p className="py-4">
                A sudden large-scale battle erupted in the great Jura Tempest
                forest, triggered by a group of humans from the Falmuth Kingdom
                and the minions of the Demon Lord Clayman.
              </p>
              <p className="py-4">
                Rimuru was away in another town, and his journey home took a
                considerable amount of time. During his journey, Rimuru
                encountered a powerful anti-monster fighter named Hinata. Rimuru
                used his clones to engage in combat against Hinata.
              </p>
              <p className="py-4">
                Meanwhile, the great Jura Tempest forest received a visit from
                three humans from the Falmuth Kingdom. These three individuals
                possessed tremendous power due to their origins from another
                world (Reincarnation). They launched an attack on the residents
                of the great Jura Tempest forest, causing significant
                destruction to the area.
              </p>
              <p className="py-4">
                A traitor began to reveal herself – a woman named Mjurran who
                had placed anti-magic barriers within the environment of the
                great Jura Tempest forest. She was a minion of the Demon Lord
                Clayman, infiltrating the forest with the intent to annihilate
                all creatures living there.
              </p>
              <p className="py-4">
                Upon Rimuru's return, he was filled with anger and sadness at
                the sight of his fallen comrades, the devastated city, and the
                many casualties. Rimuru's rage was palpable. However, calm was
                restored when someone shared a legend related to a dragon and
                the technique of resurrecting the dead.
              </p>
              <p className="py-4">
                Rimuru had to rise as the True Demon Lord to wield the power of
                "Resurrection." From that point, a significant battle would soon
                commence, with the aim of defeating the Falmuth Kingdom forces
                and using them as sacrifices for Rimuru's ascension as the True
                Demon Lord.
              </p>
            </div>
            <InformationAnime
              type="TV"
              episode="24"
              status="Aired"
              reales="January 12, 2021, to March 30, 2021"
              weather="Winter 2021"
              produser="Lantis, BS11, Bandai Namco Arts, Micro Magazine Publishing"
              lisensi="Funimation"
              studio="8bit"
              source="Manga"
              genre="Fantasy, Shounen, Adventure, Action"
              duration="24 Minutes"
              score="9.5"
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
              <Link href="/" className="border-orange-600 border px-4 py-2">
                13
              </Link>
              <Link href="/" className="border-orange-600 border px-4 py-2">
                14
              </Link>
              <Link href="/" className="border-orange-600 border px-4 py-2">
                15
              </Link>
              <Link href="/" className="border-orange-600 border px-4 py-2">
                16
              </Link>
            </div>
            <div className="w-full h-auto text-orange-600 text-center rounded-br-xl font-bold uppercase grid grid-cols-1 md:grid-cols-8 gap-6">
              <Link href="/" className="border-orange-600 border px-4 py-2">
                17
              </Link>
              <Link href="/" className="border-orange-600 border px-4 py-2">
                18
              </Link>
              <Link href="/" className="border-orange-600 border px-4 py-2">
                19
              </Link>
              <Link href="/" className="border-orange-600 border px-4 py-2">
                20
              </Link>
              <Link href="/" className="border-orange-600 border px-4 py-2">
                21
              </Link>
              <Link href="/" className="border-orange-600 border px-4 py-2">
                22
              </Link>
              <Link href="/" className="border-orange-600 border px-4 py-2">
                23
              </Link>
              <Link href="/" className="border-orange-600 border px-4 py-2">
                24
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
                  src={RimuruS2}
                  alt="RimuruS2"
                  className="w-full h-auto"
                />
              </Link>
              <div className="p-4 items-center text-center justify-center">
                <Link href="/rimurus1">
                  <h2 className="my-6 text-black text-2xl font-bold text-center uppercase hover:text-white">
                    Tensei Shitara Slime Data Ken Season 2
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
