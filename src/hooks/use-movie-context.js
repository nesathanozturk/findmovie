import { useContext } from "react";
import MovieContext from "../context/MovieContext";

function useMovieContext() {
  return useContext(MovieContext);
}

export default useMovieContext;
