
import {CatalogCommon} from "./catalog.model";

export class City extends CatalogCommon {
  constructor(
    public id?: number,
    public name?: string,
    public comment?: string
  ) {
    super(id, name, comment);
  }

  clone(): this {
    return new (this.constructor as typeof City)(
      this.id,
      this.name,
      this.comment) as this;
  }

  toString() {
    return this.name;
  }

  static assign(element: any): City {
    return new City(element.id, element.name, element.comment);
  }
}
