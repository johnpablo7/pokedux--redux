import axios from "axios";
import { getPokemons } from "../api/getPokemons";
import { SET_POKEMON, SET_ERROR, CLEAR_ERROR } from "./types";

export const setPokemons = (payload) => ({
  type: SET_POKEMON,
  payload,
});

export const setError = (payload) => ({
  type: SET_ERROR,
  payload,
});

export const clearError = (payload) => ({
  type: CLEAR_ERROR,
  payload,
});

export const getPokemonWithDetails = () => (dispatch) => {
  getPokemons()
    .then((res) => {
      const pokemonList = res.results;
      return Promise.all(pokemonList.map((pokemon) => axios.get(pokemon.url)));
    })
    .then((pokemonsResponse) => {
      const pokemonsData = pokemonsResponse.map((response) => response.data);
      dispatch(setPokemons(pokemonsData));
    })
    .catch((error) => {
      dispatch(setError({ message: "Ocurrió un error", error }));
    });
};
