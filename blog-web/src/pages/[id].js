import { useEffect, useState } from "react";
import axios, { all } from "axios";
import { useParams } from "next/navigation";

let api = "https://dev.to/api/articles";
export default function Detail() {
  let [Data, setAllData] = useState([]);
  const params = useParams();
  console.log(params, "params");
  let DetailApi = async (api) => {
    let receiver = await axios.get(
      `https://dev.to/api/articles/${params.id || ""}`
    );
    setAllData(receiver.data);
    console.log(receiver);
  };

  useEffect(() => {
    DetailApi(api);
  }, []);

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center w-[800px] mt-[100px]">
        <div>
          <div className="text-[#181A2A] text-4xl font-semibold font-sans ">
            {Data.title}
          </div>
          <div className="flex   mt-[20px] items-center">
            <img
              className="w-9 h-9 rounded-full mr-[10px] "
              src={Data?.user?.profile_image}
              alt=""
            />
            <div className="mr-[24px] text-[#696A75] text-sm font-semibold font-sans">
              {Data?.user?.name}
            </div>
            <div className="mr-[24px] text-[#696A75] text-sm font-sans">
              {Data.readable_publish_date}
            </div>
          </div>
          <div className="flex flex-col gap-[32px]">
            <div className="w-[800px] h-[462px] mt-[32px]">
              <img
                className="w-[800px] h-[462px] rounded-[12px]"
                src={Data?.social_image}
                alt=""
              />
            </div>
            <div className="text-gray-500 ">{Data.body_markdown}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
