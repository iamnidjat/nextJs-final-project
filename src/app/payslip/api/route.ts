import { payslips } from "../../data/employeePayslipHistoryData";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(payslips, { status: 200 });
}

export async function DELETE(req: Request) {
  const { id } = await req.json();

  const payslipIndex = payslips.findIndex((payslip: any) => {
    return payslip.id == id;
  });

  if (payslipIndex !== -1) {
    payslips.splice(payslipIndex, 1);

    return NextResponse.json(payslips[payslipIndex], { status: 204 });
  } else {
    return NextResponse.json({ error: "Payslip not found" }, { status: 404 });
  }
}