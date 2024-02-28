"use client";
import React from "react";

const NetSalaryErrorBoundary = ({ error }: { error: Error }) => {
  return <div>{error.message} - error !</div>;
};

export default NetSalaryErrorBoundary;