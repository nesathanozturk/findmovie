import useMovieContext from "../hooks/use-movie-context";
import { AiFillStar } from "react-icons/ai";

function MovieItem({ movies }) {
  const { addMovieAtFavorites } = useMovieContext();

  const renderedMovies = movies.map((movie) => (
    <div
      key={movie.imdbID}
      className="bg-[#1c2b4d] bg- w-80 mb-1 relative overflow-hidden rounded-xl cursor-pointer text-center transition-transform hover:scale-105"
    >
      <img className="w-full h-96" src={movie.Poster} alt={movie.Title} />
      <div className="flex justify-center items-center flex-col gap-3 text-white text-xl font-semibold py-4 px-4">
        <h3>{movie.Title}</h3>
        <span>{movie.Year}</span>
        <span
          className="absolute top-2 right-2 text-3xl hover:text-yellow-300 transition-colors"
          onClick={() => addMovieAtFavorites(movie)}
        >
          <AiFillStar />
        </span>
      </div>
    </div>
  ));

  return (
    <div className="grid grid-cols-1 place-items-center gap-10 mt-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
      {renderedMovies}
    </div>
  );
}

export default MovieItem;
