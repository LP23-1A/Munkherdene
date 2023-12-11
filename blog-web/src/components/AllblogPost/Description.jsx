import axios from "axios";
import { useEffect, useState } from "react";
let api = "https://dev.to/api/articles?username=gereltuyamz";
export default function container() {
  const [data, setData] = useState([]);

  const getData = async (api) => {
    let res = await axios.get(api);
    setData((prev) => [...prev, ...res.data]);
  };
  useEffect(() => {
    getData(api);
  }, []);
  return (
    <div className="flex flex-wrap gap-4 max-w-5xl">
      {data.map((el) => (
        <div className="flex flex-col border border-neutrol-300 rounded-lg w-[330px]">
          <div className="flex gap-[12px] p-4 flex-col">
            <img src={el.social_image} alt="" className="h-40 rounded-lg" />
            <div className="flex flex-col gap-[12px]">
              <button className="bg-gray-100 w-[6rem] h-[2rem] rounded-lg text-blue-700 font-medium font-sans">
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
  );
}