import IAppState from '../interfaces/IAppState';

const pokemonsReducer = (state: IAppState, action: any) => {
  switch (action.type) {
    case 'ADD_FAVOURITE':
      return {
        ...state,
        favourites: [...state.favourites, action.id],
      };
    case 'REMOVE_FAVOURITE':
      return {
        ...state,
        favourites: state.favourites.filter(f => f !== action.id),
      };
    case 'POPULATE_POKEMONS':
      return { ...state, pokemons: action.pokemons };
    default:
      return state;
  }
};

export default pokemonsReducer;
