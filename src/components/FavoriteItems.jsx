import useMovieContext from "../hooks/use-movie-context";
import FavoriteItem from "./FavoriteItem";

function FavoriteItems() {
  const { favorites } = useMovieContext();

  return (
    <section className="p-6">
      <div className="max-w-full m-auto">
        <h1 className="text-white text-2xl ml-6 font-semibold lg:text-3xl">
          Favorites
        </h1>
        {favorites.length > 0 ? (
          <FavoriteItem favorites={favorites} />
        ) : (
          <p className="text-white text-lg mt-4 ml-6 lg:text-xl">
            You have no favorite movies!
          </p>
        )}
      </div>
    </section>
  );
}

export default FavoriteItems;
