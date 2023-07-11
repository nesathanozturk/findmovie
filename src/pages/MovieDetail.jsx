import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import useMovieContext from "../hooks/use-movie-context";

function MovieDetail() {
  const { movieDetail, showMovieDetail } = useMovieContext();

  const { id } = useParams();

  useEffect(() => {
    showMovieDetail(id);
  }, []);

  return (
    <section className="w-full h-screen p-6 md:mt-2 2xl:mt-12 flex justify-center items-center">
      <div className="bg-[#222] max-w-5xl w-5/6 md:w-4/5 xl:w-4/5 my-2 flex flex-col md:flex-row lg:flex-row gap-8 relative overflow-hidden rounded-xl cursor-pointer">
        <div className="w-full lg:w-1/2">
          <img
            className="w-full h-full object-cover lg:mt-0"
            src={`https://image.tmdb.org/t/p/original${movieDetail.poster_path}`}
            alt={movieDetail.title}
          />
        </div>
        <div className="text-center w-full p-4 lg:w-2/3 md:text-left lg:mt-6">
          <h3 className="text-white text-2xl uppercase mb-4 md:mt-6 lg:mt-2 lg:mb-2 lg:py-4 px-4 lg:text-3xl">
            {movieDetail.title}
          </h3>
          <div className="details mt-4 text-size">
            <p>Vote Average: {movieDetail.vote_average}</p>
            <p>Popularity: {movieDetail.popularity}</p>
            <p>Released: {movieDetail.release_date}</p>
          </div>
          <p className="text-space mb-6 text-base lg:font-bold lg:text-lg">
            {movieDetail.overview}
          </p>
          <button className="py-2 px-3 ml-4 mb-4 border-2 lg:px-5 text-yellow-300 rounded-lg border-yellow-300 hover:bg-yellow-300 hover:text-black transition-colors">
            <Link to="/">Back Home</Link>
          </button>
        </div>
      </div>
    </section>
  );
}

export default MovieDetail;
