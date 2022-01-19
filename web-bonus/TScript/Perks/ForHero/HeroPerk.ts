import { PerkCard } from "../PerkCard";
import { PerkPrototype } from "../PerkPrototype";
import { Hero } from "../../Fighters/Hero/Hero";
import { Util } from "../../Common/Util";
import { Fighter } from "../../Fighters/Fighter";
import { Game } from "../../Main/Game";
import { PerkAnimation } from "../PerkAnimation";
import { Perk } from "../Perk";

export class HeroPerk extends Perk {
    private _card: PerkCard;

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

    public getOnclick(): Function {
        return () => {
            let hero = <Hero>this.owner;
            hero.setMethod(this.getOnclickType(),
                (target: Fighter) => {
                    if (this.prototype.fighterManaDemand > hero.mana) {
                        hero.sayManaLacking();
                        return;
                    }
                    this.mana = 0;
                    hero.addMana(-this.prototype.fighterManaDemand);

                    if (this.animation != null)
                        this.animation.animate(target.getCoords()).then(() => {
                            this.prototype.effect(target, hero, this.game);
                        });
                    else
                        this.prototype.effect(target, hero, this.game);

                    this.game.disactivateEnemies();
                    hero.disactivate();
                }
            )
        }
    }

    public getOnclickType(): Function {
        return (<Hero>this.owner).getOnEnemyMethod();
    }
}