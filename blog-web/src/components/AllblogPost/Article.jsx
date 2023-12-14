import axios from "axios";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

let api = "https://dev.to/api/articles";
function Post() {
  const [data, setData] = useState([]);

  const [visibleData, setVisibleData] = useState([]);
  const [visibleItemCount, setVisibleItemCount] = useState(12);

  const callData = async (api) => {
    let response = await axios.get(api);
    setData((allData) => [...allData, ...response.data]);
  };

  const handler = () => {
    setVisibleItemCount((prevCount) => prevCount + 6);
  };

  useEffect(() => {
    callData(api);
  }, []);
  const router = useRouter();
  const singlePost = (id) => router.push(`/info/${id}`);

  useEffect(() => {
    setVisibleData(data.slice(0, visibleItemCount));
  }, [data, visibleItemCount]);

  return (
    <div className="flex flex-col justify-center items-center gap-10">
      <div className="flex flex-wrap gap-4 max-w-5xl justify-center">
        {visibleData.map((el, index) => (
          <div
            key={index}
            className="flex flex-col border border-neutrol-300 rounded-lg w-[330px]"
            onClick={() => singlePost(el.id)}
          >
            <div className="flex gap-[12px] p-4 flex-col">
              <div
                className="h-40 rounded-lg bg-cover"
                style={{
                  backgroundImage: `url(${el.social_image})`,
                }}
              ></div>
              <div className="flex flex-col gap-[12px]">
                <button className="bg-gray-100 w-fit h-[2rem] rounded-lg text-blue-700 font-medium font-sans flex ga-[6px] justify-center items-center">
                  {el.tag_list}
                </button>
                <p className="text-xl text-black font-sans font-semibold">
                  {el.description}
                </p>
                <div className="text-gray-400 font-normal font-sans">
                  {el.readable_publish_date}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={handler}
        className="w-[100px] h-[40px] text-gray-500 border rounded-lg"
      >
        Load more
      </button>
    </div>
  );
}
export default Post;
