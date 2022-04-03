import React from 'react';

import Pokemon from '../../interfaces/Pokemon';
import PokemonCard from '../PokemonCard/PokemonCard';
import './PokemonCardContainer.scss';

function PokemonCardContainer({ pokemons }: { pokemons: Pokemon[] }) {
  return (
    <div className='pokemon-card-container'>
      {pokemons.map((pokemon: Pokemon) => (
        <PokemonCard pokemon={pokemon} key={pokemon.number}/>
      ))}
    </div>
  )
}

export default PokemonCardContainer;