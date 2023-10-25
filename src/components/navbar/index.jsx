"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import SearchComponent from "../search-component";

export default function Navbar() {
  const [activeLink, setActiveLink] = useState("home");
  const [scrollActive, setScrollActive] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollActive(window.scrollY > 20);
    });
  }, []);

  const MotionLink = motion(Link);

  return (
    <>
      <header
        className={`fixed top-0 w-full z-30 bg-black transition-all ${
          scrollActive ? "shadow-md shadow-black py-2" : "py-2"
        }`}
      >
        <nav className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto grid grid-flow-col py-3 sm:py-4">
          <div className="col-start-1 col-end-2 flex items-center">
            <div className="hidden md:flex cursor-pointer gap-2 font-bold items-center text-[20px] text-orange-600 ">
              <MotionLink
                href="/"
                className="w-10 h-10 bg-orange-600 text-black flex text-2xl items-center justify-center rounded font-bold"
                whileHover={{
                  backgroundColor: [
                    "rgb(234, 88, 12, 1)",
                    "rgb(236, 191, 12, 1)",
                    "rgb(236, 19, 12, 1)",
                    "rgb(19, 236, 12, 1)",
                    "rgb(12, 236, 221, 1)",
                    "rgb(234, 88, 12, 1)",
                  ],
                  transition: { duration: 1, repeat: Infinity },
                }}
              >
                I
              </MotionLink>
              SEKANIME
            </div>
          </div>
          <ul className="hidden lg:flex col-start-4 col-end-8 text-black items-center">
            <li
              className={`px-4 py-2 mx-2 cursor-pointer inline-block relative
                ${
                  activeLink === "home"
                    ? "text-orange-600 shadow-orange-600"
                    : "text-orange-600 font-bold hover:text-white"
                }
              `}
            >
              <Link href="/" onClick={() => setActiveLink("home")}>
                Home
              </Link>
            </li>
            <li
              className={`px-4 py-2 mx-2 cursor-pointer inline-block relative
                ${
                  activeLink === "anime"
                    ? "text-orange-600 shadow-orange-600"
                    : "text-orange-600 font-bold hover:text-white"
                }
              `}
            >
              <Link href="/anime" onClick={() => setActiveLink("anime")}>
                Anime
              </Link>
            </li>

            <li
              className={`px-4 py-2 mx-2 cursor-pointer inline-block relative
                ${
                  activeLink === "projects"
                    ? "text-orange-600 shadow-orange-600"
                    : "text-orange-600 font-bold hover:text-white"
                }
              `}
            >
              <Link
                href="/animelist"
                onClick={() => setActiveLink("animelist")}
              >
                Anime List
              </Link>
            </li>
            <li
              className={`px-4 py-2 mx-2 cursor-pointer inline-block relative
                ${
                  activeLink === "article"
                    ? "text-orange-600 shadow-orange-600"
                    : "text-orange-600 font-bold hover:text-white"
                }
              `}
            >
              <Link href="/group" onClick={() => setActiveLink("group")}>
                Group
              </Link>
            </li>
          </ul>
          <div className="col-start-10 col-end-12 font-medium flex justify-center items-center">
            <SearchComponent />
          </div>
        </nav>
      </header>
      <nav className="fixed lg:hidden bottom-0 left-0 right-0 z-20 shadow-t">
        <div className="bg-black sm:px-3">
          <ul className="overflow-x-auto flex w-full justify-between items-center text-black">
            <li
              className={`px-4 py-2 mx-2 cursor-pointer inline-block relative
                ${
                  activeLink === "home"
                    ? "text-orange-600 shadow-orange-600"
                    : "text-orange-600 font-bold hover:text-white"
                }
              `}
            >
              <Link href="/" onClick={() => setActiveLink("home")}>
                Home
              </Link>
            </li>
            <li
              className={`px-4 py-2 mx-2 cursor-pointer inline-block relative
                ${
                  activeLink === "about"
                    ? "text-orange-600 shadow-orange-600"
                    : "text-orange-600 font-bold hover:text-white"
                }
              `}
            >
              <Link href="/anime" onClick={() => setActiveLink("anime")}>
                Anime
              </Link>
            </li>

            <li
              className={`px-4 py-2 mx-2 cursor-pointer inline-block relative
                ${
                  activeLink === "projects"
                    ? "text-orange-600 shadow-orange-600"
                    : "text-orange-600 font-bold hover:text-white"
                }
              `}
            >
              <Link
                href="/animelist"
                onClick={() => setActiveLink("animelist")}
              >
                List
              </Link>
            </li>
            <li
              className={`px-4 py-2 mx-2 cursor-pointer inline-block relative
                ${
                  activeLink === "article"
                    ? "text-orange-600 shadow-orange-600"
                    : "text-orange-600 font-bold hover:text-white"
                }
              `}
            >
              <Link href="/group" onClick={() => setActiveLink("group")}>
                Group
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
