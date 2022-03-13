import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Searcher } from "../../components/Searcher";
import { PokemonList } from "../../components/PokeDex/PokemonList";
import { getPokemonWithDetails } from "../../actions";

import "./styles.css";


export const Home = () => {
  const pokemons = useSelector(state => state.list);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPokemonWithDetails())
  }, []);

  return (
    <div className="Home">
      <Searcher />
      <PokemonList pokemons={pokemons}/>
    </div>
  );
};


