import Allblog from "@/components/AllblogPost/Allblog";
import Card from "@/components/Trending/Card";
import Navbar from "@/components/Navbar/Navbar";
import Carousel from "@/components/Slider/Carousel";
import Footer from "@/components/Footer/Footer";
import NoPage from "@/pages/NoPage";
import ExampleCarousel from "@/components/ExampleCarousel";

export default function Home() {
  return (
    <main className="bg-white flex flex-col gap-[20px]">
      <Navbar />
      {/* <NoPage /> */}
      {/* <Carousel /> */}
      <ExampleCarousel />
      <Card />
      <Allblog />
      <Footer />
      {/* <Test /> */}
    </main>
  );
}
