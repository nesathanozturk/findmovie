import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const MovieContext = createContext();

function Provider({ children }) {
  const [searchValue, setSearchValue] = useState("");
  const [movies, setMovies] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [movieDetail, setMovieDetail] = useState([]);

  const handleGetMovies = async (searchValue) => {
    try {
      await fetch(`http://www.omdbapi.com/?s=${searchValue}&apikey=fdd3c23f`)
        .then((res) => res.json())
        .then((res) => {
          if (res.Response === "True") {
            setMovies(res.Search);
          } else {
            setMovies([]);
          }
        });
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

  const showMovieDetail = async (imdbID) => {
    const res = await axios(
      `http://www.omdbapi.com/?i=${imdbID}&apikey=${process.env.REACT_APP_API_KEY}`
    );

    const data = res.data;
    setMovieDetail(data);
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
