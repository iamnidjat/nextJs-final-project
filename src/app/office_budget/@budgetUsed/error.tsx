"use client";
import React from "react";

const BudgetUsedErrorBoundary = ({ error }: { error: Error }) => {
  return <div>{error.message} - error !</div>;
};

export default BudgetUsedErrorBoundary;