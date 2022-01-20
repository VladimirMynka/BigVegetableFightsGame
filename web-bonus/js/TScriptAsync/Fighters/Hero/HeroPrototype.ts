import { FighterPrototype } from "../FighterPrototype";

export class HeroPrototype extends FighterPrototype {
    constructor(
        id: number, 
        name: string, 
        hp: number, 
        mana: number, 
        skills: Array<number>, 
        motto: string,
        public readonly firstDescription: string,
        public readonly secondDescription: string,
        public readonly answer: string,
        public readonly reaction?: ($card: JQuery<HTMLElement>) => void
    ) {
        super(id, name, hp, mana, skills, motto);
    }
}