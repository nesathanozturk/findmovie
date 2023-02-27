import useMovieContext from "../hooks/use-movie-context";
import MovieItem from "./MovieItem";

function Movies() {
  const { movies } = useMovieContext();

  return (
    <section className="py-4 pl-4">
      <div className="max-w-full m-auto">
        <h1 className="text-white text-2xl ml-6 lg:text-3xl">Movies</h1>
        <MovieItem movies={movies} />
      </div>
    </section>
  );
}

export default Movies;
