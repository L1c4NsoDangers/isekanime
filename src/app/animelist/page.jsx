import CorouselView from "@/components/anime-view/carousel-view";
import AnimeListView from "@/components/animelist-view/view";
import TransitionLayout from "@/components/transition-layout";
import React from "react";

export default function AnimeList() {
  return (
    <div>
      <TransitionLayout />
      <CorouselView />
      <AnimeListView />
    </div>
  );
}
