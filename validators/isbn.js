const { isbn: isbnValidator } = require("@form-validation/validator-isbn");

function isbn(data) {
  const res = isbnValidator().validate({
    value: data,
  });

  return res.valid;
}

module.exports = isbn;
