import React, { useContext } from 'react';

import Pokemon from '../../interfaces/IPokemon';
import PokemonCard from '../PokemonCard/PokemonCard';
import './PokemonCardContainer.scss';
import PokemonsContext from '../../context/PokemonsContext';

function PokemonCardContainer({ filter }: { filter: boolean }) {
  const [{ pokemons }] = useContext(PokemonsContext);

  return (
    <div className={`pokemon-card-container ${filter ? 'filter' : ''}`}>
      {pokemons.map((pokemon: Pokemon) => (
        <PokemonCard pokemon={pokemon} key={pokemon.number}/>
      ))}
    </div>
  )
}

export default PokemonCardContainer;