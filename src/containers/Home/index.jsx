import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Searcher } from "../../components/Searcher";

import { getPokemons } from "../../api/getPokemons";
import { setPokemons } from "../../actions";
import "./styles.css";
import { PokemonList } from "../../components/PokeDex/PokemonList";

export const Home = () => {

  const dispatch = useDispatch();
  const list = useSelector(state => state.list);

  useEffect(() => {
    getPokemons().then((res) => {
      dispatch(setPokemons(res.results));
    });
  }, []);

  return (
    <div className="Home">
      <Searcher />
      <PokemonList pokemons={list}/>
    </div>
  );
};


