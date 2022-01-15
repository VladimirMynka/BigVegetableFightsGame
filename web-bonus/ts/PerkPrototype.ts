export class PerkPrototype {
    constructor(
        public id: number,
        public name: string,
        public mana: number,
        public info: string,
        public effect: Function,
        public forSelf: boolean
    ) {
    }
}