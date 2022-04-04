import PokemonDimension from './IPokemonDimension';
import PokemonType from '../enums/PokemonType';

export default interface IPokemon {
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