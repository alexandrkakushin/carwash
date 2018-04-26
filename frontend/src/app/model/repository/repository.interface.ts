
export interface Repository {

  items(): any[];

  remove(element: any): boolean;

  add(element: any): boolean;

  edit(element: any): boolean;

}
