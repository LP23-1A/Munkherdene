import Navbar from "@/components/Navbar/Navbar";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
export default function Full() {
  return (
    <main className="flex flex-col bg-white">
      <Navbar />
      <Contact />
      <Footer />
    </main>
  );
}
