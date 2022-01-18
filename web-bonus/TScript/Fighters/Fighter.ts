import { FighterCard } from "./FighterCard";
import { FighterPrototype } from "./FighterPrototype";
import { Game } from "../Main/Game";
import { Util } from "../Common/Util";

export class Fighter {
    private _hp: number;
    private _mana: number;
    protected card: FighterCard;

    constructor(
        protected prototype: FighterPrototype, 
        protected game: Game) {
        this.card = this.createCard(prototype);
        this._hp = prototype.hp;
        this._mana = prototype.mana;
        this.update();
    }

    private async update(): Promise<void> {
        if (this.hp === 0) return;
        this.addMana(5);
        this.addHp(2);
        await Util.sleep(500);
        await this.update();
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
        this.card.setManaWidth(this._mana * 100 / this.prototype.mana);
    }

    public addMana(count: number): void {
        this.mana = this._mana + count;
    }

    private getAdequateMana(count: number): number {
        if (count < 0) return 0;
        if (count > this.prototype.mana) return this.prototype.mana;
        return count;
    }

    public activate(effect: Function): void {
        this.card.turnOn(effect, this);
    }

    public disactivate(): void {
        this.card.turnOff();
    }

    public getCoords(): {left: number, top: number} {
        return this.card.getCoords();
    }
}