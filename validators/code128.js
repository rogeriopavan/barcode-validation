function code_128(data) {
  // code 128 supports all ASCII characters including control and special characters
  return /^[\x00-\x7F]+$/.test(data);
}

module.exports = code_128;
