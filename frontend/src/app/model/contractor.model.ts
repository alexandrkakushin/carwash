
import {City} from "./city.model";
import {GroupContractor} from "./groupContractor.model";
import {CatalogCommon} from "./catalog.model";

export class Contractor extends CatalogCommon {
  constructor(
    public id: number,
    public name: string,
    public city: City,
    public group: GroupContractor,
    public email?: string,
    public telephone?: string,
    public comment?: string
  ) {
    super(id, name, comment);
  }

  clone(): this {
    return this;
  }

  toString() {
    return this.name;
  }
}
