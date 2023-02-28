import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const MovieContext = createContext();

function Provider({ children }) {
  const [searchValue, setSearchValue] = useState("");
  const [movies, setMovies] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [movieDetail, setMovieDetail] = useState([]);

  const API_KEY = "3dbeba74321820a2149b26303a7bbc1b";

  const getMovies = async (searchValue) => {
    try {
      const res = await axios(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchValue}`
      );
      setMovies(res.data.results);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getMovies(searchValue);
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
      (favorite) => favorite.id !== movie.id
    );
    setFavorites(updatedFavorites);
    saveToLocalStorage(updatedFavorites);
    removedMovieAtFavoritesNotify();
  };

  const clearFavorites = (id) => {
    const updatedFavorites = favorites.filter((favorite) => favorite.id === id);
    setFavorites(updatedFavorites);
    saveToLocalStorage(updatedFavorites);
    clearFavoritesNotify();
  };

  const showMovieDetail = async (id) => {
    const res = await axios(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`
    );
    setMovieDetail(res.data);
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
    movieDetail,
    showMovieDetail,
  };

  return (
    <MovieContext.Provider value={valueToShare}>
      {children}
    </MovieContext.Provider>
  );
}

export { Provider };
export default MovieContext;
