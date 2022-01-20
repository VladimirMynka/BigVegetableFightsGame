import { Enemy } from "../../Fighters/Enemy/Enemy"
import { Game } from "../../Main/Game"
import { Perk } from "../Perk"
import { PerkAnimation } from "../PerkAnimation";
import { PerkPrototype } from "../PerkPrototype"


export class EnemyPerk extends Perk {
    constructor(
        prototype: PerkPrototype,
        owner: Enemy,
        game: Game
    ) {
        super(prototype, owner, game);
        if (this.prototype.animationPaths != null)
            this.animation = new PerkAnimation(owner.getCard(), prototype?.animationPaths);
        this.update();
    }

    public apply() {
        let target = this.prototype.forSelf ? this.owner : this.game.hero;
        this.applyEffect(target);
    }
}