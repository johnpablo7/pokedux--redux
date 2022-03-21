import { combineReducers } from "redux";
import { pokemonReducer } from "./pokemon";
import { uiReducer } from "./ui";

export const rootReducer = combineReducers({
  pokemon: pokemonReducer,
  ui: uiReducer,
});
