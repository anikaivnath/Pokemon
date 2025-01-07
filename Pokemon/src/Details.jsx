import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Details = () => {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((response) => response.json())
      .then((data) => setPokemon(data));
  }, [name]);

  if (!pokemon) return <div>Loading...</div>;

  return (
    <div className="w-80 text-center m-auto mt-8">
   
      <div className="flex flex-row justify-center ">
        <img
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
          className="w-64 h-64"
        />
        
      </div>
  
      <div>
      <h1 className="text-3xl font-bold mb-4 text-center ">{pokemon.name.toUpperCase()}</h1>
      </div>
      <div className=""> 

      <div className="mb-4 flex flex-row  ">
      
        <h2 className="text-2xl font-semibold ">Abilities:</h2>
        <ul className="ml-4 mt-2">
          {pokemon.abilities.map((ability) => (
            <li key={ability.ability.name} className="capitalize">{ability.ability.name}</li>
          ))}
        </ul>
      </div>

      <div>
        <h2 className="text-2xl font-semibold">Stats:</h2>
        <ul>
          {pokemon.stats.map((stat) => (
            <li key={stat.stat.name} className="capitalize">
              {stat.stat.name}: {stat.base_stat}
            </li>
          ))}
        </ul>
      </div>
    </div>
    </div>
       
  );
};

export default Details;
