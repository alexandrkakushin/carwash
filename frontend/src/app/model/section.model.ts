
import {Stage} from "./stage.model";
import {CatalogCommon} from "./catalog.model";

export class Section extends CatalogCommon {

  constructor(
    public id?: number,
    public name?: string,
    public comment?: string,
    public stages?: Stage[]
  ) {
    super(id, name, comment);
  }

  clone(): this {
    return new (this.constructor as typeof Section)(
      this.id,
      this.name,
      this.comment,
      // todo: скорее всего скопируется ссылка на массив
      this.stages) as this;
  }

  toString() {
    return this.name;
  }

}
