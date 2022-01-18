import { Fighter } from "../Fighter";
import { EnemyCard } from "./EnemyCard";
import { FighterCard } from "../FighterCard";
import { FighterPrototype } from "../FighterPrototype";

export class Enemy extends Fighter {
    protected override createCard(prototype: FighterPrototype): FighterCard {
        return new EnemyCard(prototype.name, prototype.motto);
    }

    protected override remove(): void {
        super.remove();
    }
}