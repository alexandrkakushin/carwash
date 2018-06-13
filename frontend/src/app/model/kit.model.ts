
import {CatalogCommon} from "./catalog.model";

export class Kit extends CatalogCommon {
  constructor(
    public id?: number,
    public name?: string,
    public comment?: string
  ) {
    super(id, name, comment);
  }

  clone(): this {
    return new (this.constructor as typeof Kit)(
      this.id,
      this.name,
      this.comment) as this;
  }

  toString() {
    return this.name;
  }

  static assign(element: any): Kit {
    return new Kit(element.id, element.name, element.comment);
  }
}
