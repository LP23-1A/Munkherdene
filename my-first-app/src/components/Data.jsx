import logo from "../assets/logo.png";
const JobCard = () => {
  const jobData = {
    title: "Sr. Frontend Developer",
    points: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Ut pretium arcu et massa semper, id fringilla leo semper.",
      "Sed quis justo ac magna.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    ],
    date: "Nov 2021 - Present",
  };
  return (
    <div className="flex justify-center items-center mt-6">
      <div className="flex flex-col sm:flex-row bg-white border-solid rounded-lg max-w-5xl p-5 shadow-xl gap-8 dark:bg-gray-800">
        <div className="">
          <img src={logo.src} alt="" />
        </div>
        <div className="flex flex-col gap-2 font-Inter font-normal text-gray-600 dark:text-white">
          <h1 className="font-Inter font-normal text-2xl text-black dark:text-white">
            {jobData.title}
          </h1>
          {jobData.points.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </div>
        <div>
          <p>{jobData.date}</p>
        </div>
      </div>
    </div>
  );
};
const Render = () => {
  return (
    <div className="flex justify-center items-center gap-10 flex-col">
      <JobCard />
      <JobCard />
      <JobCard />
    </div>
  );
};
export default Render;
