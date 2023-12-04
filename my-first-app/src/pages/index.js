import Navbar from "@/components/Navbar";
import Main from "@/components/Main";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Work from "@/components/Work";
import Get from "@/components/Get";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <section className="flex flex-col gap-10 m-0 p-0 box-border">
      <Navbar />
      <Main />
      <About />
      <Skills />
      <Experience />
      <Work />
      <Get />
      <Footer />
    </section>
  );
}
