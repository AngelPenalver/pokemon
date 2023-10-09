import { CLEAR_POKEMONS, CLEAR_ERROR, CREATE_POKEMONS, DELETE_POKEMONS, FILTER_POKEMONS,SET_ERROR, FILTER_POKEMONS_BYTYPE, GET_POKEMONS, GET_POKEMONS_BYID, GET_POKEMONS_BYNAME, GET_TYPES, ORDER_POKEMONS, UPDATE_POKEMONS } from "../action/actionTypes/index"

let initialState = { pokemons: [], allPokemons: [], pokemon: [], types: [], error: null }
export default function rootReducer(state = initialState, action) {
    // console.log(state.error);
    switch (action.type) {
        case GET_POKEMONS:
            return {
                ...state,
                pokemons: action.payload,
                allPokemons: action.payload
            }
        case GET_POKEMONS_BYID:
            return {
                ...state,
                pokemon: action.payload
            }
        case CLEAR_POKEMONS:
            return {
                ...state,
                pokemon: [],
            }
            case CLEAR_ERROR:
                return{
                    ...state, 
                    error: null
                }
        case GET_POKEMONS_BYNAME:
            return {
                ...state,
                pokemon: action.payload
            }
            case DELETE_POKEMONS:
                return{
                    ...state,
                    pokemons: action.payload
                }
        case GET_TYPES:
            return {
                ...state,
                types: action.payload
            }
            case FILTER_POKEMONS_BYTYPE:
                let allPokemons = [...state.allPokemons]; 
                // console.log(allPokemons);
                if (action.payload === 'All') {
                  return {
                    ...state,
                    pokemons: state.allPokemons
                  }
                } else {
                  return {
                    ...state,
                    pokemons: allPokemons.filter((pokemon) => {
                      return pokemon.type && pokemon.type.includes(action.payload);
                    })
                  }
                }
        case FILTER_POKEMONS:
            const isUUID = (uuid) => {
                let regex =
                    /^[0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}$/;
                return regex.test(uuid);
            };
            if (action.payload === 'All') {
                return {
                    ...state,
                    pokemons: state.allPokemons
                }
            } else if (action.payload === 'DB') {
                return {
                    ...state,
                    pokemons: state.allPokemons.filter((pokemon) => {
                        return isUUID(pokemon.id) === true
                    })
                }
            } else {
                return {
                    ...state,
                    pokemons: state.allPokemons.filter((pokemon) => {
                        return isUUID(pokemon.id) === false
                    })
                }
            }
            case UPDATE_POKEMONS:
                return{
                    ...state,
                    allPokemons: state.pokemons,
                    pokemons: state.pokemons
                }
        case CREATE_POKEMONS:
            return {
                ...state,
                allPokemons: [...state.allPokemons, action.payload]

            }
        case ORDER_POKEMONS:
            let sortedFavorites = [...state.pokemons];
            if (action.payload === 'ascendente') {
                sortedFavorites.sort((a, b) => a.name.localeCompare(b.name))
            } else {
                sortedFavorites.sort((a, b) => b.name.localeCompare(a.name))
            }
            
            return {
                ...state,
                pokemons: sortedFavorites
            }
            case SET_ERROR:
                return {
                    ...state,
                    error: action.payload
                };
        default:
            return state

    }
}