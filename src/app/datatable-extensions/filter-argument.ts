export class FilterArgument {
  constructor(
    public name: string,
    public datatype: string,
    public mode: string,
    public value: any,
    public secondValue: any = null
  ) {}
}
