
export interface CatalogOperation {

  columns(): any[];

  items(): any[];

  add(element: any): void;

  edit(element: any): void;

  remove(element: any): void;

}
