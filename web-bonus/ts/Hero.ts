import { Fighter } from "./Fighter";
import { HeroPrototype } from "./HeroPrototype";
import { FighterPrototype } from "./FighterPrototype";
import { HeroCard } from "./HeroCard";
import { FighterCard } from "./FighterCard";
import { Perk } from "./Perk";
import { OnHeroPerk } from "./OnHeroPerk";
import { OnEnemyPerk } from "./OnEnemyPerk";
import { Game } from "./Game";
import { store } from "./Store";

export class Hero extends Fighter {
    private _perks: Array<Perk>;

    constructor(
        prototype: HeroPrototype,
        game: Game
    ) {
        super(prototype, game);
        this._perks = []; 
        this.initializePerks();
    }

    private initializePerks(): void {
        this.prototype.skills.forEach(perkNumber => {
            if(store.perks[perkNumber].forSelf) 
                this._perks.push(new OnHeroPerk(store.perks[perkNumber], this));
            else 
                this._perks.push(new OnEnemyPerk(store.perks[perkNumber], this));
        });
    }

    protected override createCard(prototype: FighterPrototype): FighterCard {
        return new HeroCard(prototype.name, prototype.motto);
    }

    public setMethod(targetMethod: Function, effectMethod: Function): void {
        targetMethod(effectMethod);
    }

    public getOnEnemyMethod(): Function {
        return (effect: Function): void => {
            this.disactivate();
            this.game.activateEnemies(effect);
        };
    }

    public getOnHeroMethod(): Function {
        return (effect: Function): void => {
            this.game.disactivateEnemies();
            this.activate(effect);
        };
    }
}