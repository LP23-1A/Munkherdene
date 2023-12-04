import React from "react";
import Beach from "@/Image/Beach.png";
function Post() {
  const posts = [
    {
      image: Beach.src,
      category: "Technology",
      title:
        "The Impact of Technology on the Workplace: How Technology is Changing",
      date: "August 20, 2022",
    },
    {
      image: Beach.src,
      category: "Te",
      title:
        "The Impact of Technology on the Workplace: How Technology is Changing",
      date: "August 20, 2022",
    },
    {
      image: Beach.src,
      category: "Technology",
      title:
        "The Impact of Technology on the Workplace: How Technology is Changing",
      date: "August 20, 2022",
    },
  ];
  return (
    <div className="flex flex-col">
      <div className="flex gap-4 w-[65rem] h-[30rem] p-[1rem]">
        {posts.map((post) => (
          <div className="flex flex-col gap-3 border border-neutrol-300 rounded-lg">
            <img
              src={post.image}
              alt=""
              className="w-[22rem] h-[15rem] rounded-lg p[1rem] p-[1rem]"
            />
            <div className="p-[1rem]">
              <button className="bg-gray-100 w-[6rem] h-[2rem] rounded-lg text-blue-700">
                {post.category}
              </button>
              <p className="text-2xl text-black">{post.title}</p>
              <div className="text-gray-400 p-[0.2rem]">{post.date}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Post;
