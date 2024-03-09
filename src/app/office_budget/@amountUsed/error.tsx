"use client";
import React from "react";

const AmountUsedErrorBoundary = ({ error }: { error: Error }) => {
  return <div>{error.message} - error !</div>;
};

export default AmountUsedErrorBoundary;