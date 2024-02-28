"use client";
import React from "react";

const SalaryDefinitionErrorBoundary = ({ error }: { error: Error }) => {
  return <div>{error.message} - error !</div>;
};

export default SalaryDefinitionErrorBoundary;
