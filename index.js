const validators = require("./validators");

function isValid(symbology, value) {
  const validator = validators[symbology];

  if (!validator) {
    throw new Error("Invalid symbology " + symbology);
  }

  return validator(value);
}

module.exports = { isValid };
