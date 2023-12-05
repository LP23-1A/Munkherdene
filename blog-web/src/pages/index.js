import Allblog from "@/components/AllblogPost/Allblog";
import Card from "@/components/Trending/Card";
import Navbar from "@/components/Navbar/Navbar";
import Slider from "@/components/Slider/Slider";
import Footer from "@/components/Footer/Footer";
export default function Home() {
  return (
    <main className="bg-white flex flex-col gap-[10px]">
      <Navbar />
      <Slider />
      <Card />
      <Allblog />
      <Footer />
    </main>
  );
}
