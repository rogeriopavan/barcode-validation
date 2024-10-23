type Symbology = "ean_13" | "ean_8" | "jan_13";

declare module "barcode-validation" {
  export function isValid(symbology: Symbology, value: string): boolean;
}
