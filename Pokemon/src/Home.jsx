import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const Home = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [favorites, setFavorites] = useState([]);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=50")
      .then((response) => response.json())
      .then((data) => setPokemonList(data.results));
  }, []);

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(savedFavorites);
  }, []);

  const toggleFavorite = (pokemonName) => {
    const updatedFavorites = favorites.includes(pokemonName)
      ? favorites.filter((name) => name !== pokemonName)
      : [...favorites, pokemonName];

    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  const handleSearchChange = (query) => {
    setSearchQuery(query.toLowerCase());

    // Check if search results exist
    const filteredResults = pokemonList.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(query.toLowerCase())
    );

    setNotFound(filteredResults.length === 0 && query !== "");
  };

  const filteredPokemon = pokemonList.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchQuery)
  );

  return (
    <div className="p-6 bg-gradient-to-r from-teal-400 to-blue-500 min-h-screen">
      <Navbar onSearch={handleSearchChange} />
      <h1 className="text-2xl font-bold mb-4 text-white text-center">
        Pokémon List
      </h1>
      {notFound && (
        <div className="text-center text-red-500 font-bold text-lg my-4">
          No Pokémon found with that name.
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {filteredPokemon.map((pokemon, index) => (
          <div key={index} className=" mt-2 p-4 border bg-green-800 rounded-lg hover:bg-green-700 transition-all">  <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`}
              alt={pokemon.name}
              className="w-full max-w-[180px] md:max-w-[200px] mx-auto"
            />
            <p className="text-center capitalize text-gray-700 mt-2 text-lg">{pokemon.name}</p>

            <div className="flex justify-between">
              <Link
                to={`/pokemon/${pokemon.name}`}
                className="bg-blue-500 text-white px-4 py-2 rounded mt-2 text-sm"
              >
                View
              </Link>
              <button
                onClick={() => toggleFavorite(pokemon.name)}
                className={`${
                  favorites.includes(pokemon.name) ? "bg-red-500" : "bg-yellow-500"
                } text-white px-4 py-2 rounded mt-2 text-sm`}
              >
                {favorites.includes(pokemon.name) ? "Unfavorite" : "Favorite"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
