import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import useMovieContext from "../hooks/use-movie-context";

function MovieDetail() {
  const { movieDetail, showMovieDetail } = useMovieContext();

  const { id } = useParams();

  useEffect(() => {
    showMovieDetail(id);
  });

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="bg-[#222] w-full lg:w-4/5 xl:w-3/5 flex flex-col lg:flex-row gap-8 mb-1 mt-1 relative overflow-hidden rounded-xl cursor-pointer">
        <div className="w-1/2">
          <img
            className="w-full h-full mt-24 lg:mt-0"
            src={movieDetail.Poster}
            alt={movieDetail.Title}
          />
        </div>
        <div className="text-center w-1/2 lg:w-2/3 lg:text-left lg:mt-6">
          <h3 className="text-white text-xl uppercase py-4 px-4 lg:text-3xl">
            {movieDetail.Title}
          </h3>
          <div className="details text">
            <span>{movieDetail.Runtime}</span>
            <span>{movieDetail.Genre}</span>
            <span>{movieDetail.Year}</span>
          </div>
          <div className="details mt-4 text">
            <span>Director: {movieDetail.Director}</span>
            <div>IMDB: {movieDetail.imdbRating}</div>
            <div>Released: {movieDetail.Released}</div>
          </div>
          <p className="text text-2">Actors: {movieDetail.Actors}</p>
          <p className="text text-2">Awards: {movieDetail.Awards}</p>
          <p className="text-2 mb-4 text-base lg:font-bold lg:text-lg">
            {movieDetail.Plot}
          </p>
          <button className="py-2 px-3 ml-4 mb-4 border-2 lg:px-5 text-yellow-300 rounded-lg border-yellow-300 hover:bg-yellow-300 hover:text-black transition-colors">
            <Link to="/">Back Home</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default MovieDetail;
