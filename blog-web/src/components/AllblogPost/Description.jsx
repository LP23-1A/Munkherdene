import axios from "axios";
import { useEffect, useState } from "react";
import Profile from "@/Image/Profile.png";
import Img from "@/Image/Img.png";

let api = "https://dev.to/api/articles?username=gereltuyamz";
export default function container() {
  const [data, setData] = useState([]);
  const getData = async (api) => {
    let res = await axios.get(api);
    setData((prev) => [...prev, ...res.data]);
    getData("https://dev.to/api/articles/me/all");
  };
  useEffect(() => {
    getData(api);
  }, []);
  return (
    <div className="flex flex-col gap-[12px] justify-center items-center bg-white">
      <div className="flex flex-col gap-[12px] w-[830px]">
        {data.map((el, index) => (
          <div>
            <div className="flex flex-col gap-[24px]">
              <h1 className="font-bold font-sans text-2xl">{el.title}</h1>
              <div className="flex text-gray-500 gap-[32px] items-center">
                <div className="flex items-center justify-center gap-[6px] flex-col">
                  <img src={el.cover_image} alt="" />
                  <p>{el.description}</p>
                </div>
                <p>{el.published_at}</p>
              </div>
            </div>
            <div className="flex flex-col gap-[12px] ">
              <p className="text-gray-600"></p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
