
import {City} from "./city.model";
import {GroupContractor} from "./groupContractor.model";
import {CatalogCommon} from "./catalog.model";

export class Contractor extends CatalogCommon {

  constructor(
    public id?: number,
    public name?: string,
    public city?: City,
    public group?: GroupContractor,
    public email?: string,
    public telephone?: string,
    public comment?: string
  ) {
    super(id, name, comment);
  }

  clone(): this {
    return new (this.constructor as typeof Contractor)(
      this.id,
      this.name,
      this.city ? this.city.clone() : null,
      this.group ? this.group.clone() : null,
      this.email,
      this.telephone,
      this.comment) as this;
  }

  toString() {
    return this.name;
  }

  static assign(element: any): Contractor {
    return new Contractor(
      element.id,
      element.name,
      element.city ? City.assign(element.city) : null,
      element.group ? GroupContractor.assign(element.group) : null,
      element.email,
      element.telephone,
      element.comment);
  }
}
