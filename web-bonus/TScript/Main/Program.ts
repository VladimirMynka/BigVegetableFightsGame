import { Game } from './Game';

let game: Game;

export let storeJSON;
//storeJSON = data;

function onLoad() {
    game = new Game();
}

$(window).on('load', onLoad);