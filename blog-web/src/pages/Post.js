import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Allblog from "@/components/AllblogPost/Allblog";
export default function container() {
  return (
    <main className="flex flex-col gap-[24px] bg-white">
      <Navbar />
      <Allblog />
      <Footer />
    </main>
  );
}
