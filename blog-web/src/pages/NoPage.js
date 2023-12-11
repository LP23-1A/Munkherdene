import Navbar from "@/components/Navbar/Navbar";
import NoPage from "@/components/NoPage/NoPage";
import Footer from "@/components/Footer/Footer";
export default function main() {
  return (
    <main className="flex flex-col gap-[190px] bg-white">
      <Navbar />
      <NoPage />
      <Footer />
    </main>
  );
}
