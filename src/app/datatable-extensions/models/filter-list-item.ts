export default class FilterListItem {
    active = false;

    constructor(
        public key: any,
        public value: string,
        public short: string
    ) {}
}
