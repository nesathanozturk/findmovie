import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const MovieContext = createContext();

function Provider({ children }) {
  const [searchValue, setSearchValue] = useState("");
  const [movies, setMovies] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const handleGetMovies = async (searchValue) => {
    try {
      const res = await axios.get(
        `http://www.omdbapi.com/?s=${searchValue}&apikey=${process.env.REACT_APP_API_KEY}`
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

  useEffect(() => {
    const favoriteMovies = JSON.parse(localStorage.getItem("favorite-movies"));
    if (favoriteMovies) {
      setFavorites(favoriteMovies);
    }
  }, []);

  const saveToLocalStorage = (items) => {
    localStorage.setItem("favorite-movies", JSON.stringify(items));
  };

  const addedMovieAtFavoritesNotify = () => toast("Movie added to favorites");

  const removedMovieAtFavoritesNotify = () =>
    toast("Movie removed from favorites");

  const clearFavoritesNotify = () => toast("You have cleared your favorites");

  const addMovieAtFavorites = (movie) => {
    const updatedFavorites = [...favorites, movie];
    setFavorites(updatedFavorites);
    saveToLocalStorage(updatedFavorites);
    addedMovieAtFavoritesNotify();
  };

  const removeMovieAtFavorites = (movie) => {
    const updatedFavorites = favorites.filter(
      (favorite) => favorite.imdbID !== movie.imdbID
    );
    setFavorites(updatedFavorites);
    saveToLocalStorage(updatedFavorites);
    removedMovieAtFavoritesNotify();
  };

  const clearFavorites = (imdbID) => {
    const updatedFavorites = favorites.filter(
      (favorite) => favorite.imdbID === imdbID
    );
    setFavorites(updatedFavorites);
    saveToLocalStorage(updatedFavorites);
    clearFavoritesNotify();
  };

  const valueToShare = {
    movies,
    setMovies,
    searchValue,
    setSearchValue,
    favorites,
    addMovieAtFavorites,
    removeMovieAtFavorites,
    clearFavorites,
  };

  return (
    <MovieContext.Provider value={valueToShare}>
      {children}
    </MovieContext.Provider>
  );
}

export { Provider };
export default MovieContext;
