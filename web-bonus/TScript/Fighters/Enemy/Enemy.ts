import { Fighter } from "../Fighter";
import { EnemyCard } from "./EnemyCard";
import { FighterCard } from "../FighterCard";
import { FighterPrototype } from "../FighterPrototype";
import { EnemyPerk } from "../../Perks/ForEnemy/EnemyPerk";
import { Game } from "../../Main/Game";
import { store } from "../../Store/Store";
import { Util } from "../../Common/Util";

export class Enemy extends Fighter {
    protected override readonly perks: EnemyPerk[];

    constructor(
        prototype: FighterPrototype,
        game: Game
    ){
        super(prototype, game);
    }

    protected override initializePerks(): void {
        if (this.prototype.skills.indexOf(0) < 0)
            this.perks.push(new EnemyPerk(store.perks[0], this, this.game));
        this.prototype.skills.forEach(perkNumber => {
            this.perks.push(new EnemyPerk(store.perks[perkNumber], this, this.game));
        });
    }

    public override async update(): Promise<void> {
        if (this.game.gameEnded) return;
	if (this.hp === 0 || this.wereRemoved) {
            return;
        }
        if(Util.randomInt(0, 100) < store.enemyMoveChance){
            let index = Util.randomInt(1, this.perks.length);
            while (index > 0 && !this.perks[index].canBeApplied())
                index = this.increasePerkIndex(index);
            this.perks[index].apply();
        }
        else
            this.perks[0].apply();
        super.update();
    }

    private increasePerkIndex(index: number): number {
        return (index + 1) % this.perks.length;
    }

    protected override createCard(prototype: FighterPrototype): FighterCard {
        return new EnemyCard(prototype.name, prototype.motto);
    }

    protected override remove(): void {
        super.remove();
        this.game.increaseKilledCount();
    }
}