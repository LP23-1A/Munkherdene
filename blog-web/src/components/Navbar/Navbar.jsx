import React, { useState } from "react";
import Union from "@/SVG/Union";
import Search from "@/SVG/Search";
import { useRouter } from "next/router";
import MenuIcon from "@/components/Navbar/MenuIcon";
import MobileMenu from "@/components/Navbar/MobileMenu";
function Navbar() {
  const router = useRouter();
  const handlermove = () => router.push(`Contact`);
  const homemove = () => router.push(`Home`);
  const blogmove = () => router.push(`Post`);
  const [isOpen, setIsOpen] = useState(false);
  const menuHandler = () => {
    setIsOpen(!isOpen);
  };
  const moveHandlers = {
    homemove,
    blogmove,
    handlermove,
  };
  return (
    <div className="flex flex-col md:flex-row items-center justify-center h-[6.25rem] gap-3 pl-[210px] pr-[60px]">
      <div className="flex items-center gap-[20rem] w-full md:w-[70rem] justify-center">
        <div>
          <Union />
        </div>
        <button className="md:hidden" onClick={menuHandler}>
          <MenuIcon />
        </button>
        <div className="flex flex-grow gap-[4rem] items-center">
          <div className="flex gap-[2rem] items-center list-none">
            <p
              onClick={homemove}
              className="cursor-pointer hover:text-gray-400"
            >
              Home
            </p>
            <p
              onClick={blogmove}
              className="cursor-pointer hover:text-gray-400"
            >
              Blog
            </p>
            <p
              onClick={handlermove}
              className="cursor-pointer hover:text-gray-400"
            >
              Contact
            </p>
          </div>
          <div className="flex items-center bg-gray-100 rounded-sm">
            <input
              type="text"
              placeholder="Search.."
              name="search"
              className="bg-gray-100 rounded-sm"
            />
            <Search />
          </div>
        </div>
      </div>
      <MobileMenu
        isOpen={isOpen}
        menuHandler={menuHandler}
        moveHandlers={moveHandlers}
      />
    </div>
  );
}
export default Navbar;
