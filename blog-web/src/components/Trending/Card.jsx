import Carddata from "@/components/Trending/Carddata";
function trend() {
  return (
    <div className="flex flex-col gap-[24px]">
      <div className="pl-[620px]">
        <h1 className="text-2xl font-sans font-bold">Trending</h1>
      </div>
      <div>
        <Carddata />
      </div>
    </div>
  );
}
export default trend;
