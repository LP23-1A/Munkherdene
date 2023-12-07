function contact() {
  return (
    <div className="flex flex-col justify-center items-center h-[895px]">
      <div className="flex justify-center items-center">
        <div className="flex w-[769px] h-[389px] flex-col gap-[20px] pt-[14px] px-[10px] pb-0">
          <div className="flex flex-col items-start gap-[20px]">
            <h1 className="font-sans font-bold text-4xl">Contact Us</h1>
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam
            </p>
          </div>
          <div className="flex py-[10px] px-0 gap-[50px]">
            <div className="flex flex-col w-[294px] h-[133px] p-4 gap-[10px] items-start border rounded-md">
              <h1 className="font-sans font-bold text-2xl">Address</h1>
              <p className="text-gray-500">
                Address Contact 1328 Oak Ridge Drive, Saint Louis, Missouri
              </p>
            </div>
            <div className="flex flex-col w-[294px] h-[133px] p-4 gap-[10px] items-start border rounded-md">
              <h1 className="font-sans font-bold text-2xl">Contact</h1>
              <p className="text-gray-500">313-332-8662 info@email.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className="pr-[110px]">
        <div className=" flex justify-center items-start py-[29px] pr-[170px] pb-[26px] bg-gray-200 rounded-lg w-[640px]">
          <div className="flex flex-col items-start gap-[24px]">
            <h1 className="font-sans font-bold text-lg">Leave a Message</h1>
            <div className="flex flex-col gap-[24px]">
              <div className="flex gap-[32px]">
                <input
                  type="text"
                  placeholder="Your name"
                  name=""
                  className="bg-white rounded-sm"
                />
                <input
                  type="text"
                  placeholder="Your Email"
                  name=""
                  className="bg-white rounded-sm"
                />
              </div>
              <div className="flex flex-col gap-[24px]">
                <input
                  type="text"
                  placeholder="Subject"
                  name=""
                  className="bg-white rounded-sm w-full"
                />
                <textarea
                  name=""
                  id=""
                  cols="20"
                  rows="10"
                  className="rounded-sm h-[150px] shadow-lg resize-none"
                ></textarea>
              </div>
              <button className="inline-flex flex-col items-center justify-center rounded-lg bg-blue-600 w-[120px] h-[40px]">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default contact;
