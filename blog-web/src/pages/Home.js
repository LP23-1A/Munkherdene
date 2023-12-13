import Slider from "@/components/Slider/Carousel";
import Card from "@/components/Trending/Card";
import Allblog from "@/components/AllblogPost/Allblog";

export default function contain() {
  return (
    <main className="flex flex-col gap-[20px] bg-white">
      <Slider />
      <Card />
      <Allblog />
    </main>
  );
}
