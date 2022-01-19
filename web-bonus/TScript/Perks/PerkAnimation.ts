import { GameCard } from "../Common/GameCard";
import { Util } from "../Common/Util";

export interface IPoint {
    left: number;
    top: number;
} 

export class PerkAnimation {
    constructor(
        private startPointHandler: GameCard,
        private imagesPaths: Array<string> 
    ) {}

    public async animate(endpoint: IPoint) {
        let $original = $('.animation');
        let $animation = $original.clone().removeClass('animation');
        $original.after($animation);
        $animation.removeClass('d-none');
        for (let index = 0; index < this.imagesPaths.length; index++) {
            let imagePath = this.imagesPaths[index];
            $animation.attr('src', imagePath);
            $animation.offset({ 
                left: this.startPointHandler.getCoords().left + (endpoint.left - this.startPointHandler.getCoords().left) * index / (this.imagesPaths.length),
                top: this.startPointHandler.getCoords().top + (endpoint.top - this.startPointHandler.getCoords().top) * index / (this.imagesPaths.length)
            });
            await Util.sleep(500 / this.imagesPaths.length);
        }
        $animation.remove();
    }
}