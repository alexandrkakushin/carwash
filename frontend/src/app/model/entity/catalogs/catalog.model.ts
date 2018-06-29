
export class CatalogCommon {

  constructor(
    public id?: number,
    public name?: string,
    public comment?: string
  ) {}

  clone(): this {
    return new (this.constructor as typeof CatalogCommon)(this.id, this.name, this.comment) as this;
  }

  static assign(item: any): CatalogCommon {
    return new CatalogCommon(item.id, item.name, item.comment);
  }

  toString() {
    return this.name;
  }
}

