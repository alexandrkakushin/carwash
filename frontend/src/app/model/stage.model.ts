
import {Nomenclature} from "./nomenclature.model";

export class Stage {
  constructor(
    public id?: number,
    public name?: string,
    public comment?: string,
    public service?: Nomenclature,
    public material?: Nomenclature,
    public mechanism?: Nomenclature
  ) {}

  toString() {
    return this.name;
  }
}
