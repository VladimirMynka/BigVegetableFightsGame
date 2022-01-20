

export class FighterPrototype {
    constructor(
        public readonly id: number, 
        public readonly name: string, 
        public readonly hp: number, 
        public readonly mana: number, 
        public readonly skills: number[], 
        public readonly motto: string
        ) {
    }
}