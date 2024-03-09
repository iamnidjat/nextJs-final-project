"use client";
import React from "react";

const TotalBudgetErrorBoundary = ({ error }: { error: Error }) => {
  return <div>{error.message} - error !</div>;
};

export default TotalBudgetErrorBoundary;