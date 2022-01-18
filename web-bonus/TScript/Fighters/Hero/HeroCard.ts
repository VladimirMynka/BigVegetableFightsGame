import { Util } from "../../Common/Util";
import { FighterCard } from "../FighterCard";

export class HeroCard extends FighterCard {
    constructor(name: string, motto: string) {
        super(name, motto);
        this.$card.removeClass('enemy-card');
    }

    protected override $getMenu(): JQuery<HTMLElement> {
        return $('#hero-menu');
    }

    public async drawManaLacking() {
        let $manaProgress = this.$card.find('.mana-progress');
        $manaProgress.removeClass('bg-primary').addClass('bg-dark');
        await Util.sleep(500);
        $manaProgress.removeClass('bg-dark').addClass('bg-primary');
    }
}