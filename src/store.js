import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { logActions, reportError } from "./middlewares";
import { pokemonReducer } from "./reducers/pokemonReducer";

const composeAlt = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const composedEnhacers = composeAlt(applyMiddleware(thunk, logActions, reportError));
export const store = createStore(pokemonReducer, composedEnhacers);
