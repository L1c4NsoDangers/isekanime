"use client";

import Link from "next/link";
import Image from "next/image";
import DmdpImage from "../../../../public/images/anime/dmdp.jpg";

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

export default function DmdpView() {
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
            DEAD MOUNT <span className="text-orange-600 ">DEATH PLAY</span>
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-1 gap-6  py-8">
            <div className="text-white font-semibold">
              <p className="py-4">
                Set in another world, the anime series "Dead Mount Death Play"
                begins with an intense battle between the hero, Calamity
                Cruiser, and a cruel sorcerer known as the Corpse God, both of
                whom possess Devil Eyes, granting them the ability to see
                spirits. While Calamity Cruiser, whose real name is Shagrua,
                uses his power for good, the Corpse God has different
                intentions.
              </p>
              <p className="py-4">
                As the battle nears its end, Calamity Cruiser and the Corpse God
                unleash their most powerful spells. However, it turns out that
                the magic activated by the Corpse God is a spell for
                reincarnation.
              </p>
              <p className="py-4">
                This spell successfully transports the Corpse God's soul to the
                modern world, specifically into the body of a man named Polka
                Shinoyama, who has just been killed by a hitman.
              </p>
              <p className="py-4">
                Quietly, the infamous Corpse God from his original world
                surprisingly desires a peaceful life. What will this sorcerer do
                in this foreign world?
              </p>
            </div>
            <InformationAnime
              type="TV"
              episode="15"
              status="On Going"
              reales="April 11, 2023, to June 27, 2023"
              weather="Spring 2023"
              produser="Square Enix, Movic, Half H.P Studio, F.M.F, King Records, Crunchyroll, Kadokawa Media House, Geek Pictures"
              lisensi="Unknown"
              studio="Geek Toys"
              source="Manga"
              genre="Fantasy, Action, Supernatural"
              duration="23 Minutes"
              score="9.0"
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
                <Image src={DmdpImage} alt="DMDP" className="w-full h-auto" />
              </Link>
              <div className="p-4 items-center text-center justify-center">
                <Link href="/rimurus1">
                  <h2 className="my-6 text-black text-2xl font-bold text-center uppercase hover:text-white">
                    DEAD MOUNT DEATH PLAY
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
