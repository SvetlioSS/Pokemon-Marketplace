import React from 'react';

import PokemonType from '../../enums/PokemonType';
import './PokemonTypeList.scss';

interface PokemonTypeListProps {
  types: PokemonType[];
  size: 'small' | 'lg';
}

function PokemonTypeList({ types, size }: PokemonTypeListProps) {
  return (
    <div className={`pokemon-type-list pokemon-type-list-${size}`}>
      {types.map(type => (
        <div key={type} className="icon-wrapper">
          <div className={`icon ${type.toLocaleLowerCase()}`}>
            <img src={`assets/pokemon-types/${type.toLocaleLowerCase()}.svg`} alt={type} />
          </div>
          <span>{type}</span>
        </div>
      ))}
    </div>
  );
}

export default PokemonTypeList;
