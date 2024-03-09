import { budgets } from "@/app/data/budgetHistory";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(budgets, { status: 200 });
}