import { createContext, useState, useEffect } from "react";
import axios from "axios";

const MovieContext = createContext();

const Provider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [favorites, setFavorites] = useState([]);
  //   const [loading, setLoading] = useState(false);

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

  const valueToShare = {
    movies,
    setMovies,
    searchValue,
    setSearchValue,
    favorites,
    setFavorites,
  };

  return (
    <MovieContext.Provider value={valueToShare}>
      {children}
    </MovieContext.Provider>
  );
};

export { Provider };
export default MovieContext;
