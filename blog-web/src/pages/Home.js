import Navbar from "@/components/Navbar/Navbar";
import Slider from "@/components/Slider/Carousel";
import Card from "@/components/Trending/Card";
import Allblog from "@/components/AllblogPost/Allblog";
import Footer from "@/components/Footer/Footer";

export default function contain() {
  return (
    <main className="flex flex-col gap-[20px] bg-white">
      <Navbar />
      <Slider />
      <Card />
      <Allblog />
      <Footer />
    </main>
  );
}
