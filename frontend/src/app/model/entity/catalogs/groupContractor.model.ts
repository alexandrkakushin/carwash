
import {CatalogCommon} from "./catalog.model";

export class GroupContractor extends CatalogCommon {

  constructor(
    public id?: number,
    public name?: string,
    public comment?: string
  ) {
    super(id, name, comment);
  }

  clone(): this {
    return new (this.constructor as typeof GroupContractor)(
      this.id,
      this.name,
      this.comment) as this;
  }

  toString() {
    return this.name;
  }

  static assign(element: any): GroupContractor {
    return new GroupContractor(element.id, element.name, element.comment);
  }
}
