import { Fighter } from "../Fighter";
import { EnemyCard } from "./EnemyCard";
import { FighterCard } from "../FighterCard";
import { FighterPrototype } from "../FighterPrototype";
import { EnemyPerk } from "../../Perks/ForEnemy/EnemyPerk";
import { Game } from "../../Main/Game";
import { store } from "../../Store/Store";
import { Util } from "../../Common/Util";

export class Enemy extends Fighter {
    private _perks: EnemyPerk[];

    constructor(
        prototype: FighterPrototype,
        game: Game
    ){
        super(prototype, game);
        this._perks = [];
        this.initializePerks();
        this.update();
    }

    private initializePerks(): void {
        this.prototype.skills.forEach(perkNumber => {
            this._perks.push(new EnemyPerk(store.perks[perkNumber], this, this.game));
        });
    }

    protected override async update(): Promise<void> {
        if (this.game.gameEnded) return;
        if(Util.randomInt(0, 100) < 5)
            this._perks[Util.randomInt(0, this._perks.length)].apply();
        super.update();
    }

    protected override createCard(prototype: FighterPrototype): FighterCard {
        return new EnemyCard(prototype.name, prototype.motto);
    }

    protected override remove(): void {
        super.remove();
        this.game.increaseKilledCount();
    }
}