import useMovieContext from "../hooks/use-movie-context";
import MovieItem from "./MovieItem";

function Movies() {
  const { movies } = useMovieContext();

  return (
    <section className="py-4 pl-4">
      <div className="max-w-full m-auto">
        <h1 className="text-white text-2xl ml-6 font-semibold lg:text-3xl">
          Movies
        </h1>
        {movies.length > 0 ? (
          <MovieItem movies={movies} />
        ) : (
          <p className="text-white text-xl mt-4 ml-6">
            There is not any movie you can see at the moment!
          </p>
        )}
      </div>
    </section>
  );
}

export default Movies;
