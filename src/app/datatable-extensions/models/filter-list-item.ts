export default class FilterListItem {
    active = false;
    show = false;

    constructor(
        public key: any,
        public value: string,
        public short: string
    ) {}
}
