import { store } from "../Store/Store";
import { Util } from "../Common/Util";
import { Hero } from "../Fighters/Hero/Hero";
import { Enemy } from "../Fighters/Enemy/Enemy";
import { Fighter } from "../Fighters/Fighter";

export class Game {
    private _heroNumber: number;
    public gameEnded: boolean;
    public heroWon = true;
    private _killedEnemiesCount = 0;
    private _timeToEnd: number;
    public hero: Hero;
    public enemies: Array<Enemy>;
    private _score = 0;

    constructor() {
        this.initializeChosenWindow();
        $('#button').click();
        $('#game-start-button').on('click', () => this.onConfirm());
        $('#new-game-button').on('click', () => window.location.reload());
    }

    private initializeChosenWindow(): void {
        let $container = $('#card-container');
        $container.html("");
        for (let i = 0; i < store.heroes.length; i++) {
            $container.append(this.initializeOneCard(i));
        }
    }

    private initializeChosenWindowExcept(index: number, $card: JQuery<HTMLElement>): void {
        let $container = $('#card-container');
        $container.html("");
        for (let i = 0; i < store.heroes.length; i++) {
            if (i === index)
                $container.append($card);
            else
                $container.append(this.initializeOneCard(i));
        }
    }

    private initializeOneCard(index: number) {
        let $card = $('#choose-card').clone();
        $card.children('div').attr('data-hero-id', index);
        $card.find('.my-title').html(store.heroes[index].name);
        $card.find('.my-first-description').html(store.heroes[index].firstDescription);
        $card.find('.my-second-description').html(store.heroes[index].secondDescription);
        $card.removeClass('d-none');
        $card.on('click', () => { this.chooseCardOnClick(index, $card.find('.card')) });
        return $card;
    }

    private chooseCardOnClick(index: number, $card: JQuery<HTMLElement>): void {
        $('#confirm-menu').removeClass('d-none');
        this.initializeChosenWindowExcept(index, $card.parent());
        $card.addClass('border-primary');
        this._heroNumber = index;
        this.setReaction(store.heroes[index].answer, store.heroes[index]?.reaction, $card);
    }

    private setReaction(string: string, method?: Function, $card?: JQuery): void {
        $('#reaction').html(string);
        if (typeof method === 'function')
            method($card);
    }

    private onConfirm(): void {
        $('#button').click();
        if (this._heroNumber === -1) {
            window.location.reload();
        };

        this.hero = new Hero(store.heroes[this._heroNumber], this);
        this.initializeEnemies();
        this.update();
        this.initializeGameTimer();
    }

    private initializeEnemies(): void {
        this.enemies = [];
        for (let i = 0; i < store.startEnemyCount; i++) this.addEnemy();
    }

    private addEnemy(): void {
        this.enemies.push(new Enemy(store.enemies[Util.randomInt(0, store.enemies.length)], this));
    }

    public increaseKilledCount(): void {
        this._killedEnemiesCount++;
        $('#enemy-count').text(this._killedEnemiesCount);
        this.addScore(1000);
    }

    private async update() {
        if (this.gameEnded) {
            this.endGame();
            return;
        }
        if (this.enemies.length < store.enemiesMaxCount && Util.randomInt(0, 100) < this.calculateAddingChance())
            this.addEnemy();
        this.enemies = this.enemies.filter((enemy) => enemy.hp > 0);
        await Util.sleep(5000);
        await this.update();
    }

    private endGame(): void {
        let $endModal = $('#myModal2');
        $endModal.find('.modal-title').text(this.heroWon ? "You won!" : "You lost...");
        let $result = $('.progress-menu').clone().removeClass('col-8');
        $result.find('.mt-5').removeClass('mt-5');
        $endModal.find('.modal-body').append($result);
        $('#button2').click();
    }

    private calculateAddingChance() {
        if (this.enemies.length === 0)
            return 100;
        let mc = store.enemiesMaxCount;
        let tc = this.enemies.length;
        let min = store.minAddEnemyChance;
        let max = store.maxAddEnemyChance;
        return (mc - tc) / mc * (max - min) + min;
    }

    private initializeGameTimer(): void {
        this._timeToEnd = store.gameTiming * 60;
        this.doTick();
    }

    private async doTick() {
        if (this._timeToEnd <= 0 || this.gameEnded) {
            if (this._timeToEnd <= 0)
                $('#time').removeClass('text-danger').addClass('text-success');
            this.gameEnded = true;
            return;
        }
        this._timeToEnd--;
        let seconds = this._timeToEnd % 60;
        $('#time').text(`${(this._timeToEnd - seconds) / 60}:${seconds.toString().padStart(2, '0')}`);
        if(this._timeToEnd <= 30)
            $('#time').addClass('text-danger');
        await Util.sleep(1000);
        await this.doTick();
    }

    activateEnemies(effect: Function): void {
        this.enemies.map((enemy) => { enemy.activate(effect) });
    }

    deactivateEnemies(): void {
        this.enemies.map((enemy) => { enemy.deactivate() });
    }

    addLog(maker: Fighter, target: Fighter, actionDescription: string): void {
        let $actionLog = $(`<div>
        ${Util.getFormatCurrentTime()} <b>${maker.prototype.name}</b> ${actionDescription} <b>${target == maker ? '' : target.prototype.name}</b>
        </div>`);
        $('#logs').prepend($actionLog);
    }

    addScore(count: number) {
        this._score += count;
        $('#score').text(this._score);
    }
}