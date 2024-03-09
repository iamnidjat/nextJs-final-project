"use client";
import React from "react";

const OfficeBudgetErrorBoundary = ({ error }: { error: Error }) => {
  return <div>{error.message} - error !</div>;
};

export default OfficeBudgetErrorBoundary;
