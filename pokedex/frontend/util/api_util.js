import { receiveAllPokemon } from "../actions/pokemon_actions";

export const fetchAllPokemon = () => (
    $.ajax({
        method: 'GET',
        url: '/api/pokemon'
    })
);