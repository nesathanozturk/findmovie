import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header>
      <div className="w-full h-[70px] flex justify-between items-center py-8">
        <h1 className="text-white text-3xl pl-10 font-semibold">
          <Link to="/">
            Find<span className="text-orange-500">Movie</span>
          </Link>
        </h1>
        <input
          type="text"
          placeholder="Search a movie"
          className="bg-transparent mt-2 p-2 rounded-lg outline-none bg-gray-600 text-white"
        />
        <nav>
          <ul className="flex px-10 text-orange-500 text-lg font-bold">
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
