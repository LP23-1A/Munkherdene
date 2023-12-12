import Img from "@/Image/Img.png";
import Back from "@/SVG/Back";
import Forward from "@/SVG/Forward";
function Tech() {
  return (
    <div className="flex flex-col justify-center items-center relative gap-[12px] max-sm:hidden">
      <img src={Img.src} alt="" className="w-[1000px] h-[500px]" />
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
        <Back />
        <Forward />
      </div>
    </div>
  );
}
export default Tech;
