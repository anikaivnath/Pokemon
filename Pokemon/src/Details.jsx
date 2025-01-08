import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";

const Details = () => {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((response) => response.json())
      .then((data) => setPokemon(data));
  }, [name]);

  if (!pokemon) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-200">
        <p className="text-gray-700 text-xl">Loading...</p>
      </div>
    );
  }

  return (
    <div className="p-6 bg-gradient-to-r from-green-500 to-blue-600 min-h-screen">
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-lg 
                      flex flex-col items-center text-center">
        <img
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
          className="w-40 md:w-56 mx-auto"
        />
        <h1 className="text-2xl md:text-3xl font-bold capitalize mt-4">{pokemon.name}</h1>
        
        <div className="mt-4">
          <h2 className="text-lg md:text-xl font-semibold">Abilities:</h2>
          <ul className="list-disc list-inside text-gray-700">
            {pokemon.abilities.map((ability, index) => (
              <li key={index} className="capitalize">{ability.ability.name}</li>
            ))}
          </ul>
        </div>

        <div className="mt-4">
          <h2 className="text-lg md:text-xl font-semibold">Types:</h2>
          <div className="flex gap-2 flex-wrap justify-center">
            {pokemon.types.map((type, index) => (
              <span key={index} className="bg-gray-300 px-3 py-1 rounded-full capitalize text-sm md:text-base">
                {type.type.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
