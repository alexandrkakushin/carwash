
import {Nomenclature} from "./catalogs/nomenclature.model";
import {City} from "./catalogs/city.model";

export class Price {

  constructor(
    public id?: number,
    public date?: Date,
    public value?: number,
    public nomenclature?: Nomenclature,
    public city?: City
  ) {}

  clone(): this {
    return new (this.constructor as typeof Price)(
      this.id,
      this.date,
      this.value,
      this.nomenclature,
      this.city) as this;
  }

  toString() {
    return this.value;
  }

  static assign(element: any): Price {
    return new Price(
      element.id,
      element.date,
      element.value,
      element.nomenclature ? Nomenclature.assign(element.nomenclature) : null,
      element.city ? City.assign(element.city) : null
    );
  }
}
