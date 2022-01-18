import { Util } from "../Common/Util";

interface IPoint {
    left: number;
    top: number;
} 

export class PerkAnimation {
    constructor(
        private startPoint: IPoint,
        private imagesPaths: Array<string> 
    ) {}

    public async animate(endpoint: IPoint) {
        let $animation = $('.animation');
        $animation.removeClass('d-none');
        for (let index = 0; index < this.imagesPaths.length; index++) {
            let imagePath = this.imagesPaths[index];
            $animation.attr('src', imagePath);
            $animation.offset({ 
                left: this.startPoint.left + (endpoint.left - this.startPoint.left) * index / (this.imagesPaths.length),
                top: this.startPoint.top + (endpoint.top - this.startPoint.top) * index / (this.imagesPaths.length)
            });
            await Util.sleep(500 / this.imagesPaths.length);
        }
        $animation.addClass('d-none');
    }
}