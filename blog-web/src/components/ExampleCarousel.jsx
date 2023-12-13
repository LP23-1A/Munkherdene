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
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  return (
    <div className="flex flex-col justify-center items-center relative gap-12 max-sm:hidden">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="relative w-full sm:w-3/4 md:w-4/5 lg:w-[800px] xl:w-[1000px] h-96 rounded-lg overflow-hidden"
      >
        <div className="bg-white w-3/4 h-[230px] rounded-lg text-black transition-transform duration-500 ease-in-out transform absolute bottom-0 left-1/2 translate-x-[-50%]">
          <div className="flex flex-col gap-4 p-10">
            <button className="bg-blue-600 w-32 h-12 rounded-lg text-white font-medium font-sans">
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
      <div className="flex gap-2 justify-between mt-2">
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
