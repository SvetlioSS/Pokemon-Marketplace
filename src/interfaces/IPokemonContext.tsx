import Pokemon from "./IPokemon";

interface IPokemonContext {
  pokemons: Pokemon[];
  favourites: string[];
}

export default IPokemonContext;