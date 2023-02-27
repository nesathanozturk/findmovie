import useMovieContext from "../hooks/use-movie-context";
import { MdOutlineRemoveCircleOutline } from "react-icons/md";

function FavoriteItem({ favorites }) {
  const { removeMovieAtFavorites } = useMovieContext();

  const renderedFavorites = favorites.map((favorite) => (
    <div
      key={favorite.imdbID}
      className="bg-[#1c2b4d] bg- w-80 mb-1 relative overflow-hidden rounded-xl cursor-pointer text-center transition-transform hover:scale-105"
    >
      <img className="w-full h-96" src={favorite.Poster} alt={favorite.Title} />
      <div className="flex justify-center items-center flex-col gap-3 text-white text-xl font-semibold py-4 px-4">
        <h3>{favorite.Title}</h3>
        <span>{favorite.Year}</span>
        <span
          className="absolute top-2 right-2 text-3xl text-red-600 hover:text-red-700 transition-colors"
          onClick={() => removeMovieAtFavorites(favorite)}
        >
          <MdOutlineRemoveCircleOutline />
        </span>
      </div>
    </div>
  ));

  return (
    <div className="grid grid-cols-1 place-items-center gap-10 mt-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
      {renderedFavorites}
    </div>
  );
}

export default FavoriteItem;
