import { useState } from "react";
import Back from "@/SVG/Back";
import Forward from "@/SVG/Forward";
import Note from "@/Image/Note.png";
import Mountain from "@/Image/Mountain.png";
import Img from "@/Image/Img.png";

export default function Tech() {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [Note, Mountain, Img];
  const handleBack = () => {
    if (currentImage === 0) {
      setCurrentImage(images.length - 1);
    } else {
      setCurrentImage((prev) => prev - 1);
    }
  };
  const handleForward = () => {
    if (currentImage === images.length - 1) {
      setCurrentImage(0);
    } else {
      setCurrentImage((prev) => prev + 1);
    }
  };
  return (
    <div className="flex flex-col justify-center items-center relative gap-[12px] max-sm:hidden">
      <img
        src={images[currentImage]}
        alt=""
        className="w-[1000px] h-[500px] rounded-lg"
      />
      <div className="flex pr-[980px] pb-[30px] absolute">
        <div className="bg-white w-[598px] h-[230px] absolute rounded-lg">
          <div className="flex flex-col gap-[12px] p-10">
            <button className="bg-blue-600 w-[6rem] h-[2rem] rounded-lg text-white font-medium font-sans">
              Technology
            </button>
            <p className="text-3xl font-sans font-semibold">
              Grid system for better Design User Interface
            </p>
            <p className="text-gray-400 font-sans font-normal">
              August 20, 2022
            </p>
          </div>
        </div>
      </div>
      <div className="flex gap-2 justify-between pl-[910px]">
        <div onClick={handleBack}>
          <Back />
        </div>
        <div onClick={handleForward}>
          <Forward />
        </div>
      </div>
    </div>
  );
}
