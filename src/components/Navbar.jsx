import { Link } from "react-router-dom";

function Navbar({ searchValue, setSearchValue }) {
  return (
    <header>
      <div className="w-full h-[80px] flex flex-col items-center gap-2 py-8 lg:flex-row lg:justify-between lg:items-center">
        <h1 className="text-white mr-8 text-2xl lg:text-3xl pl-10 font-semibold lg:mr-0">
          <Link to="/">
            Find<span className="text-orange-500">Movie</span>
          </Link>
        </h1>
        <input
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Search a movie"
          className="bg-transparent w-56 p-2 rounded-lg outline-none bg-gray-600 text-white lg:w-64 lg:mt-2"
        />
        <nav>
          <ul className="flex px-10 text-orange-500 text-base lg:text-lg font-bold">
            <li className="mr-4 hover">
              <Link to="/">Home</Link>
            </li>
            <li className="hover">
              <Link to="/favorites">Favorites</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
