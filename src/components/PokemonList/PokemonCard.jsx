import { Image, Label } from "semantic-ui-react";
import { MAIN_COLOR, FAV_COLOR } from "../../utils/constants";


export const PokemonCard = () => {
  return (
    <div className="PokemonCard">
      <Image centered src="" atl="Pokemon Front"/>
      <p>Ditto</p>
      <Label color={MAIN_COLOR}>Normal</Label>
    </div>
  )
}
