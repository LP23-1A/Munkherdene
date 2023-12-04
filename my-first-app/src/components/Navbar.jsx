import { useState } from "react";
import Layout from "./Layout";
import Logo from "@/icons/Logo";
import MenuIcon from "@/icons/MenuIcon";
import Mobile from "@/components/Mobile";
import Theme from "@/icons/Theme";
import { useTheme } from "next-themes";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const menuOpen = () => {
    setIsOpen(!isOpen);
  };

  const Toggle = () => {
    if (theme === "dark") {
      setTheme("light");
    }
    if (theme === "light") {
      setTheme("dark");
    }
  };

  return (
    <Layout>
      <div className="w-full flex justify-between items-center py-4">
        <Logo />
        <button className="md:hidden" onClick={menuOpen}>
          <MenuIcon />
        </button>
        <div className="hidden md:flex items-center gap-4">
          <ul className="py-4 flex gap-4">
            {["About", "Work", "Testimonials", "Experience"].map((item) => (
              <li className="list-none">{item}</li>
            ))}
          </ul>
          <button onClick={Toggle}>
            <Theme />
          </button>
          <button className="w-full bg-black text-white px-4 py-1.5 rounded-lg font-medium">
            Download CV
          </button>
        </div>
      </div>
      {isOpen && <Mobile setIsOpen={setIsOpen} />}
    </Layout>
  );
}
