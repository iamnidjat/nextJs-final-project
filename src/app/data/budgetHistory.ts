function getDate(date: Date): string {
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  const formattedDate = `${year}/${month}/${day}`;
  return formattedDate;
}

interface Budget {
  id: string;
  serialNumber: string;
  budgetDescription: string;
  budgetNumber: string;
  budgetAmount: number;
  actualAmount: number;
  variance: number;
  date: string;
}

const budgets: Budget[] = [
  {
    id: "1",
    serialNumber: "01",
    budgetDescription: "Purchase of 10 units",
    budgetNumber: "00211235",
    budgetAmount: 100000,
    actualAmount: 80000,
    variance: +20000,
    date: getDate(new Date("2024-03-09")),
  },
  {
    id: "2",
    serialNumber: "02",
    budgetDescription: "Purchase of 10 units",
    budgetNumber: "30211235",
    budgetAmount: 250000,
    actualAmount: 160000,
    variance: -100000,
    date: getDate(new Date("2024-10-09")),
  },
  {
    id: "3",
    serialNumber: "03",
    budgetDescription: "Purchase of 10 units",
    budgetNumber: "06211235",
    budgetAmount: 10000,
    actualAmount: 8000,
    variance: +200000,
    date: getDate(new Date("2024-06-09")),
  },
  {
    id: "4",
    serialNumber: "04",
    budgetDescription: "Purchase of 10 units",
    budgetNumber: "00511235",
    budgetAmount: 100000,
    actualAmount: 90000,
    variance: -100000,
    date: getDate(new Date("2024-05-09")),
  },
  {
    id: "5",
    serialNumber: "05",
    budgetDescription: "Purchase of 10 units",
    budgetNumber: "00281235",
    budgetAmount: 200000,
    actualAmount: 180000,
    variance: +20000,
    date: getDate(new Date("2024-08-09")),
  },
];

export { budgets };
