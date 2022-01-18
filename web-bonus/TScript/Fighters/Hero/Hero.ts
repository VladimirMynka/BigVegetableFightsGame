import { Fighter } from "../Fighter";
import { HeroPrototype } from "./HeroPrototype";
import { FighterPrototype } from "../FighterPrototype";
import { HeroCard } from "./HeroCard";
import { FighterCard } from "../FighterCard";
import { Perk } from "../../Perks/Perk";
import { OnHeroPerk } from "../../Perks/OnHeroPerk";
import { OnEnemyPerk } from "../../Perks/OnEnemyPerk";
import { Game } from "../../Main/Game";
import { store } from "../../Store/Store";

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
                this._perks.push(new OnHeroPerk(store.perks[perkNumber], this, this.game));
            else 
                this._perks.push(new OnEnemyPerk(store.perks[perkNumber], this, this.game));
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

    public sayManaLacking(): void {
        (<HeroCard>this.card).drawManaLacking();
    }
}