import React, { useContext, useState } from 'react';

import Pokemon from '../../interfaces/IPokemon';
import PokemonTypeList from '../PokemonTypeList/PokemonTypeList';
import { ReactComponent as StarIcon } from './star-icon.svg';
import './PokemonCard.scss';
import PokemonsContext from '../../context/PokemonsContext';

interface PokemonCardProps {
  pokemon: Pokemon
}

function PokemonCard({ pokemon }: PokemonCardProps) {
  const [flipped, setFlipped] = useState(false);
  const [{ favourites }, dispatch] = useContext(PokemonsContext);
  const isFavourite = favourites.indexOf(pokemon.number) > -1;

  return (
    <div
      className={`pokemon-card ${flipped ? 'pokemon-card-flipped' : ''} ${isFavourite ? 'starred-card' : ''}`}
      onClick={() => setFlipped(!flipped)}
    >
      <div className="pokemon-card-face pokemon-card-face-front">
        <header>
          <div className="title">
            <h3>{pokemon.name}</h3>
            <div>#{pokemon.number}</div>
          </div>
          <div
            className={`favourite ${isFavourite ? 'starred' : ''}`}
            onClick={e => {
              e.stopPropagation();
              dispatch({
                type: isFavourite ? 'REMOVE_FAVOURITE' : 'ADD_FAVOURITE',
                id: pokemon.number
              });
            }}
          >
            <StarIcon className="star-icon" />
          </div>
        </header>

        <div
          className="pokemon-avatar"
          style={{
            backgroundImage: `url(${pokemon.image})`,
          }}
        ></div>

        <PokemonTypeList size="lg" types={pokemon.types} />

        <footer>
          <div title={'Combat Points'}>
            <img src={'assets/combat-icon.jpeg'} alt="Combat Points" className="combat-icon" />
            <span>{pokemon.maxCP}</span>
          </div>
          <div title="Health Points">
            <img src={'assets/health-icon.png'} alt="Health Points" className="health-icon" />
            <span>{pokemon.maxHP}</span>
          </div>
          <div title="Flee Rate">
            <img src={'assets/flee-icon.png'} alt="Flee Rate" className="flee-icon" />
            <span>{pokemon.fleeRate}</span>
          </div>
        </footer>
      </div>

      <div className="pokemon-card-face pokemon-card-face-back">
        <header>
          <h3>Details</h3>
        </header>

        <div className="details-section">
          <span className="details">Classification:</span> {pokemon.classification}
        </div>

        <table className="details-section">
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

        <div className="details-section">
          <div className="details">Strong vs:</div>
          <PokemonTypeList size="small" types={pokemon.resistant} />
        </div>

        <div className="details-section">
          <div className="details">Weak vs:</div>
          <PokemonTypeList size="small" types={pokemon.weaknesses} />
        </div>
      </div>
    </div>
  );
}

export default PokemonCard;
