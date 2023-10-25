"use client";

import Link from "next/link";
import Image from "next/image";
import RimuruS1 from "../../../../public/images/anime/rimuru.jpg";

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

export default function RimuruS1View() {
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
            <span className="text-orange-600 ">Season 1</span>
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-1 gap-6  py-8">
            <div className="text-white font-semibold">
              <p className="py-4">
                Satoru Mikami, a 37-year-old man who was an ordinary worker in a
                company, lived a monotonous life in Tokyo. During a casual
                meeting with his friend in the midst of a peaceful conversation,
                he became a victim of a random street attack and was stabbed.
              </p>
              <p className="py-4">
                However, as he gave in to his wounds, a strange voice resounded
                in his mind, uttering numerous commands that were
                incomprehensible to a dying person.
              </p>
              <p className="py-4">
                When Satoru regained consciousness, he had been reincarnated as
                a slime in a place he didn't recognize. He discovered a new
                ability to devour and mimic appearances, gaining the abilities
                of what he consumed.
              </p>
            </div>
            <InformationAnime
              type="TV"
              episode="24"
              status="Aired"
              reales="October 2, 2018, to March 19, 2019"
              weather="Fall 2018"
              produser="Lantis, BS11, Bandai Namco Arts, Micro Magazine Publishing"
              lisensi="Funimation"
              studio="8bit"
              source="Manga"
              genre="Fantasy, Shounen"
              duration="24 Minutes"
              score="9.1"
            />
            <div className="w-full h-auto text-orange-600 text-center rounded-br-xl font-bold uppercase grid grid-cols-1 md:grid-cols-8 gap-6">
              <Link
                href="https://www.dropbox.com/scl/fi/76lgjsyooy89o59pcdn3l/Otakudesu_TenseiSlime-01_720p.mp4?rlkey=c1ul6fs97vqons1597mp3yz1u&dl=0"
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
                href="/rimurus1"
                className="cursor-pointer w-full border-b-2 border-orange-600"
              >
                <Image
                  src={RimuruS1}
                  alt="RimuruS1"
                  className="w-full h-auto"
                />
              </Link>
              <div className="p-4 items-center text-center justify-center">
                <Link href="/rimurus1">
                  <h2 className="my-6 text-black text-2xl font-bold text-center uppercase hover:text-white">
                    Tensei Shitara Slime Data Ken Season 1
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
