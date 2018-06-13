
import {Section} from "./section.model";
import {CatalogCommon} from "./catalog.model";

export class Building extends CatalogCommon {

  constructor(
    public id?: number,
    public name?: string,
    public comment?: string,
    public sections?: Section[]
  ) {
    super(id, name, comment);
  }

  toString() {
    return this.name;
  }

  clone(): this {
    return new (this.constructor as typeof Building)(
      this.id,
      this.name,
      this.comment,
      // todo: скорее всего скопируется ссылка на массив
      this.sections) as this;
  }

  static assign(element: any): Building {
    return new Building(
      element.id,
      element.name,
      element.comment);
  }
}


