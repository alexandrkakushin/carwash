
import {CatalogCommon} from "./catalog.model";
import {Nomenclature} from "./nomenclature.model";

export class Kit extends CatalogCommon {

  constructor(
    public id?: number,
    public name?: string,
    public comment?: string,
    public main?: Nomenclature,
    public materials?: Nomenclature[]
  ) {
    super(id, name, comment);
  }

  clone(): this {
    return new (this.constructor as typeof Kit)(
      this.id,
      this.name,
      this.comment,
      this.main,
      this.materials) as this;
  }

  toString() {
    return this.name;
  }

  static assign(element: any, short?: boolean): Kit {
    return new Kit(
      element.id,
      element.name,
      element.comment,
      !short && element.main ? Nomenclature.assign(element.main) : null,
      !short && element.materials ?
        element.materials.map((item) => {return Nomenclature.assign(item)}) : null
    );
  }
}
