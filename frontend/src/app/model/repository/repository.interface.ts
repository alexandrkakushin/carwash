import {CatalogCommon} from "../catalog.model";

export interface Repository {

  refresh(): void;

  items(): CatalogCommon[];

  remove(element: CatalogCommon): void;

  add(element: CatalogCommon): void;

  edit(element: CatalogCommon): void;

}
