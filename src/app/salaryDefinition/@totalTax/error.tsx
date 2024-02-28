"use client";
import React from "react";

const TotalTaxErrorBoundary = ({ error }: { error: Error }) => {
  return <div>{error.message} - error !</div>;
};

export default TotalTaxErrorBoundary;