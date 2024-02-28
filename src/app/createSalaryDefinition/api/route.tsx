import { employees } from "../../data/salaryDefinitionData";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const {
    title,
    level,
    basicSalary,
    allowance,
    grossSalary,
    deductions,
    netSalary,
  } = await req.json();
  const fullEmployee = {
    id: `${Date.now()}`,
    serialNumber: `${Date.now()}`,
    title: title,
    level: level,
    basicSalary: basicSalary,
    allowance: allowance,
    grossSalary: grossSalary,
    deductions: deductions,
    netSalary: netSalary,
  };

  employees.push(fullEmployee);

  return NextResponse.json(fullEmployee, { status: 201 });
}
