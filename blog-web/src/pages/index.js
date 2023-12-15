import Allblog from "@/components/AllblogPost/Allblog";
import Card from "@/components/Trending/Card";
import Carousel from "@/components/Slider/Carousel";
import NoPage from "@/pages/NoPage";

export default function Home() {
  return (
    <main className="bg-white flex flex-col gap-[20px]">
      <Carousel />
      <Card />
      <Allblog />
    </main>
  );
}
