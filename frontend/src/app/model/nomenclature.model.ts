
import {UnitMeasure} from "./unitMeasure.model";

export class Nomenclature {

  constructor(
    public id: number,
    public article: string,
    public name: string,
    public unit: UnitMeasure,
    public price: number,
    public comment?: string
  ) {}

  toString() {
    return '(' + this.article + ') ' + this.name;
  }
}
