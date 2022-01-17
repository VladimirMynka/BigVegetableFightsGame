import { Fighter } from "./Fighter";

export class FighterCard {
    protected $card: JQuery<HTMLElement>;

    constructor(name = "enemy name", motto = "motto") {
        this.$card = this.$initializeCard(name, motto);
        this.$getMenu().append(this.$card);
    }

    protected $getMenu(): JQuery<HTMLElement> {
        return $('#enemies-menu');
    }

    private $initializeCard(name: string, motto: string): JQuery<HTMLElement> {
        let $card = $('#fighter-card').clone();
        $card.find('.my-title').html(name);
        $card.find('.my-motto').html(motto);
        $card.removeClass('d-none');
        return $card;
    }

    public setHpWidth(percents: number): void {
        percents = this.getRealPercents(percents);
        this.$card.find('.hp-progress').width(percents + '%');
    }

    public setManaWidth(percents: number): void {
        percents = this.getRealPercents(percents);
        this.$card.find('.mana-progress').width(percents + '%');
    }

    private getRealPercents(percents: number): number {
        if (percents < 0) return 0;
        if (percents > 100) return 100;
        return percents;
    }

    public turnOn(effect: Function, owner: Fighter): void {
        this.$card.off("click mouseenter mouseleave");
        this.$card.on("click", () => {
            effect(owner);
        });
        this.$card.on("mouseenter", () => {
            this.$card.removeClass('bg-light');
        });
        this.$card.on("mouseleave", () => {
            this.$card.addClass('bg-light');
        });
        this.$card.attr('role', 'button');
        this.$card.addClass('bg-light');
    }

    public turnOff(): void {
        this.$card.off("click mouseenter mouseleave");
        this.$card.attr('role', '');
        this.$card.removeClass('border-primary');
        this.$card.removeClass('bg-light');
    }
}