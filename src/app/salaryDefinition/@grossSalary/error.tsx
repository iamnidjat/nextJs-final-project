"use client";
import React from "react";

const GrossSalaryErrorBoundary = ({ error }: { error: Error }) => {
  return <div>{error.message} - error !</div>;
};

export default GrossSalaryErrorBoundary;