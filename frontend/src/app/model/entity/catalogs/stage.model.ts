
import {Nomenclature} from "./nomenclature.model";
import {CatalogCommon} from "./catalog.model";
import {Kit} from "./kit.model";

export class Stage extends CatalogCommon {

  constructor(
    public id?: number,
    public name?: string,
    public comment?: string,
    public kit?: Kit,
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
      this.kit ? this.kit.clone() : null,
      this.service ? this.service.clone() : null,
      this.mechanism ? this.mechanism.clone() : null) as this;
  }

  toString() {
    return this.name;
  }

  static assign(element: any): Stage {
    return new Stage(
      element.id,
      element.name,
      element.comment,
      element.kit ? Kit.assign(element.kit, true) : null,
      element.service ? Nomenclature.assign(element.service) : null,
      element.mechanism ? Nomenclature.assign(element.mechanism) : null);
  }
}
