import * as APIUtil from '../util/api_util'
export const RECEIVE_ALL_POKEMON = "RECEIVE_ALL_POKEMON";


export const receiveAllPokemon = pokemon => ({
    type: RECEIVE_ALL_POKEMON,
    pokemon
})

export const requestAllPokemon = () => (dispatch) => (
    APIUtil.fetchAllPokemon()
        .then(payload =>  {
            console.log("payload", payload)
            dispatch(receiveAllPokemon(payload))
        })
)