export class Card {
    constructor(
        public setName: string,
        public name: string,
        public types: string[],
        public colors: string[],
        public text: string,
        public imageUrl: string
    ) { }
}
