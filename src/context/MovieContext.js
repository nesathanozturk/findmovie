import { createContext, useState, useEffect } from "react";
import axios from "axios";

const MovieContext = createContext();

function Provider({ children }) {
  const [searchValue, setSearchValue] = useState("");
  const [movies, setMovies] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const API_KEY = "fdd3c23f";

  const handleGetMovies = async (searchValue) => {
    try {
      const res = await axios.get(
        ` http://www.omdbapi.com/?s=${searchValue}&apikey=${API_KEY}`
      );
      if (res.data.Search) {
        setMovies(res.data.Search);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    handleGetMovies(searchValue);
  }, [searchValue]);

  const addMovieAtFavorites = (movie) => {
    const updatedFavorites = [...favorites, movie];
    setFavorites(updatedFavorites);
  };

  const removeMovieAtFavorites = (movie) => {
    const updatedFavorites = favorites.filter(
      (favorite) => favorite.imdbID !== movie.imdbID
    );
    setFavorites(updatedFavorites);
  };

  const valueToShare = {
    movies,
    setMovies,
    searchValue,
    setSearchValue,
    favorites,
    addMovieAtFavorites,
    removeMovieAtFavorites,
  };

  return (
    <MovieContext.Provider value={valueToShare}>
      {children}
    </MovieContext.Provider>
  );
}

export { Provider };
export default MovieContext;
