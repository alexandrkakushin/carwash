

export class CatalogCommon {

  constructor(
    public id?: number,
    public name?: string,
    public comment?: string
  ) {}

  clone(): this {
    return new (this.constructor as typeof CatalogCommon)(this.id, this.name, this.comment) as this;
  }

  toString() {
    return this.name;
  }
}

