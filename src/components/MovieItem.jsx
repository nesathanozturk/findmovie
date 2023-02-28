import useMovieContext from "../hooks/use-movie-context";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";

function MovieItem({ movies }) {
  const { addMovieAtFavorites } = useMovieContext();

  const renderedMovies = movies.map((movie) => (
    <div
      key={movie.id}
      className="bg-[#1c2b4d] w-80 mb-1 mt-2 relative overflow-hidden rounded-xl cursor-pointer text-center transition-transform hover:scale-105 lg:mt-0"
    >
      <Link to={`/movie/${movie.id}`}>
        <img
          className="w-full h-96"
          src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
          alt={movie.title}
        />
      </Link>
      <div className="flex justify-center items-center flex-col gap-3 text-white text-lg font-semibold py-4 px-4 lg:text-xl">
        <h3>{movie.title}</h3>
        <span>{movie.vote_average}</span>
        <span
          className="absolute top-2 right-2 text-3xl hover:text-yellow-300 transition-colors lg:text-4xl"
          onClick={() => addMovieAtFavorites(movie)}
        >
          <AiFillStar />
        </span>
      </div>
    </div>
  ));

  return (
    <div className="grid grid-cols-1 place-items-center gap-10 mt-4 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
      {renderedMovies}
    </div>
  );
}

export default MovieItem;
