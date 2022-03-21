import { Grid } from "semantic-ui-react";
import { PokemonCard } from "./PokemonCard";

import "./styles.css";

export const PokemonList = ({ pokemons }) => {
  return (
    <div className="wrapper">
      <Grid>
        {pokemons.map((pokemon, index) => {
          return <PokemonCard pokemon={pokemon} key={`pokemon-${index}`} />;
        })}
      </Grid>
    </div>
  );
};

PokemonList.defaultProps = {
  pokemons: [],
};