import { FighterCard } from "../FighterCard";

export class HeroCard extends FighterCard {
    constructor(name: string, motto: string) {
        super(name, motto);
        this.$card.removeClass('enemy-card');
    }

    protected override $getMenu(): JQuery<HTMLElement> {
        return $('#hero-menu');
    }
}