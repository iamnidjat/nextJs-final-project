import { payslips } from "../../data/employeePayslipHistoryData";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const {
    staffName,
    title,
    level,
    basicSalary,
    housingAllowance,
    transportAllowance,
    utilityAllowance,
    productivityAllowance,
    communicationAllowance,
    inconvenienceAllowance,
    grossSalary,
    deductions,
    tax,
    pension,
    netSalary,
  } = await req.json();
  const fullPayslip = {
    id: `${Date.now()}`,
    serialNumber: `${Date.now()}`,
    staffName: staffName,
    title: title,
    level: level,
    basicSalary: basicSalary,
    allowance:
      parseInt(housingAllowance) +
      parseInt(transportAllowance) +
      parseInt(utilityAllowance) +
      parseInt(productivityAllowance) +
      parseInt(communicationAllowance) +
      parseInt(inconvenienceAllowance),
    housingAllowance: housingAllowance,
    transportAllowance: transportAllowance,
    utilityAllowance: utilityAllowance,
    productivityAllowance: productivityAllowance,
    communicationAllowance: communicationAllowance,
    inconvenienceAllowance: inconvenienceAllowance,
    grossSalary: grossSalary,
    deductions: deductions,
    tax: tax,
    employeePension: pension,
    netSalary: netSalary,
  };

  payslips.push(fullPayslip);

  return NextResponse.json(fullPayslip, { status: 201 });
}
