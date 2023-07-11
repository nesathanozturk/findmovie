import FavoriteItem from "./FavoriteItem";
import useMovieContext from "../hooks/use-movie-context";

function FavoriteItems() {
  const { favorites, clearFavorites } = useMovieContext();

  return (
    <section className="p-6 mt-6">
      <div className="max-w-full m-auto">
        <div className="flex justify-between items-center">
          <h1 className="text-white text-2xl ml-4 mb-4 font-semibold lg:text-3xl">
            Favorites
          </h1>
          {favorites.length > 1 ? (
            <button className="btn" onClick={() => clearFavorites(favorites)}>
              Clear Favorites
            </button>
          ) : null}
        </div>
        {favorites.length > 0 ? (
          <FavoriteItem favorites={favorites} />
        ) : (
          <p className="text-white text-lg ml-4 lg:text-xl">
            You have no favorite movies!
          </p>
        )}
      </div>
    </section>
  );
}

export default FavoriteItems;
