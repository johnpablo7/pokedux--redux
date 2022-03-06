
import { Searcher } from "../../components/Searcher";
import { PokemonList } from "../../components/PokemonList";
import "./styles.css";

export const Home = () => {
  return (
    <div className="Home">
      <Searcher />
      <PokemonList />
    </div>
  );
};
