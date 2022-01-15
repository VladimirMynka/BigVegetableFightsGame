import { FighterCard } from "./FighterCard";
import { FighterPrototype } from "./FighterPrototype";
import { Game } from "./Game";

export class Fighter {
    private _hp: number;
    private _mana: number;
    private _card: FighterCard;

    constructor(
        protected prototype: FighterPrototype, 
        protected game: Game) {
        this._card = this.createCard(prototype);
        this._hp = prototype.hp;
        this._mana = prototype.mana;
    }

    protected createCard(prototype: FighterPrototype): FighterCard {
        return new FighterCard(prototype.name, prototype.motto);
    }

    public get hp(): number {
        return this._hp;
    }

    public set hp(count: number) {
        this._hp = this.getAdequateHp(count);
        this._card.setHpWidth(this._hp * 100 / this.prototype.hp);
    }

    public addHp(count: number): void {
        this.hp = this._hp + count;
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
        this._card.setManaWidth(this._mana * 100 / this.prototype.mana);
    }

    public addMana(count: number): void {
        this.mana = this.mana + count;
    }

    private getAdequateMana(count: number): number {
        if (count < 0) return 0;
        if (count > this.prototype.mana) return this.prototype.mana;
        return count;
    }

    public activate(effect: Function): void {
        this._card.turnOn(effect);
    }

    public disactivate(): void {
        this._card.turnOff();
    }
}