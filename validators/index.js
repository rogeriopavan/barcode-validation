const ean_8 = require("./ean8.js");
const ean_13 = require("./ean13.js");
const isbn = require("./isbn");
const issn = require("./issn");
const upc_a = require("./upca");
const upc_e = require("./upce");

module.exports = {
  ean_8,
  ean_13,
  jan_8: ean_8,
  jan_13: ean_13,
  isbn,
  issn,
  upc_a,
  upc_e,
};
