
export class City {
  constructor(
    public id?: number,
    public name?: string,
    public comment?: string
  ) {}

  toString() {
    return this.name;
  }
}
