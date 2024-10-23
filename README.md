# barcode-validation

A JavaScript library for validating barcodes. Supported symbologies: EAN-13, EAN-8".

## Installation

Use the npm to install barcode-validation

```bash
npm install barcode-validation
```

## Usage

```javascript
const { isValid } = require("barcode-validation");

# for 'ean_8'
const result = isValid("ean_8", "96385074"); //true 

# for 'ean_13'
const result = isValid("ean_13", "1493221968850"); //true


```
