
import {CatalogCommon} from "./catalog.model";

export class City extends CatalogCommon {
  constructor(
    public id?: number,
    public name?: string,
    public comment?: string
  ) {
    super(id, name, comment);
  }

  toString() {
    return this.name;
  }
}
