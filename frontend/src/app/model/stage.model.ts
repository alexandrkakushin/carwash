
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

  static assign(element: any): Stage {
    return new Stage(
      element.id,
      element.name,
      element.comment,
      element.material ? Nomenclature.assign(element.material) : null,
      element.service ? Nomenclature.assign(element.service) : null,
      element.mechanism ? Nomenclature.assign(element.mechanism) : null);
  }

  get materialId(): number {
    return this.material ? this.material.id : null;
  }

  set materialId(value: number) {
    this.material = new Nomenclature(value);
  }

  get serviceId(): number {
    return this.service ? this.service.id : null;
  }

  set serviceId(value: number) {
    this.service = new Nomenclature(value);
  }

  get mechanismId(): number {
    return this.mechanism ? this.mechanism.id : null;
  }

  set mechanismId(value: number) {
    this.mechanism = new Nomenclature(value);
  }
}
