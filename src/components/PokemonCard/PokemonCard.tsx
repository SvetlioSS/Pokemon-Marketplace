import React, { useState } from 'react';

import Pokemon from '../../interfaces/Pokemon';
import PokemonTypeList from '../PokemonTypeList/PokemonTypeList';
import './PokemonCard.scss';

function PokemonCard({ pokemon }: { pokemon: Pokemon }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className={`pokemon-card ${flipped ? 'pokemon-card-flipped' : ''}`} onClick={() => setFlipped(!flipped)}>
      <div className='pokemon-card-face pokemon-card-face-front'>
        <header>
          <h3>{pokemon.name}</h3>
          <div>#{pokemon.number}</div>
        </header>

        <div className='pokemon-avatar' style={{
          backgroundImage: `url(${pokemon.image})`
        }}></div>

        <PokemonTypeList size='lg' types={pokemon.types}/>

        <footer>
          <div title={'Combat Points'}>
            <img src={'assets/combat-icon.jpeg'} alt='Combat Points' className='combat-icon'/>
            <span>{pokemon.maxCP}</span>
          </div>
          <div title='Health Points'>
            <img src={'assets/health-icon.png'} alt='Health Points' className='health-icon'/>
            <span>{pokemon.maxHP}</span>
          </div>
          <div title='Flee Rate'>
            <img src={'assets/flee-icon.png'} alt='Flee Rate' className='flee-icon'/>
            <span>{pokemon.fleeRate}</span>
          </div>
        </footer>
      </div>

      <div className='pokemon-card-face pokemon-card-face-back'>
        <header>
          <h3>Details</h3>
        </header>

        <div className='details-section'><span className='details'>Classification:</span> {pokemon.classification}</div>

        <table className='details-section'>
          <thead>
            <tr>
              <th>Dimensions</th>
              <th>Min</th>
              <th>Max</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Weight</td>
              <td>{pokemon.weight.minimum}</td>
              <td>{pokemon.weight.maximum}</td>
            </tr>
            <tr>
              <td>Height</td>
              <td>{pokemon.height.minimum}</td>
              <td>{pokemon.height.maximum}</td>
            </tr>
          </tbody>
        </table>

        <div className='details-section'>
          <div className='details'>Strong vs:</div>
          <PokemonTypeList size='small' types={pokemon.resistant}/>
        </div>

        <div className='details-section'>
          <div className='details'>Weak vs:</div>
          <PokemonTypeList size='small' types={pokemon.weaknesses}/>
        </div>
      </div>
    </div>
  );
}

export default PokemonCard;