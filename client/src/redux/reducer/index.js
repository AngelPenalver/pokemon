import { CLEAR_POKEMONS, CREATE_POKEMONS, DELETE_POKEMONS, FILTER_POKEMONS, FILTER_POKEMONS_BYTYPE, GET_POKEMONS, GET_POKEMONS_BYID, GET_POKEMONS_BYNAME, GET_TYPES, ORDER_POKEMONS } from "../action/actionTypes/index"

let initialState = { pokemons: [], allPokemons: [], pokemon: [], types: [] }
export default function rootReducer(state = initialState, action) {
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
                pokemon: []
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
            // console.log(state.allPokemons);
            if (action.payload === 'All') {
                return {
                    ...state,
                    pokemons: state.allPokemons
                }
            } else {
                return {
                    ...state,
                    pokemons: state.allPokemons.filter((pokemon) => {
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
        case CREATE_POKEMONS:
            return {
                ...state,
                allPokemons: [...state.allPokemons, action.payload]
                // pokemons: state.allPokemons.push(action.payload)
                // pokemons: [...state.allPokemons, action.payload]
            }
        case ORDER_POKEMONS:
            let sortedFavorites = [...state.pokemons];
            if (action.payload === 'ascendente') {
                sortedFavorites.sort((a, b) => a.name.localeCompare(b.name))
            } else {
                sortedFavorites.sort((a, b) => b.name.localeCompare(a.name))
            }
            // console.log(sortedFavorites);
            return {
                ...state,
                pokemons: sortedFavorites
            }
        default:
            return state

    }
}