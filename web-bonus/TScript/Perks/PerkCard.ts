import { ICard } from "../Common/ICard";

export class PerkCard implements ICard {
    private _$card: JQuery<HTMLElement>;
    private _onclick: Function;

    constructor(name = "perk name", info = "info") {
        this._$card = this.$initializeCard(name, info);
        $('#hero-menu').append(this._$card);
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
        this._$card.find('.mana-progress').width(percents + '%');
        if (percents >= 100) this.turnOn();
        else this.turnOff();
    }

    getRealPercents(percents: number): number {
        if (percents < 0) return 0;
        if (percents > 100) return 100;
        return percents;
    }

    turnOn(): void {
        this._$card.find('.mana-progress').removeClass('progress-bar-striped progress-bar-animated');
        this._$card.on("click", () => {
            $('.perk-card').removeClass('border-primary');
            this._$card.addClass('border-primary');
            this._onclick();
        });
        this._$card.on("mouseenter", () => {
            this._$card.removeClass('bg-light');
        });
        this._$card.on("mouseleave", () => {
            this._$card.addClass('bg-light');
        });
        this._$card.attr('role', 'button');
    }

    turnOff(): void {
        this._$card.find('.mana-progress').addClass('progress-bar-striped progress-bar-animated');
        this._$card.off("click mouseenter mouseleave");
        this._$card.attr('role', '');
        this._$card.removeClass('border-primary');
    }
}