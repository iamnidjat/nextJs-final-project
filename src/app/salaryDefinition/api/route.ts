import { employees } from "../../data/salaryDefinitionData";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(employees, { status: 200 });
}

export async function DELETE(req: Request) {
  const { id } = await req.json();

  const employeeIndex = employees.findIndex((employee: any) => {
    return employee.id == id;
  });

  if (employeeIndex !== -1) {
    employees.splice(employeeIndex, 1);

    return NextResponse.json(employees[employeeIndex], { status: 204 });
  } else {
    return NextResponse.json({ error: "Employee not found" }, { status: 404 });
  }
}

export async function PATCH(req: Request) {
  const {
    sNumber,
    title,
    level,
    basicSalary,
    allowance,
    grossSalary,
    deductions,
    netSalary,
    id,
  } = await req.json();

  const employeeIndex = employees.findIndex(
    (employee: any) => employee.id == id
  );

  if (employeeIndex !== -1) {
    employees[employeeIndex].serialNumber = sNumber;
    employees[employeeIndex].title = title;
    employees[employeeIndex].level = level;
    employees[employeeIndex].basicSalary = basicSalary;
    employees[employeeIndex].allowance = allowance;
    employees[employeeIndex].grossSalary = grossSalary;
    employees[employeeIndex].deductions = deductions;
    employees[employeeIndex].netSalary = netSalary;

    return NextResponse.json(employees[employeeIndex], { status: 200 });
  } else {
    return NextResponse.json({ error: "Employee not found" }, { status: 404 });
  }
}
