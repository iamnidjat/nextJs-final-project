import { taxes } from "../../data/taxDefinitionData";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { taxType, value } = await req.json();
  const fullTax = {
    id: `${Date.now()}`,
    serialNumber: `${Date.now()}`,
    taxType: taxType,
    value: value,
  };

  taxes.push(fullTax);

  return NextResponse.json(fullTax, { status: 201 });
}
