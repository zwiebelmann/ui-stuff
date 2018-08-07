export default class FilterListItem {
    active: boolean = false;

    constructor(
        public key: any,
        public value: string,
        public short: string
    ) {}
}