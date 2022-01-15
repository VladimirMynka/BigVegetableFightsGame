import { Game } from './Game';

let game: Game;

function onLoad() {
    game = new Game();
}

$(window).on('load', onLoad);

function randomInt(min = 0, max = 100): number {
    return Math.floor(Math.random() * (max - min) + min);
}

let _ = () => () => () => () => () => () => () => () => () => () => () => () => 
'Nadoeli uzhe so svoimi skobkami prekratite pozhluista'