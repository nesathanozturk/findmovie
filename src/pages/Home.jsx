import Navbar from "../components/Navbar";
import Movies from "../components/Movies";
import useMovieContext from "../hooks/use-movie-context";

function Home() {
  const { searchValue, setSearchValue, movies } = useMovieContext();

  return (
    <>
      <Navbar searchValue={searchValue} setSearchValue={setSearchValue} />
      <Movies movies={movies} />
    </>
  );
}

export default Home;
