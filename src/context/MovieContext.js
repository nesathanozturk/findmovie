import { createContext, useState, useEffect } from "react";
import axios from "axios";

const MovieContext = createContext();

const Provider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(false);

  const API_KEY = "3dbeba74321820a2149b26303a7bbc1b";

  const handleGetMovies = async (searchValue) => {
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/keyword=${searchValue}&api_key=${API_KEY}`
      );
      const data = res.data.results;
      setMovies(data.movies);
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
};

export { Provider };
export default MovieContext;
