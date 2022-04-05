import React, { useEffect, useReducer, useState } from 'react';
import { gql, useQuery } from '@apollo/client';

import { INITIAL_PAGE_LIMIT } from './config';
import pokemonsReducer from './reducers/pokemonsReducer';
import './App.scss';
import PokemonCardContainer from './components/PokemonCardContainer/PokemonCardContainer';
import PokemonsContext from './context/PokemonsContext';
import IAppState from './interfaces/IAppState';

const GET_POKEMONS = gql`
  query GET_POKEMONS($first: Int!) {
    pokemons(first: $first) {
      id
      number
      name
      weight{
        minimum
        maximum
      }
      height{
        minimum
        maximum
      }
      classification
      types
      resistant
      weaknesses
      fleeRate
      maxCP
      maxHP
      image
    }
  }
`;

const initialState: IAppState = { 
  pokemons: [], 
  favourites: []
};

function App() {
  const { loading, error, data } = useQuery(GET_POKEMONS, {
    variables: {
      first: INITIAL_PAGE_LIMIT
    }
  });
  const [state, dispatch] = useReducer(pokemonsReducer, initialState);
  const [applyFilter, setApplyFilter] = useState(false);

  useEffect(() => {
    if (data) {
      dispatch({ 
        type: 'POPULATE_POKEMONS',
        pokemons: data.pokemons
      });
    }
  }, [data]);

  return (
    <div className="app">
      <header className='app-header'>
        <img src='assets/logo.svg' alt='Pokemon logo'/>
      </header>
      <h1>Pokemon Marketplace</h1>
      {loading && <div>Loading...</div>}
      {error && <div>There was an error...</div>}
      {data && (
        <>
          <h2>Total number of pokemons {data.pokemons.length}</h2>
          <button onClick={() => setApplyFilter(!applyFilter)}>{applyFilter ? 'Show All' : `Show Favourites (${state.favourites.length})`}</button>
          <PokemonsContext.Provider value={[state, dispatch]}>
            <PokemonCardContainer filter={applyFilter}/>
          </PokemonsContext.Provider>
        </>
      )}
    </div>
  );
}

export default App;
