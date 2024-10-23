const { ean } = require("@form-validation/validator-ean");

function ean_8(data) {
  if (data.search(/^[0-9]{8}$/) === -1) {
    return false;
  }

  const res = ean().validate({
    value: data,
  });

  return res.valid;
}

module.exports = ean_8;
