"use client";
import React from "react";

const TotalBalanceErrorBoundary = ({ error }: { error: Error }) => {
  return <div>{error.message} - error !</div>;
};

export default TotalBalanceErrorBoundary;