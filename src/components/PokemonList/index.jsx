import { PokemonCard } from "./PokemonCard";

export const PokemonList = () => {
  const pokemons = Array(20);

  return (
    <div className="PokemonList">
      {pokemons.map((pokemon) => (
        <PokemonCard />
      ))}
    </div>
  );
};
