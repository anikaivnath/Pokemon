import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(savedFavorites);
  }, []);

  const removeFavorite = (pokemonName) => {
    const updatedFavorites = favorites.filter((name) => name !== pokemonName);
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  return (
    <div className="p-6 bg-gradient-to-r from-purple-500 to-indigo-600 min-h-screen">
      <h1 className="text-2xl font-bold text-white text-center mb-4">
        Favorite Pokémon
      </h1>

      {favorites.length === 0 ? (
        <p className="text-center text-white">No favorites added yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {favorites.map((pokemonName, index) => (
            <div key={index} className="p-4 bg-white rounded-lg shadow-md transition-transform hover:scale-105">
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`}
                alt={pokemonName}
                className="w-full max-w-[180px] md:max-w-[200px] mx-auto"
              />
              <p className="text-center capitalize text-gray-700 mt-2 text-lg">{pokemonName}</p>

              <div className="flex justify-between">
                <Link
                  to={`/pokemon/${pokemonName}`}
                  className="bg-blue-500 text-white px-4 py-2 rounded mt-2 text-sm"
                >
                  View Details
                </Link>
                <button
                  onClick={() => removeFavorite(pokemonName)}
                  className="bg-red-500 text-white px-4 py-2 rounded mt-2 text-sm"
                >
                  Unfavorite
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;
