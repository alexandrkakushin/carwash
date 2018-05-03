
import {Building} from "./building.model";
import {City} from "./city.model";
import {CatalogCommon} from "./catalog.model";

export class Target extends CatalogCommon {

  constructor(
    public id?: number,
    public name?: string,
    public comment?: string,
    public building?: Building,
    public city?: City,
    public point?: number
  ) {
    super(id, name, comment);
  }

  clone(): this {
    return new (this.constructor as typeof Target) (
      this.id,
      this.name,
      this.comment,
      this.building,
      this.city,
      this.point) as this;
  }

  toString() {
    return this.name;
  }
}
