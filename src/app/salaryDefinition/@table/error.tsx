"use client";
import React from "react";

const TableErrorBoundary = ({ error }: { error: Error }) => {
  return <div>{error.message} - error !</div>;
};

export default TableErrorBoundary;