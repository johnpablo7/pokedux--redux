import { Divider, Grid, Icon, Image, Label } from "semantic-ui-react";
import { MAIN_COLOR, FAV_COLOR } from "../../utils/constants";
import "./styles.css";

export const PokemonCard = ({ pokemon }) => {
  return (
    <Grid.Column mobile={16} tablet={8} computer={4}>
      <div className="pokemon_card">
        <Icon name="favorite" color={FAV_COLOR} />
        <Image centered src={"/images/ditto.png"} alt="pokemon front" />
        <h2 className="pokemon_card-title">{pokemon.name}</h2>
        <Divider />
        <Label color={MAIN_COLOR}>Normal</Label>
      </div>
    </Grid.Column>
  );
};
