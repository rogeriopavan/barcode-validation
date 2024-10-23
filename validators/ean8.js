function ean_8(data) {
  const checksum = (digit) => {
    const res = digit
      .substr(0, 7)
      .split("")
      .map((n) => +n)
      .reduce((sum, a, idx) => (idx % 2 ? sum + a : sum + a * 3), 0);

    return (10 - (res % 10)) % 10;
  };

  return data.search(/^[0-9]{8}$/) !== -1 && Number(data[7]) === checksum(data);
}

module.exports = ean_8;
