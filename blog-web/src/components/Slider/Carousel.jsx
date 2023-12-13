import { useState } from "react";
import Back from "@/SVG/Back";
import Forward from "@/SVG/Forward";

function Tech() {
  const slides = [
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTodOx_2DLcDu48mEDo3CFnhTFPhRTlVRqyQbQOsC49PuR4mmHVlP6sUSuv2DOqaU24SNY&usqp=CAU",
    },
    {
      url: "https://images.unsplash.com/photo-1702330160742-c2d920ac3028?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8fA==",
    },
    {
      url: "https://images.unsplash.com/photo-1682687218608-5e2522b04673?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8fA==",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const prevSlide = () => {
    if (currentIndex === 0) {
      setCurrentIndex(slides.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };
  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    if (isLastSlide) {
      setCurrentIndex(0);
    } else {
      const newIndex = currentIndex + 1;
      setCurrentIndex(newIndex);
    }
  };
  return (
    <div className="flex flex-col justify-center items-center relative gap-[12px] max-sm:hidden">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="relative w-[1000px] h-[500px] rounded-lg"
      ></div>
      <div className="flex pr-[980px] pb-[30px] absolute">
        <div className="bg-white w-[598px] h-[230px] absolute rounded-lg">
          <div className=" flex flex-col gap-[12px] p-10">
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
        <div onClick={prevSlide}>
          <Back />
        </div>
        <div onClick={nextSlide}>
          <Forward />
        </div>
      </div>
    </div>
  );
}
export default Tech;
