import MovieItem from "./MovieItem";

function Movies({ movies }) {
  return (
    <section className="py-8 pl-4">
      <div className="max-w-full m-auto">
        <h1 className="text-white text-2xl mt-6 ml-6 lg:text-3xl">Movies</h1>
        <MovieItem movies={movies} />
      </div>
    </section>
  );
}

export default Movies;
