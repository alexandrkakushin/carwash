
import {Stage} from "./stage.model";

export class Section {

  constructor(
    public id?: number,
    public name?: string,
    public comment?: string,
    public stages?: Stage[]
  ) {}

  toString() {
    return this.name;
  }

}
