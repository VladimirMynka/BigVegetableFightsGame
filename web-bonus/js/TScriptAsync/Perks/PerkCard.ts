import { GameCard } from "../Common/GameCard";

export class PerkCard extends GameCard {
    private _onclick: Function;

    constructor(name = "perk name", info = "info") {
        super();
        this.$card = this.$initializeCard(name, info);
        $('#hero-menu').append(this.$card);
        this._onclick = null;
    }

    $initializeCard(name: string, info: string): JQuery<HTMLElement> {
        let $card = $('#perk-card').clone();
        $card.find('.my-title').html(name);
        $card.find('.my-info').html(info);
        $card.removeClass('d-none');
        $card.addClass('bg-light');
        return $card;
    }

    setOnclick(method: Function): void {
        this._onclick = method;
    }

    setProgressWidth(percents: number): void {
        percents = this.getRealPercents(percents);
        this.$card.find('.mana-progress').width(percents + '%');
        if (percents >= 100) this.turnOn();
        else this.turnOff();
    }

    getRealPercents(percents: number): number {
        if (percents < 0) return 0;
        if (percents > 100) return 100;
        return percents;
    }

    turnOn(): void {
        this.$card.find('.mana-progress').removeClass('progress-bar-striped progress-bar-animated');
        this.$card.on("click", () => {
            $('.perk-card').removeClass('border-primary');
            this.$card.addClass('border-primary');
            this._onclick();
        });
        this.$card.on("mouseenter", () => {
            this.$card.removeClass('bg-light');
        });
        this.$card.on("mouseleave", () => {
            this.$card.addClass('bg-light');
        });
        this.$card.attr('role', 'button');
    }

    public turnOff(): void {
        this.$card.find('.mana-progress').addClass('progress-bar-striped progress-bar-animated');
        this.$card.off("click mouseenter mouseleave");
        this.$card.attr('role', '');
        this.$card.removeClass('border-primary');
    }
}