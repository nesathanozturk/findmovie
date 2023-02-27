import useMovieContext from "../hooks/use-movie-context";
import MovieItem from "./MovieItem";

function Movies() {
  const { movies } = useMovieContext();

  return (
    <section className="p-6 mt-6">
      <div className="max-w-full m-auto">
        <h1 className="text-white text-2xl ml-4 font-semibold lg:text-3xl">
          Movies
        </h1>
        {movies.length > 0 ? (
          <MovieItem movies={movies} />
        ) : (
          <p className="text-white text-lg mt-4 ml-4 lg:text-xl">
            There is not any movie you can see at the moment!
          </p>
        )}
      </div>
    </section>
  );
}

export default Movies;
