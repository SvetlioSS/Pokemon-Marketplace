import PokemonDimension from './PokemonDimension';
import PokemonType from '../enums/PokemonType';

export default interface Pokemon {
  id: string;
  number: string;
  name: string;
  image: string;
  classification: string;
  types: PokemonType[];
  weight: PokemonDimension;
  height: PokemonDimension;
  resistant: PokemonType[];
  weaknesses: PokemonType[];
  fleeRate: number;
  maxCP: number;
  maxHP: number;
}