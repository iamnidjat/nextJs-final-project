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