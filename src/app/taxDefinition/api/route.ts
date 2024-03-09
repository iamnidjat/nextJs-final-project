import { taxes } from "../../data/taxDefinitionData";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(taxes, { status: 200 });
}

export async function DELETE(req: Request) {
  const { id } = await req.json();

  const taxesIndex = taxes.findIndex((tax: any) => {
    return tax.id == id;
  });

  if (taxesIndex !== -1) {
    taxes.splice(taxesIndex, 1);

    return NextResponse.json(taxes[taxesIndex], { status: 204 });
  } else {
    return NextResponse.json({ error: "Tax not found" }, { status: 404 });
  }
}

export async function PATCH(req: Request) {
  const { sNumber, taxType, value, id } = await req.json();

  const taxesIndex = taxes.findIndex((tax: any) => tax.id == id);

  if (taxesIndex !== -1) {
    taxes[taxesIndex].serialNumber = sNumber;
    taxes[taxesIndex].taxType = taxType;
    taxes[taxesIndex].value = value;

    return NextResponse.json(taxes[taxesIndex], { status: 200 });
  } else {
    return NextResponse.json({ error: "Tax not found" }, { status: 404 });
  }
}