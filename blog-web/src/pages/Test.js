import { useState } from "react";

export default function test() {
  const [data, setData] = useState({ published: true });
  const handler = (event) => {
    console.log(event.target.value);
  };
  return (
    <div className=" flex justify-center  items-center p-10 bg-gray-200 rounded-lg w-[500px] h-[300px]">
      <div className="flex gap-[32px] flex-col">
        <input
          onChange={handler}
          type="text"
          placeholder="title"
          className="bg-white rounded-sm"
        />
        <input
          type="text"
          placeholder="description"
          className="bg-white rounded-sm"
        />
        <input type="text" placeholder="tags" className="bg-white rounded-sm" />
        <input
          type="text"
          placeholder="series"
          className="bg-white rounded-sm"
        />
        <button>Create Post</button>
      </div>
    </div>
  );
}
