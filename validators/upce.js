const upc_a = require("./upca");

function upc_e(data) {
  const EXPANSIONS = [
    "XX00000XXX",
    "XX10000XXX",
    "XX20000XXX",
    "XXX00000XX",
    "XXXX00000X",
    "XXXXX00005",
    "XXXXX00006",
    "XXXXX00007",
    "XXXXX00008",
    "XXXXX00009",
  ];

  function checksum(number) {
    var result = 0;

    var i;
    for (i = 1; i < 11; i += 2) {
      result += parseInt(number[i]);
    }
    for (i = 0; i < 11; i += 2) {
      result += parseInt(number[i]) * 3;
    }

    return (10 - (result % 10)) % 10;
  }

  function expandToUPCA(middleDigits, numberSystem) {
    const lastUpcE = parseInt(middleDigits[middleDigits.length - 1]);
    const expansion = EXPANSIONS[lastUpcE];

    let result = "";
    let digitIndex = 0;
    for (let i = 0; i < expansion.length; i++) {
      let c = expansion[i];
      if (c === "X") {
        result += middleDigits[digitIndex++];
      } else {
        result += c;
      }
    }

    result = `${numberSystem}${result}`;
    return `${result}${checksum(result)}`;
  }

  const cleanedBarcode = data.replace(/\s/g, "").replace(/-/g, "");
  // 14-digits (UPC-A) with leading zeros "00012345678905"
  // 12-digits (UPC-A) "012345678905"

  if (cleanedBarcode.length !== 8) {
    return false;
  }

  if (!/^\d+$/.test(cleanedBarcode)) {
    return false;
  }

  if (!["0", "1"].includes(cleanedBarcode.substring(0, 1))) {
    return false;
  }

  const expanded = expandToUPCA(cleanedBarcode, "0");

  const result = upc_a(expanded);

  return result;
}

module.exports = upc_e;
