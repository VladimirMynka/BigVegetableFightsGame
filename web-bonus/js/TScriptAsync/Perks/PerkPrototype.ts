import { Fighter } from "../Fighters/Fighter";
import { Game } from "../Main/Game";

export class PerkPrototype {
    constructor(
        public id: number,
        public name: string,
        public mana: number,
        public fighterManaDemand: number,
        public info: string,
        public effect: (target: Fighter, owner?: Fighter, game?: Game) => void,
        public forSelf: boolean,
        public actionString: string,
        public score: number,
        public animationPaths?: string[]
    ) {
    }
}