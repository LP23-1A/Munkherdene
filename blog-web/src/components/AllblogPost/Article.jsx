import Beach from "@/Image/Beach.png";
function Post() {
  const posts = [
    {
      image: Beach.src,
      category: "Technology",
      text: "The Impact of Technology on the Workplace: How Technology is Changing",
      date: "August 20, 2022",
    },
    {
      image: Beach.src,
      category: "Te",
      text: "The Impact of Technology on the Workplace: How Technology is Changing",
      date: "August 20, 2022",
    },
    {
      image: Beach.src,
      category: "Technology",
      text: "The Impact of Technology on the Workplace: How Technology is Changing",
      date: "August 20, 2022",
    },
    {
      image: Beach.src,
      category: "Technology",
      text: "The Impact of Technology on the Workplace: How Technology is Changing",
      date: "August 20, 2022",
    },
    {
      image: Beach.src,
      category: "Te",
      text: "The Impact of Technology on the Workplace: How Technology is Changing",
      date: "August 20, 2022",
    },
    {
      image: Beach.src,
      category: "Technology",
      text: "The Impact of Technology on the Workplace: How Technology is Changing",
      date: "August 20, 2022",
    },
    {
      image: Beach.src,
      category: "Technology",
      text: "The Impact of Technology on the Workplace: How Technology is Changing",
      date: "August 20, 2022",
    },
    {
      image: Beach.src,
      category: "Te",
      text: "The Impact of Technology on the Workplace: How Technology is Changing",
      date: "August 20, 2022",
    },
    {
      image: Beach.src,
      category: "Technology",
      text: "The Impact of Technology on the Workplace: How Technology is Changing",
      date: "August 20, 2022",
    },
  ];
  return (
    <div className="flex flex-wrap gap-4 max-w-5xl">
      {posts.map((post, index) => (
        <div
          key={index}
          className="flex flex-col border border-neutrol-300 rounded-lg w-[330px]"
        >
          <div className="flex gap-[12px] p-4 flex-col">
            <img src={post.image} alt="" className="h-40 rounded-lg" />
            <div className="flex flex-col gap-[12px]">
              <button className="bg-gray-100 w-[6rem] h-[2rem] rounded-lg text-blue-700 font-medium font-sans">
                {post.category}
              </button>
              <p className="text-xl text-black font-sans font-semibold">
                {post.text}
              </p>
              <div className="text-gray-400 font-normal font-sans">{post.date}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
export default Post;
