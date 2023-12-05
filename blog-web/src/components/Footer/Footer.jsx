import Facebook from "@/SVG/Facebook";
import Twitter from "@/SVG/Twitter";
import Instagram from "@/SVG/Instagram";
import Linkedin from "@/SVG/LinkedIn";
function footer() {
  return (
    <div className="bg-gray-200 flex h-[495px] flex-col items-center gap-[25px] pt-[64px] px-[352px] pb-0 shrink-0">
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
        <div className="flex flex-col w-[521px] justify-center items-start `gap-[80px]` text-gray-500 shrink-0">
          <p>Home</p>
          <p>Blog</p>
          <p>Contact</p>
        </div>
        <div className="flex gap-[12px]">
          <Facebook />
          <Twitter />
          <Instagram />
          <Linkedin />
        </div>
      </div>
    </div>
  );
}
export default footer;
