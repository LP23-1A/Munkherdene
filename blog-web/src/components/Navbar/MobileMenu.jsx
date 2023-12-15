import React from "react";
import MenuIcon from "@/components/Navbar/MenuIcon";
import { useRouter } from "next/router";
import CloseIcon from "@/components/Navbar/CloseIcon";
import Search from "@/SVG/Search";

const MobileMenu = ({ isOpen, moveHandlers }) => {
  const router = useRouter();
  const closeHandler = () => {
    props.setIsOpen(false);
  };
  return (
    <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
      <div className="flex flex-col items-center">
        <button onClick={closeHandler}>
          <CloseIcon />
        </button>
        <p
          onClick={moveHandlers.homemove}
          className="cursor-pointer hover:text-gray-400 text-2xl"
        >
          Home
        </p>
        <p
          onClick={moveHandlers.blogmove}
          className="cursor-pointer hover:text-gray-400 text-2xl"
        >
          Blog
        </p>
        <p
          onClick={moveHandlers.handlermove}
          className="cursor-pointer hover:text-gray-400 text-2xl"
        >
          Contact
        </p>
      </div>
      <hr></hr>
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
  );
};
export default MobileMenu;
