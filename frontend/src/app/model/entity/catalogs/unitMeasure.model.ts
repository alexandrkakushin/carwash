
import {CatalogCommon} from "./catalog.model";

export class UnitMeasure extends CatalogCommon {

  constructor(
    public id?: number,
    public code?: string,
    public name?: string,
    public comment?: string
  ) {
    super(id, name, comment);
  }

  toString() {
    return (this.code ? '(' + this.code + ') ' : '') + this.name;
  }

  clone(): this {
    return new (this.constructor as typeof UnitMeasure)(
      this.id,
      this.code,
      this.name,
      this.comment) as this;
  }

  static assign(element: any): UnitMeasure {
    return new UnitMeasure(
      element.id,
      element.code,
      element.name,
      element.comment);
  }
}
