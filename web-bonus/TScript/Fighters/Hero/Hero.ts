import { Fighter } from "../Fighter";
import { HeroPrototype } from "./HeroPrototype";
import { FighterPrototype } from "../FighterPrototype";
import { HeroCard } from "./HeroCard";
import { FighterCard } from "../FighterCard";
import { OnHeroPerk } from "../../Perks/ForHero/OnHeroPerk";
import { OnEnemyPerk } from "../../Perks/ForHero/OnEnemyPerk";
import { Game } from "../../Main/Game";
import { store } from "../../Store/Store";
import { HeroPerk } from "../../Perks/ForHero/HeroPerk";

export class Hero extends Fighter {
    private _perks: Array<HeroPerk>;

    constructor(
        prototype: HeroPrototype,
        game: Game
    ) {
        super(prototype, game);
        this._perks = []; 
        this.initializePerks();
        this.update();
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

    protected override remove(): void {
        super.remove();
        this.game.gameEnded = true;
    }
}