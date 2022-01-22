

export class GameCard {
    protected $card: JQuery<HTMLElement>;

    public getCoords(): {left: number, top: number} {
        return this.$card.offset();
    }

    public getCard(): JQuery<HTMLElement> {
        return this.$card;
    }
}