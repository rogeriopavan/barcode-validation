function ean_13(data) {
  const checksum = (number) => {
    const res = number
      .substr(0, 12)
      .split("")
      .map((n) => +n)
      .reduce((sum, a, idx) => (idx % 2 ? sum + a * 3 : sum + a), 0);

    return (10 - (res % 10)) % 10;
  };

  return (
    data.search(/^[0-9]{13}$/) !== -1 && Number(data[12]) === checksum(data)
  );
}

module.exports = ean_13;
