import HomeView from "@/components/home-view/view";
import TransitionLayout from "@/components/transition-layout";

export default function Home() {
  return (
    <main>
      <TransitionLayout />
      <HomeView />
    </main>
  );
}
