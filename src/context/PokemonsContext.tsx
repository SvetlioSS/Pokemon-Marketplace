import React, { createContext } from 'react';
import PokemonContext from '../interfaces/IPokemonContext';

const PokemonsContext = createContext<[PokemonContext, React.Dispatch<any>]>([
  { 
    favourites: [], 
    pokemons: [] 
  },
  () => {},
]);

export default PokemonsContext;