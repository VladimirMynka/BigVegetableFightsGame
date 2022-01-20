import { Fighter } from "../Fighters/Fighter";
import { Game } from "../Main/Game";

export class PerkPrototype {
    constructor(
        public readonly id: number,
        public readonly name: string,
        public readonly mana: number,
        public readonly fighterManaDemand: number,
        public readonly info: string,
        public readonly effect: (target: Fighter, owner?: Fighter, game?: Game) => void,
        public readonly forSelf: boolean,
        public readonly actionString: string,
        public readonly score: number,
        public readonly animationPaths?: string[]
    ) {
    }
}