
import {CatalogCommon} from "./catalog.model";

export class UnitMeasure extends CatalogCommon {

  constructor(
    public id?: number,
    public name?: string,
    public comment?: string
  ) {
    super(id, name, comment);
  }

  clone(): this {
    return new (this.constructor as typeof UnitMeasure)(
      this.id,
      this.name,
      this.comment) as this;
  }
}
