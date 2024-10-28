export type Symbology =
  | "ean_13"
  | "ean_8"
  | "jan_13"
  | "jan_8"
  | "isbn"
  | "issn"
  | "upc_a"
  | "upc_e";

declare module "barcode-validation" {
  export function isValid(symbology: Symbology, value: string): boolean;
}
