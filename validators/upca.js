function upc_a(data) {
  const cleanedBarcode = data.replace(/\s/g, "").replace(/-/g, "");
  // 14-digits (UPC-A) with leading zeros "00012345678905"
  // 12-digits (UPC-A) "012345678905"

  if (![12, 14].includes(cleanedBarcode.length)) {
    return false;
  }

  if (!/^\d+$/.test(cleanedBarcode)) {
    return false;
  }

  let sum = 0;

  const length = cleanedBarcode.length;

  for (let i = 0; i < length - 1; i++) {
    sum += parseInt(cleanedBarcode[i]) * (i % 2 === 0 ? 3 : 1);
  }

  const checksum = (10 - (sum % 10)) % 10;
  return parseInt(cleanedBarcode[length - 1]) === checksum;
}

module.exports = upc_a;
