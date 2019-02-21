import React from 'react';
import ReactDOM from 'react-dom';
import { fetchAllPokemon } from './util/api_util';
import { receiveAllPokemon, requestAllPokemon, RECEIVE_ALL_POKEMON } from './actions/pokemon_actions';
import configureStore from './store/store';
import { selectAllPokemon } from './reducers/selectors'

document.addEventListener('DOMContentLoaded', () => {
    let store = configureStore();

    window.getState = store.getState;
    window.dispatch = store.dispatch;

    const rootEl = document.getElementById('root');
    ReactDOM.render(<h1>Pokedex</h1>, rootEl);
});

window.fetchAllPokemon = fetchAllPokemon;
window.receiveAllPokemon = receiveAllPokemon;
window.requestAllPokemon = requestAllPokemon;
window.RECEIVE_ALL_POKEMON = RECEIVE_ALL_POKEMON;
window.selectAllPokemon = selectAllPokemon;