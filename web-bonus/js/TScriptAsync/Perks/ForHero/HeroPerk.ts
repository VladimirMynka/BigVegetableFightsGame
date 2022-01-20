import { PerkCard } from "../PerkCard";
import { PerkPrototype } from "../PerkPrototype";
import { Hero } from "../../Fighters/Hero/Hero";
import { Fighter } from "../../Fighters/Fighter";
import { Game } from "../../Main/Game";
import { PerkAnimation } from "../PerkAnimation";
import { Perk } from "../Perk";

type PerkCardOnClick = () => void;
export type ForFighterCardOnClick = (target: Fighter) => void;
export type ActivationFunction = (method: ForFighterCardOnClick) => void;


export abstract class HeroPerk extends Perk {
    private _card: PerkCard;
    protected override owner: Hero;


    constructor(
        prototype: PerkPrototype,
        hero: Hero,
        game: Game
    ) {
        super(prototype, hero, game)
        this._card = this.createCard(prototype);
        this._card.setOnclick(this.getOnclick());
        if (this.prototype.animationPaths != null)
            this.animation = new PerkAnimation(this._card, prototype?.animationPaths);
        this.update();
    }

    protected createCard(prototype: PerkPrototype): PerkCard {
        return new PerkCard(prototype.name, prototype.info);
    }

    override setMana(count: number) {
        super.setMana(count);
        this._card.setProgressWidth(this.mana * 100 / this.prototype.mana);
    }

    public getOnclick(): PerkCardOnClick {
        return () => {
            this.getActivator()(
                (target: Fighter) => {
                    if (this.prototype.fighterManaDemand > this.owner.mana) {
                        this.owner.sayManaLacking();
                        return;
                    }

                    this.applyEffect(target);
                }
            )
        }
    }

    protected override applyEffect(target: Fighter): void {
        if (this.canBeApplied) {
            super.applyEffect(target);
            this.game.addScore(this.prototype.score);
            this.game.deactivateEnemies();
            this.owner.deactivate();
        }
    }

    protected abstract getActivator(): ActivationFunction

    protected getOnEnemyMethod(): ActivationFunction {
        return (onClickFunction: ForFighterCardOnClick) => {
            this.owner.deactivate();
            this.game.activateEnemies(onClickFunction);
        };
    }

    protected getOnHeroMethod(): ActivationFunction {
        return (onClickFunction: ForFighterCardOnClick) => {
            this.game.deactivateEnemies();
            this.owner.activate(onClickFunction);
        };
    }
}