import React from 'react';
import { gql, useQuery } from '@apollo/client';

import { INITIAL_PAGE_LIMIT } from './config';
import './App.scss';
import PokemonCardContainer from './components/PokemonCardContainer/PokemonCardContainer';

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

function App() {
  const { loading, error, data } = useQuery(GET_POKEMONS, {
    variables: {
      first: INITIAL_PAGE_LIMIT
    }
  });

  return (
    <div className="App">
      <h1>Pokemon Marketplace</h1>
      {loading && <div>Loading...</div>}
      {error && <div>There was an error...</div>}
      {data && (
        <>
          <h2>Total number of pokemons {data.pokemons.count}</h2>
          <PokemonCardContainer pokemons={data.pokemons}/>
        </>
      )}
    </div>
  );
}

export default App;
