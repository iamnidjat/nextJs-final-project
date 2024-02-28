interface Tax {
  id: string;
  serialNumber: string;
  taxType: string;
  value: number;
}

const taxes: Tax[] = [
  {
    id: "1",
    serialNumber: "01",
    taxType: "NHIS",
    value: 2.5,
  },
  {
    id: "2",
    serialNumber: "02",
    taxType: "VAT",
    value: 5,
  },
  {
    id: "3",
    serialNumber: "03",
    taxType: "WHT",
    value: 3,
  },
  {
    id: "4",
    serialNumber: "04",
    taxType: "NHIS",
    value: 2,
  },
  {
    id: "5",
    serialNumber: "05",
    taxType: "VAT",
    value: 2.5,
  },
];

export { taxes };
