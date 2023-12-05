import Union from "@/SVG/Union";
import Search from "@/SVG/Search";
function Navbar() {
  return (
    <div className="flex h-[6.25rem] gap-3 py-[32px] pr-[60px] justify-center">
      <div className="flex text-black items-center gap-[20rem] justify-center w-[70rem] h-[2.25rem]">
        <div>
          <Union />
        </div>
        <div className="flex gap-[4rem] h-[36px]">
          <div className="flex gap-[2rem] items-center">
            <p>Home</p>
            <p>Blog</p>
            <p>Contact</p>
          </div>
          <div className="flex items-center bg-gray-100 rounded-sm">
            <input
              type="text"
              placeholder="Search.."
              name="search"
              className="bg-gray-100 rounded-sm"
            />
            <Search />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
