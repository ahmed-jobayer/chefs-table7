import { IoSearch } from "react-icons/io5";

const Header = () => {
  return (
    <div className="container mx-auto">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <a className="btn btn-ghost text-xl">Recipe Calories</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
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
          <div className="">
            <label className=" bg-[#150B2D0D] flex items-center gap-2">
              <IoSearch></IoSearch>
              <input type="text" className="border-none" placeholder="Search" />
            </label>
          </div>
          <div className="avatar">
            <div className="w-9 rounded-full ">
              <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
