import { budgets } from "@/app/data/budgetHistory";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const {
    budgetDescription,
    budgetNumber,
    budgetAmount,
    date,
  } = await req.json();
  const fullBudget = {
    id: `${Date.now()}`,
    serialNumber: `${Date.now()}`,
    budgetDescription: budgetDescription,
    budgetNumber: budgetNumber,
    budgetAmount: budgetAmount,
    actualAmount: budgetAmount * 0.8,
    variance: budgetAmount * 0.2,
    date: date,
  };

  budgets.push(fullBudget);

  return NextResponse.json(fullBudget, { status: 201 });
}
