# barcode-validation

A JavaScript library for validating barcodes. Supported symbologies: EAN-13, EAN-8, JAN-13, JAN-18, ISBN, UPC-A, UPC-E".

## Installation

Use the npm to install barcode-validation

```bash
npm install barcode-validation
```

## Usage

```javascript
const { isValid } = require("barcode-validation");

const result = isValid("ean_8", "96385074"); //true 

const result = isValid("ean_13", "1493221968850"); //true

const result = isValid("isbn", "978-0-596-52068-7"); //true

const result = isValid("issn", "0378-5955"); //true

const result = isValid("upc_a", "090936000069"); //true

const result = isValid("upc_e", "02647494"); //true

```

## Dependencies

```javascript
  "@form-validation/validator-ean": "2.4.0",
  "@form-validation/validator-isbn": "2.4.0",
  "@form-validation/validator-issn": "2.4.0"

```
