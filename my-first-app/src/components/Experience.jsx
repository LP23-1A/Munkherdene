import Data from "@/components/Data";
function one() {
  return (
    <div className="flex flex-col bg-gray-50 dark:bg-gray-900">
      <div className=" flex flex-col gap-6 p-10">
        <div className="flex flex-col justify-center items-center gap-3">
          <button className="flex bg-gray-600 justify-center items-center w-28 h-7 rounded-lg">
            Experience
          </button>
          <p className="text-gray-600 text-xl">
            Here is a quick summary of my most recent experiences:
          </p>
        </div>
        <Data />
      </div>
    </div>
  );
}
export default one;
