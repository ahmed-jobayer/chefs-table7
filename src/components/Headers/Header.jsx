import { IoSearch } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";

const Header = () => {
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <a className=" text-3xl font-bold border-none">Recipe Calories</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-[#0F0B43B3]">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Recipes</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Search</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end gap-1">
          <label className="input input-bordered flex items-center gap-2 mr-4 bg-[#0F0B2B0D] rounded-[50px]">
            <IoSearch></IoSearch>
            <input type="text" className="grow border-none" placeholder="Search" />
          </label>
          <div className="avatar">
            <div className="rounded-full  ">
              <CgProfile className="bg-[#0BE58A] text-3xl p-1 " />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
