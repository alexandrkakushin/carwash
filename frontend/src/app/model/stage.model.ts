
import {Nomenclature} from "./nomenclature.model";
import {CatalogCommon} from "./catalog.model";

export class Stage extends CatalogCommon {

  constructor(
    public id?: number,
    public name?: string,
    public comment?: string,
    public material?: Nomenclature,
    public service?: Nomenclature,
    public mechanism?: Nomenclature
  ) {
    super(id, name, comment);
  }

  clone(): this {
    return new (this.constructor as typeof Stage)(
      this.id,
      this.name,
      this.comment,
      this.material,
      this.service,
      this.mechanism) as this;
  }

  toString() {
    return this.name;
  }
}
