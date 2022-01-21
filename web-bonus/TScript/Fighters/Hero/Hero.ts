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
import { Util } from "../../Common/Util";

export class Hero extends Fighter {
    protected override readonly perks: HeroPerk[];
    public moveEnded = true;

    constructor(
        prototype: HeroPrototype,
        game: Game
    ) {
        super(prototype, game);
    }

    protected override initializePerks(): void {
        if (this.prototype.skills.indexOf(0) < 0)
            this.perks.push(new OnHeroPerk(store.perks[0], this, this.game));
        this.prototype.skills.forEach(perkNumber => {
            if (store.perks[perkNumber].forSelf)
                this.perks.push(new OnHeroPerk(store.perks[perkNumber], this, this.game));
            else
                this.perks.push(new OnEnemyPerk(store.perks[perkNumber], this, this.game));
        });
    }

    public override async update() {
        super.update();
	if (this.hp === 0 || this.wereRemoved) {
            return;
        }
        this.perks.forEach((perk) => perk.tryActivate());
        this.moveEnded = false;
        while (!this.moveEnded)
            await Util.sleep(1000);
        this.perks.forEach((perk) => perk.deactivate());
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