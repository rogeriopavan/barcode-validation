const { issn: issnValidator } = require("@form-validation/validator-issn");

function issn(data) {
  const res = issnValidator().validate({
    value: data,
  });

  return res.valid;
}

module.exports = issn;
