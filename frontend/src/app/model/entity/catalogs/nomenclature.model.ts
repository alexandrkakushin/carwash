
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
      this.unit ? this.unit.clone() : null,
      this.price) as this;
  }

  toString() {
    return this.name;
  }

  static assign(element: any): Nomenclature {
    return new Nomenclature(
      element.id,
      element.article,
      element.name,
      element.comment,
      element.type,
      element.unit ? UnitMeasure.assign(element.unit) : null,
      element.price
    );
  }

  isService(): boolean {
    return this.type == "SERVICE";
  }

  isMaterial(): boolean {
    return this.type == "MATERIAL";
  }

  isMechanism(): boolean {
    return this.type == "MECHANISM";
  }
}
