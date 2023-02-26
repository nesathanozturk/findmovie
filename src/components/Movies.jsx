import MovieItem from "./MovieItem";

function Movies({ movies }) {
  return (
    <section>
      <div className="max-w-6xl h-screen">
        <h1 className="text-white text-3xl mt-6 ml-6">Movies</h1>
        <div>
          <MovieItem movies={movies} />
        </div>
      </div>
    </section>
  );
}

export default Movies;
