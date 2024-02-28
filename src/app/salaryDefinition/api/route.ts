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
