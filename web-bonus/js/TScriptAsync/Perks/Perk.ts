import { PerkCard } from "./PerkCard";
import { PerkPrototype } from "./PerkPrototype";
import { Util } from "../Common/Util";
import { Game } from "../Main/Game";
import { PerkAnimation } from "./PerkAnimation";
import { Fighter } from "../Fighters/Fighter";

export class Perk {
    protected _mana: number;
    protected animation?: PerkAnimation;

    constructor(
        protected prototype: PerkPrototype,
        protected owner: Fighter,
        protected game: Game
    ) {
        this._mana = 0;
    }

    protected async update(): Promise<void> {
        this.addMana(1);
        await Util.sleep(100);
        await this.update();
    }

    protected createCard(prototype: PerkPrototype): PerkCard {
        return new PerkCard(prototype.name, prototype.info);
    }

    public get mana(): number {
        return this._mana;
    }

    public set mana(count: number) {
        this.setMana(count);
    }

    protected setMana(count: number) {
        this._mana = this.getRealMana(count);
    }

    public addMana(count: number): void {
        this.mana = this.mana + count;
    }

    protected getRealMana(count: number): number {
        if (count < 0) return 0;
        if (count > this.prototype.mana) return this.prototype.mana;
        return count;
    }

    protected applyEffect(target: Fighter): void {
        if (!this.canBeApplied())
            return;

        this.mana = 0;
        this.owner.addMana(-this.prototype.fighterManaDemand);

        if (this.animation != null)
            this.animation.animate(target.getCoords()).then(() => {
                this.prototype.effect(target, this.owner, this.game);
            });
        else
            this.prototype.effect(target, this.owner, this.game);
        this.game.addLog(this.owner, target, this.prototype.actionString);
    }

    protected canBeApplied(): boolean {
        return this.mana >= this.prototype.mana && this.owner.mana >= this.prototype.fighterManaDemand;
    }
}