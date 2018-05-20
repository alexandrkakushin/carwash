
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
      this.material ? this.material.clone() : null,
      this.service ? this.service.clone() : null,
      this.mechanism ? this.mechanism.clone() : null) as this;
  }

  toString() {
    return this.name;
  }
}
