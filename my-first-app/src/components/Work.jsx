import Workcontent from "@/components/Workcontent";
function Full() {
  return (
    <div className="flex justify-center flex-col items-center gap-6">
      <button className="w-28 h-7 rounded-lg bg-gray-600">Work</button>
      <p className="text-gray-600 text-xl">
        Some of the noteworthy projects I have built:
      </p>
      <Workcontent />
    </div>
  );
}
export default Full;
