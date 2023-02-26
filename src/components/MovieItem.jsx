function MovieItem({ movies }) {
  const renderedMovies = movies.map((movie) => (
    <div key={movie.id}>
      <img src={movie.poster_path} alt={movie.title} />
      <div>
        <h3 style={{ marginTop: 0 }}>{movie.title}</h3>
        <span>{movie.vote_average}</span>
      </div>
    </div>
  ));

  return { renderedMovies };
}

export default MovieItem;
