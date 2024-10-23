const { isValid } = require("./index");

const cases = [
  {
    symbology: "ean_8",
    value: "12345",
    expected: false,
  },
  {
    symbology: "ean_8",
    value: "invalid",
    expected: false,
  },
  {
    symbology: "ean_8",
    value: "96385074",
    expected: true,
  },
  {
    symbology: "ean_13",
    value: "7654321",
    expected: false,
  },
  {
    symbology: "ean_13",
    value: "96385074",
    expected: false,
  },
  {
    symbology: "ean_13",
    value: "invalid",
    expected: false,
  },
  {
    symbology: "ean_13",
    value: "1493221968850",
    expected: true,
  },
  {
    symbology: "ean_13",
    value: "1122261900581",
    expected: true,
  },
  {
    symbology: "ean_13",
    value: "978020137962",
    expected: false,
  },

  {
    symbology: "jan_8",
    value: "12345",
    expected: false,
  },
  {
    symbology: "jan_13",
    value: "invalid",
    expected: false,
  },
  {
    symbology: "jan_8",
    value: "96385074",
    expected: true,
  },
  {
    symbology: "jan_13",
    value: "7654321",
    expected: false,
  },
  {
    symbology: "jan_13",
    value: "96385074",
    expected: false,
  },
  {
    symbology: "jan_13",
    value: "invalid",
    expected: false,
  },
  {
    symbology: "jan_13",
    value: "1493221968850",
    expected: true,
  },
  {
    symbology: "jan_13",
    value: "1122261900581",
    expected: true,
  },
  {
    symbology: "jan_13",
    value: "978020137962",
    expected: false,
  },
  {
    symbology: "issn",
    value: "978020137962",
    expected: false,
  },
  {
    symbology: "issn",
    value: "96385074",
    expected: false,
  },
  {
    symbology: "issn",
    value: "0378-5955",
    expected: true,
  },
  {
    symbology: "issn",
    value: "0471-3445,",
    expected: false,
  },
  {
    symbology: "isbn",
    value: "978-0-596-52068-7",
    expected: true,
  },
  {
    symbology: "isbn",
    value: "978 0 596 52068 7",
    expected: true,
  },
  {
    symbology: "isbn",
    value: "9780596520687",
    expected: true,
  },
  {
    symbology: "isbn",
    value: "0-596-52068-9",
    expected: true,
  },
  {
    symbology: "isbn",
    value: "0471-3445,",
    expected: false,
  },
  {
    symbology: "isbn",
    value: "1122261900581",
    expected: false,
  },
];

describe("barcode-validator", () => {
  it.each(cases)(
    "should be able to return $expected when symbology = $symbology and value = $value",
    async ({ symbology, value, expected }) => {
      const result = isValid(symbology, value);
      expect(result).toBe(expected);
    }
  );

  it("should be able to return failure when symbology is invalid", () => {
    const symbology = "invalid";

    expect(() => {
      isValid(symbology, "7654321")();
    }).toThrow("Invalid symbology " + symbology);
  });
});
