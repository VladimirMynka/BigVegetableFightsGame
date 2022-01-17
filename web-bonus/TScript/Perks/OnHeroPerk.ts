import { Perk } from "./Perk";

export class OnHeroPerk extends Perk {
    public override getOnclickType(): Function {
        return this.hero.getOnHeroMethod();
    }
}