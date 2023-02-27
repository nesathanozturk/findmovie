function MovieItem({ movies }) {
  const renderedMovies = movies.map((movie) => (
    <div
      key={movie.imdbID}
      className="bg-[#0d1d35] w-80 mb-1 relative overflow-hidden rounded-xl cursor-pointer text-center transition-transform hover:scale-105"
    >
      <img className="w-full h-96" src={movie.Poster} alt={movie.Title} />
      <div className="flex justify-center items-center flex-col gap-3 text-white text-lg py-[0.5rem] px-4">
        <h3 className="pt-2">{movie.Title}</h3>
        <span>{movie.Year}</span>
      </div>
    </div>
  ));

  return (
    <div className="grid grid-cols-1 gap-10 mt-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
      {renderedMovies}
    </div>
  );
}

export default MovieItem;
