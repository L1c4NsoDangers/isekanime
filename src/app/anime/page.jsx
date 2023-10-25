import CorouselView from "@/components/anime-view/carousel-view";
import AnimeView from "@/components/anime-view/view";
import TransitionLayout from "@/components/transition-layout";
import React from "react";

export default function Anime() {
  return (
    <div className="bg-black">
      <TransitionLayout />
      <CorouselView />
      <AnimeView />
    </div>
  );
}
