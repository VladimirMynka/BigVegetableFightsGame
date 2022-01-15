import { store } from "./Store";
import { Util } from "./Util";
import { Hero } from "./Hero";
import { Enemy } from "./Enemy";

export class Game {
    private _heroNumber: number;

    constructor() {
        let $container = $('#card-container');
        let $cards: Array<JQuery<HTMLElement>> = [];
        for (let i = 0; i < store.heros.length; i++) {
            let $card = $('#choose-card').clone();
            $card.children('div').attr('data-hero-id', i);
            $card.find('.my-title').html(store.heros[i].name);
            $card.find('.my-first-description').html(store.heros[i].firstDescription);
            $card.find('.my-second-description').html(store.heros[i].secondDescription);
            $card.removeClass('d-none');
            $container.append($card);
            $cards.push($card);

        }
        $('#button').click();
        document.getElementsByClassName('.tick')
        $cards.forEach((elem, index) => { elem.on('click', () => { this.hehe(index, elem) }) });
        $('#zakroysya').on('click', () => this.onConfirm());
    }

    public hero: Hero;
    public enemies: Array<Enemy>;

    onConfirm(): void {
        $('#button').click();
        if (this._heroNumber === -1) {
            window.location.reload();
        };

        this.hero = new Hero(store.heros[this._heroNumber], this);
        this.enemies = [];
        this.initializeEnemies();
    }

    private hehe(index: number, $card: JQuery<HTMLElement>): void {
        $('#hoho').removeClass('d-none');
        $('.tick').removeClass('border-primary');
        $card.addClass('border-primary');
        this._heroNumber = index;
        this.setReaction();
    }

    private setReaction(): void {
        $('#reaction').html(this._heroNumber === -1 ? "" : store.heros[this._heroNumber].answer)
    }

    initializeEnemies(): void {
        for (let i = 0; i < 4; i++) this.addEnemy();
    }

    addEnemy(): void {
        this.enemies.push(new Enemy(store.enemies[Util.randomInt(0, store.enemies.length)], this));
    }

    activateEnemies(effect: Function): void {
        this.enemies.map((enemy) => { enemy.activate(effect) });
    }

    disactivateEnemies(): void {
        this.enemies.map((enemy) => { enemy.disactivate() });
    }
}