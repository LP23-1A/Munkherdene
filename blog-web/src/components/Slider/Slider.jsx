import Img from "@/Image/Img.png";
import Back from "@/SVG/Back";
import Forward from "@/SVG/Forward";
function Tech() {
  return (
    <div className="flex flex-col justify-center items-center relative gap-[12px]">
      <img src={Img.src} alt="" className="w-[1000px] h-[500px] shrink-0 " />
      <div className="flex pr-[980px] pt-[30px] absolute">
        <div className="bg-white w-[598px] h-[200px] absolute rounded-lg">
          <div className="p-10 flex flex-col gap-[12px]">
            <button className="bg-blue-600 w-[6rem] h-[2rem] rounded-lg text-white">
              Technology
            </button>
            <p className="text-2xl">
              Grid system for better Design User Interface
            </p>
            <p className="text-gray-400">August 20, 2022</p>
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
