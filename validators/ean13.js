const { ean } = require("@form-validation/validator-ean");

function ean_13(data) {
  if (data.search(/^[0-9]{13}$/) === -1) {
    return false;
  }

  const res = ean().validate({
    value: data,
  });

  return res.valid;
}

module.exports = ean_13;
