
import {City} from "./city.model";
import {GroupContractor} from "./groupContractor.model";

export class Contractor {
  constructor(
    public id: number,
    public name: string,
    public city: City,
    public group: GroupContractor,
    public email?: string,
    public telephone?: string,
    public comment?: string
  ) {}

  toString() {
    return this.name;
  }
}
