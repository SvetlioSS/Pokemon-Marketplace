import React from 'react';

import PokemonType from '../../enums/PokemonType';
import './PokemonTypeList.scss';

function PokemonTypeList({ types, size }: { types: PokemonType[], size: 'small' | 'lg' }) {
  return (
    <div className={`pokemon-type-list pokemon-type-list-${size}`}>
      {types.map(type => (
        <div key={type} className='icon-wrapper'>
          <div className={`icon ${type.toLocaleLowerCase()}`}>
            <img src={`assets/pokemon-types/${type.toLocaleLowerCase()}.svg`} alt={type}/>
          </div>
          <span>{type}</span>
        </div>
      ))}
    </div>
  );
}

export default PokemonTypeList;