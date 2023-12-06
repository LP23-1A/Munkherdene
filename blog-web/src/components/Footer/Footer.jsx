import Facebook from "@/SVG/Facebook";
import Twitter from "@/SVG/Twitter";
import Instagram from "@/SVG/Instagram";
import Linkedin from "@/SVG/LinkedIn";
import Beta from "@/SVG/Beta";
function footer() {
  return (
    <div className="bg-gray-200 flex h-[495px] flex-col items-center gap-[25px] pt-[64px] pl-[200px] pb-0 shrink-0">
      <div className="flex w-[1215px] items-start gap-[20px]">
        <div className="flex w-[289px] flex-col items-start gap-[24px] shrink-0">
          <div className="flex flex-col items-start gap-[12px]">
            <h1 className="text-2xl">About</h1>
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet,<br></br> consectetur adipiscing elit,
              sed do<br></br>
              eiusmod tempor incididunt ut<br></br> labore et dolore magna
              aliqua. Ut<br></br>
              enim ad minim veniam
            </p>
          </div>
          <div className="flex flex-col items-start">
            <p>Email : info@jstemplate.net</p>
            <p>Phone : 880 123 456 789</p>
          </div>
        </div>
        <div className="flex flex-col w-[521px] gap-[80px] text-gray-500 ">
          <div className="flex flex-col gap-[8px] justify-center items-center">
            <p>Home</p>
            <p>Blog</p>
            <p>Contact</p>
          </div>
        </div>
        <div className="flex gap-6">
          <Facebook />
          <Twitter />
          <Instagram />
          <Linkedin />
        </div>
      </div>
      <div className="flex w-[1216px] h-[95px] py-[32px] px-0 items-center gap-[430px]">
        <div className="flex items-center gap-[10px]">
          <Beta />
          <div className="flex flex-col items-start gap-[2px]">
            <p>MetaBlog</p>
            <p>© All Rights Reserved.</p>
          </div>
        </div>
        <div className="flex justify-end items-center gap-[16px]">
          <p>Terms of Use</p>
          <hr />
          <p>Privacy Policy</p>
          <hr />
          <p>Cookie Policy</p>
        </div>
      </div>
    </div>
  );
}
export default footer;
