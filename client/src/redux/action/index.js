import axios from 'axios'

export const setError = (error) => {
    // console.log(error);
    return {
        type: 'SET_ERROR',
        payload: error
    }
}

export const getPokemons = () => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get('/pokemons');
            return dispatch({
                type: "GET_POKEMONS",
                payload: data
            })
        } catch (error) {
            dispatch(setError(error.response.data.error))
        }
    }
}
export const getPokemonsById = (id) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`/pokemons/${id}`);
            return dispatch({
                type: "GET_POKEMONS_BYID",
                payload: data
            })
        } catch (error) {
            dispatch(setError(error.response.data.error))

        }
    }
}
export const getPokemonsByName = (name) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`pokemons?name=${name}`)
            return dispatch({
                type: "GET_POKEMONS_BYNAME",
                payload: data
            })
        } catch (error) {
            dispatch(setError(error.response.data.error))

        }
    }
}
export const getTypes = () => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`/types`);
            return dispatch({
                type: "GET_TYPES",
                payload: data
            })
        } catch (error) {
            dispatch(setError(error.response.data.error))
        }
    }
}
export const createPokemons = (input) => {
    // console.log(input);
    return async (dispatch) => {
        try {
            await axios.post('/pokemons', input)
            return dispatch({
                type: "CREATE_POKEMONS",
                payload: input
            })
        } catch (error) {
            dispatch(setError(error.response.data.error))
        }
    }
}
export const updatePokemon = (input) => {
    // console.log(input);
    return async(dispatch) => {
        try {
            // console.log(input);
            await axios.put('/pokemons', input)
            return dispatch({
                type: "UPDATE_POKEMONS",
                payload: input
            })
            
        } catch (error) {
            console.log(error);
            dispatch(setError(error.response.data.error))
            
        }
    }
}
export const deletePokemons = (id) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.delete(`/pokemons/${id}`)
            return dispatch({
                type: 'DELETE_POKEMONS',
                payload: data
            })

        } catch (error) {
            dispatch(setError(error.response.data.error))
        }
    }
}
export const filterPokemonsByTipe = (type) => {
    return {
        type: "FILTER_POKEMONS_BYTYPE",
        payload: type
    }

}
export const filterPokemons = (id) => {
    return {
        type: "FILTER_POKEMONS",
        payload: id
    }
}
export const orderPokemons = (order) => {
    return {
        type: "ORDER_POKEMONS",
        payload: order
    }
}

export const clearPokemons = () => {
    return {
        type: 'CLEAR_POKEMONS'
    }
}
export const clearError = () => {
    return{
        type: 'CLEAR_ERROR'
    }
}