
import {Section} from "./section.model";

export class Building {

  constructor(
    public id?: number,
    public name?: string,
    public comment?: string,
    public sections?: Section[]
  ) {}

  toString() {
    return this.name;
  }
}


