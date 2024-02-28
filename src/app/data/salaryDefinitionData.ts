interface Employee {
  id: string;
  serialNumber: string;
  title: string;
  level: string;
  basicSalary: number;
  allowance: number;
  grossSalary: number;
  deductions: number;
  netSalary: number;
}

const employees: Employee[] = [
  {
    id: "1",
    serialNumber: "01",
    title: "Software Engineer",
    level: "Senior",
    basicSalary: 500,
    allowance: 100,
    grossSalary: 1000,
    deductions: 400,
    netSalary: 600,
  },
  {
    id: "2",
    serialNumber: "02",
    title: "Managing Director",
    level: "MD/CEO",
    basicSalary: 500,
    allowance: 100,
    grossSalary: 1000,
    deductions: 400,
    netSalary: 600,
  },
  {
    id: "3",
    serialNumber: "03",
    title: "Executive Director",
    level: "ED",
    basicSalary: 500,
    allowance: 100,
    grossSalary: 1000,
    deductions: 400,
    netSalary: 600,
  },
  {
    id: "4",
    serialNumber: "04",
    title: "General Manager",
    level: "GM",
    basicSalary: 500,
    allowance: 100,
    grossSalary: 1000,
    deductions: 400,
    netSalary: 600,
  },
  {
    id: "5",
    serialNumber: "05",
    title: "Deputy General Manager",
    level: "DGM",
    basicSalary: 500,
    allowance: 100,
    grossSalary: 1000,
    deductions: 400,
    netSalary: 600,
  },
  {
    id: "6",
    serialNumber: "06",
    title: "Software Engineer",
    level: "Middle",
    basicSalary: 500,
    allowance: 100,
    grossSalary: 1000,
    deductions: 400,
    netSalary: 600,
  },
  {
    id: "7",
    serialNumber: "07",
    title: "Software Engineer",
    level: "Junior",
    basicSalary: 500,
    allowance: 100,
    grossSalary: 1000,
    deductions: 400,
    netSalary: 600,
  },
  {
    id: "8",
    serialNumber: "08",
    title: "Manager",
    level: "MD/CEO",
    basicSalary: 500,
    allowance: 100,
    grossSalary: 1000,
    deductions: 400,
    netSalary: 600,
  },
  {
    id: "9",
    serialNumber: "09",
    title: "Asst. Manager",
    level: "MD/CEO",
    basicSalary: 500,
    allowance: 100,
    grossSalary: 1000,
    deductions: 400,
    netSalary: 600,
  },
  {
    id: "10",
    serialNumber: "10",
    title: "Deputy Manager",
    level: "MD/CEO",
    basicSalary: 500,
    allowance: 100,
    grossSalary: 1000,
    deductions: 400,
    netSalary: 600,
  },
];

export { employees };
