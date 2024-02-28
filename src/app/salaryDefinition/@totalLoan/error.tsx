"use client";
import React from "react";

const TotalLoanErrorBoundary = ({ error }: { error: Error }) => {
  return <div>{error.message} - error !</div>;
};

export default TotalLoanErrorBoundary;