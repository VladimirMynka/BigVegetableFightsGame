import { Game } from './Game';

let game: Game;

function onLoad() {
    game = new Game();
}

$(window).on('load', onLoad);