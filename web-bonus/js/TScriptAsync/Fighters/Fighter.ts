import { FighterCard } from "./FighterCard";
import { FighterPrototype } from "./FighterPrototype";
import { Game } from "../Main/Game";
import { Util } from "../Common/Util";
import { GameCard } from "../Common/GameCard";
import { IPoint } from "../Perks/PerkAnimation";
import { Perk } from "../Perks/Perk";
import { store } from "../Store/Store";

export abstract class Fighter {
    private _hp: number;
    private _mana: number;
    protected card: FighterCard;
    protected perks: Perk[];

    constructor(
        public readonly prototype: FighterPrototype,
        protected game: Game
    ) {
        this.card = this.createCard(prototype);
        this._hp = prototype.hp;
        this._mana = prototype.mana;
        this.perks = [];
        this.initializePerks();
        this.update();
    }

    protected abstract initializePerks(): void;

    protected async update(): Promise<void> {
        if (this.hp === 0) {
            this.remove();
            return;
        }
        this.addMana(5);
        this.addHp(2);
        await Util.sleep(500);
        await this.update();
    }

    protected remove(): void {
        this.card.remove();
        this.game.addLog(this, this, store.diedLog);
        document.removeEventListener('keydown', handler);
        document.addEventListener('keydown', handler);
    }

    protected createCard(prototype: FighterPrototype): FighterCard {
        return new FighterCard(prototype.name, prototype.motto);
    }

    public get hp(): number {
        return this._hp;
    }

    public set hp(count: number) {
        this._hp = this.getAdequateHp(count);
        this.card.setHpWidth(this._hp * 100 / this.prototype.hp);
    }

    public addHp(count: number): number {
        let startHp = this._hp;
        this.hp = this._hp + count;
        return this._hp - startHp;
    }

    private getAdequateHp(count: number): number {
        if (count < 0) return 0;
        if (count > this.prototype.hp) return this.prototype.hp;
        return count;
    }

    public get mana(): number {
        return this._mana;
    }

    public set mana(count: number) {
        this._mana = this.getAdequateMana(count);
        this.card.setManaWidth(this._mana * 100 / this.prototype.mana);
    }

    public addMana(count: number): number {
        let startMana = this._mana;
        this.mana = this._mana + count;
        return this._mana - startMana;
    }

    private getAdequateMana(count: number): number {
        if (count < 0) return 0;
        if (count > this.prototype.mana) return this.prototype.mana;
        return count;
    }

    public activate(effect: Function): void {
        this.card.turnOn(effect, this);
    }

    public deactivate(): void {
        this.card.turnOff();
    }

    public getCard(): GameCard {
        return this.card;
    }

    public getCoords(): IPoint {
        return this.card.getCoords();
    }
}

function handler(event: any) {
    if (event.code == 'KeyF') {
        document.removeEventListener('keydown', handler);
        Util.fireworks();
    }
}