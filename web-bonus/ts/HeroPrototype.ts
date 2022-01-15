import { FighterPrototype } from "./FighterPrototype";

export class HeroPrototype extends FighterPrototype {
    constructor(
        id: number, 
        name: string, 
        hp: number, 
        mana: number, 
        skills: Array<number>, 
        motto: string,
        public firstDescription: string,
        public secondDescription: string,
        public answer: string
        ) {
        super(id, name, hp, mana, skills, motto);
    }
}