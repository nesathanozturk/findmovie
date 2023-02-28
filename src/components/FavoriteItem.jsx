import useMovieContext from "../hooks/use-movie-context";
import { Link } from "react-router-dom";
import { MdOutlineRemoveCircleOutline } from "react-icons/md";

function FavoriteItem({ favorites }) {
  const { removeMovieAtFavorites } = useMovieContext();

  const renderedFavorites = favorites.map((favorite) => (
    <div
      key={favorite.id}
      className="bg-[#1c2b4d] w-80 mb-1 mt-2 relative overflow-hidden rounded-xl cursor-pointer text-center transition-transform hover:scale-105 lg:mt-0"
    >
      <Link to={`/movie/${favorite.id}`}>
        <img
          className="w-full h-96"
          src={`https://image.tmdb.org/t/p/original${favorite.poster_path}`}
          alt={favorite.title}
        />
      </Link>
      <div className="flex justify-center items-center flex-col gap-3 text-white text-lg font-semibold py-4 px-4 lg:text-xl">
        <h3>{favorite.title}</h3>
        <span>{favorite.vote_average}</span>
        <span
          className="absolute top-2 right-2 text-3xl text-red-600 hover:text-red-700 transition-colors lg:text-4xl"
          onClick={() => removeMovieAtFavorites(favorite)}
        >
          <MdOutlineRemoveCircleOutline />
        </span>
      </div>
    </div>
  ));

  return (
    <div className="grid grid-cols-1 place-items-center gap-10 mt-4 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
      {renderedFavorites}
    </div>
  );
}

export default FavoriteItem;
