const { isValid } = require("./index");

// using this site to create tests https://orcascan.com/tools/free-barcode-generator

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
  {
    symbology: "upc_a",
    value: "1122261900581",
    expected: false,
  },
  {
    symbology: "upc_a",
    value: "96385074",
    expected: false,
  },
  {
    symbology: "upc_a",
    value: "090936000067",
    expected: false,
  },
  {
    symbology: "upc_a",
    value: "810012110099",
    expected: true,
  },
  {
    symbology: "upc_a",
    value: "090936000069",
    expected: true,
  },
  {
    symbology: "upc_a",
    value: "00810012110098",
    expected: false,
  },
  {
    symbology: "upc_a",
    value: "164400000197",
    expected: true,
  },
  {
    symbology: "upc_e",
    value: "14922640",
    expected: true,
  },
  {
    symbology: "upc_e",
    value: "15923875",
    expected: true,
  },
  {
    symbology: "upc_e",
    value: "14090501",
    expected: true,
  },
  {
    symbology: "upc_e",
    value: "17963961",
    expected: true,
  },
  {
    symbology: "upc_e",
    value: "02647494",
    expected: true,
  },
  {
    symbology: "upc_e",
    value: "17963962",
    expected: true,
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
