export class FilterArgument {
  constructor(
    public name: string,
    public datatype: string,
    public mode: string = null,
    public value: any = null,
    public secondValue: any = null
  ) {
    
  }
}
