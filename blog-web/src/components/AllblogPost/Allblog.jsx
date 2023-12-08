import Article from "@/components/AllblogPost/Article";
import { useRouter } from "next/router";
function one() {
  const router = useRouter();
  const movePage = () => router.push(`Post`);
  return (
    <div className="flex flex-col gap-[24px] bg-white">
      <div className="pl-[620px]">
        <h1 className="text-2xl font-sans font-bold">All Blog Post</h1>
      </div>
      <div className="flex justify-center gap-[545px]">
        <div className="flex gap-[12px] items-start justify-start font-sans font-bold">
          <p>All</p>
          <p>Design</p>
          <p>Travel</p>
          <p>Fashion</p>
          <p>Technology</p>
          <p>Branding</p>
        </div>
        <div className="font-sans font-bold">
          <p onClick={movePage} className="cursor-pointer hover:text-gray-400">
            View All
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <Article />
      </div>
    </div>
  );
}
export default one;
