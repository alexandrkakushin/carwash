
import {Building} from "./building.model";
import {City} from "./city.model";

export class Target {

  constructor(
    public id?: number,
    public name?: string,
    public comment?: string,
    public building?: Building,
    public city?: City,
    public point?: number
  ) {}

  toString() {
    return this.name;
  }
}
