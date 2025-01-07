import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(savedFavorites);
  }, []);

  const handleUnfavorite = (pokemonName) => {
    const updatedFavorites = favorites.filter((name) => name !== pokemonName);
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Your Favorite Pokémon</h1>

      {favorites.length === 0 ? (
        <p>No Pokémon added to favorites yet!</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {favorites.map((pokemonName, index) => (
            <div key={index} className="p-4 border rounded-lg hover:bg-gray-200 transition-all">
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`}
                alt={pokemonName}
                className="w-48 h-48 mx-auto transform transition-transform duration-300 hover:scale-110"
              />
              <p className="text-center capitalize">{pokemonName}</p>

              <div className="flex justify-between">
                <Link
                  to={`/pokemon/${pokemonName}`}
                  className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
                >
                  View Details
                </Link>
                <button
                  onClick={() => handleUnfavorite(pokemonName)}
                  className="bg-red-500 text-white px-4 py-2 rounded mt-2"
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
