import { payslips } from "../../data/employeePayslipHistoryData";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const { staffName, title, level, basicSalary, allowance, grossSalary, deductions, netSalary } = await req.json();
    const fullPayslip = {
      id: `${Date.now()}`,
      serialNumber: `${Date.now()}`,
      staffName: staffName, 
      title: title, 
      level: level,
      basicSalary: basicSalary,
      allowance: allowance, 
      grossSalary: grossSalary,
      deductions: deductions,
      netSalary: netSalary
    };
  
    payslips.push(fullPayslip);
  
    return NextResponse.json(fullPayslip, { status: 201 });
  }