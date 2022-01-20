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
    protected override readonly perks: HeroPerk[];

    constructor(
        prototype: HeroPrototype,
        game: Game
    ) {
        super(prototype, game);
    }

    protected override initializePerks(): void {
        this.prototype.skills.forEach(perkNumber => {
            if(store.perks[perkNumber].forSelf) 
                this.perks.push(new OnHeroPerk(store.perks[perkNumber], this, this.game));
            else 
                this.perks.push(new OnEnemyPerk(store.perks[perkNumber], this, this.game));
        });
    }

    protected override createCard(prototype: FighterPrototype): FighterCard {
        return new HeroCard(prototype.name, prototype.motto);
    }

    public setMethod(targetMethod: Function, effectMethod: Function): void {
        targetMethod(effectMethod);
    }

    public sayManaLacking(): void {
        (<HeroCard>this.card).drawManaLacking();
    }

    protected override remove(): void {
        super.remove();
        this.game.gameEnded = true;
        this.game.heroWon = false;
    }
}