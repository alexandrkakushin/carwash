
import {UnitMeasure} from "./unitMeasure.model";
import {CatalogCommon} from "./catalog.model";

export class Nomenclature extends CatalogCommon {

  constructor(
    public id?: number,
    public article?: string,
    public name?: string,
    public comment?: string,
    public type?: string,
    public unit?: UnitMeasure,
    public price?: number
  ) {
    super(id, name, comment);

    this.article = article;
    this.type = type;
    this.unit = unit;
    this.price = price;
  }

  clone(): this {
    return new (this.constructor as typeof Nomenclature)(
      this.id,
      this.article,
      this.name,
      this.comment,
      this.type,
      this.unit,
      this.price) as this;
  }

  toString() {
    return '(' + this.article + ') ' + this.name;
  }
}
