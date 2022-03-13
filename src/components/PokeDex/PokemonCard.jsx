import { Divider, Grid, Icon, Image, Label } from "semantic-ui-react";
import { MAIN_COLOR, FAV_COLOR } from "../../utils/constants";
import "./styles.css";

export const PokemonCard = ({ pokemon }) => {
  if (!pokemon) return null;

  return (
    <Grid.Column mobile={16} tablet={8} computer={4}>
      <div className="pokemon_card">
        <Icon name="favorite" color={FAV_COLOR} />
        <Image
          centered
          src={pokemon.sprites.front_default}
          alt="pokemon front"
        />
        <h2 className="pokemon_card-title">{pokemon.name}</h2>
        <Divider />
        {pokemon.types.map((type) => (
          <Label color={MAIN_COLOR} key={`${pokemon.id}-${type.type.name}`}>
            {type.type.name}
          </Label>
        ))}
      </div>
    </Grid.Column>
  );
};
