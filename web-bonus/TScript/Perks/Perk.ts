import { PerkCard } from "./PerkCard";
import { PerkPrototype } from "./PerkPrototype";
import { Hero } from "../Fighters/Hero/Hero";
import { Util } from "../Common/Util";
import { Fighter } from "../Fighters/Fighter";
import { Game } from "../Main/Game";

export class Perk {
    private _card: PerkCard;
    private _mana: number;

    constructor(
        protected prototype: PerkPrototype, 
        protected hero: Hero,
        private _game: Game
        ) {
        this._card = this.createCard(prototype);
        this._card.setOnclick(this.getOnclick());
        this._mana = 0;
        this.update();
    }

    private async update(): Promise<void> {
        this.addMana(1);
        await Util.sleep(100);
        await this.update();
    }

    protected createCard(prototype: PerkPrototype): PerkCard {
        return new PerkCard(prototype.name, prototype.info);
    }

    get mana(): number {
        return this._mana;
    }

    set mana(count: number) {
        this._mana = this.getRealMana(count);
        this._card.setProgressWidth(this.mana * 100 / this.prototype.mana);
    }

    public addMana(count: number): void {
        this.mana = this.mana + count;
    }

    private getRealMana(count: number): number {
        if (count < 0) return 0;
        if (count > this.prototype.mana) return this.prototype.mana;
        return count;
    }

    public getOnclick(): Function {
        return () => { 
            this.hero.setMethod(this.getOnclickType(), 
            (target: Fighter) => { 
                this.mana = 0; 
                this.prototype.effect(target, this.hero, this._game);
                this._game.disactivateEnemies();
                this.hero.disactivate(); 
            } 
        )}
    }

    public getOnclickType(): Function {
        return this.hero.getOnEnemyMethod();
    }
}