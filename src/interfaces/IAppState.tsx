import Pokemon from "./IPokemon";

export default interface IAppState {
  favourites: string[];
  pokemons: Pokemon[];
}